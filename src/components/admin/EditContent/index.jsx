import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function EditContent() {
  const { id } = useParams();
  const fileInputRef = useRef(null);
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setName(file.name);
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const accessToken = useSelector(
    (state) => state.authAdminReducer.access_token_admin
  );

  const getCarData = async () => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        access_token: accessToken,
      },
    };
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/car/${id}`,
        config
      );
      setData(response.data);
      setForm({
        name: response.data.name,
        category: response.data.category,
        price: response.data.price,
      });
    } catch (error) {}
  };

  const handleSave = async () => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        access_token: accessToken,
      },
    };
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('category', form.category);
    formData.append('price', form.price);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    try {
      await axios.put(
        `https://api-car-rental.binaracademy.org/admin/car/${id}`,
        formData,
        config
      );

      setTimeout(() => {
        sessionStorage.setItem('successMessage', 'Data Berhasil Diubah');
        sessionStorage.setItem('color', '#0D28A6');
        navigate('/admin/listcar');
      }, 1000);
    } catch (error) {}
  };

  useEffect(() => {
    getCarData();
  }, []);

  return (
    <div className="content px-52 pt-24">
      <div className="breadcrumb">Cars &gt; List Car &gt; Edit Car</div>
      <div className="Add-car">
        <h2 className="font-bold">Edit Car</h2>
        <div className="bg-white p-4 flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <p className="w-[147px]">
              Nama/tipe mobil<span className="text-red-500">*</span>
            </p>
            <input
              className="w-[339px] h-[36px] py-2 px-3 border-[1px] border-[#D0D0D0] rounded-md"
              type="text"
              placeholder="Input Nama/Tipe Mobil"
              name="name"
              value={form.name}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <p className="w-[147px]">
              Harga<span className="text-red-500">*</span>
            </p>
            <input
              className="w-[339px] h-[36px] py-2 px-3 border-[1px] border-[#D0D0D0] rounded-md"
              type="number"
              placeholder="Input Harga sewa mobil"
              name="price"
              value={form.price}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex items-start gap-2">
            <p className="w-[147px]">
              Foto<span className="text-red-500">*</span>
            </p>
            <div>
              <input
                className="hidden"
                ref={fileInputRef}
                type="file"
                onChange={handleFileInputChange}
              />
              <div
                className="w-[339px] h-[36px] py-2 px-3 border-[1px] border-[#D0D0D0] rounded-md flex items-center cursor-pointer justify-between text-[#8A8A8A]"
                onClick={handleFileInputClick}
              >
                {previewUrl ? (
                  <div className="flex gap-2 items-center">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-[30px] h-[30px]"
                    />
                    <div>{name}</div>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <img
                      src={data.image}
                      alt="Preview"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                )}
              </div>
              <p className="text-[10px] text-[#8A8A8A] mt-1">
                File size max. 2MB
              </p>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="w-[147px]">
              Kategori<span className="text-red-500">*</span>
            </p>
            <select
              className="w-[339px] h-[36px] py-2 px-3 border-[1px] border-[#D0D0D0] text-sm rounded-md"
              type="text"
              placeholder="Input Nama/Tipe Mobil"
              name="category"
              value={form.category}
              onChange={handleFormChange}
            >
              <option value={''} className="text-sm text-[#8A8A8A]">
                Pilih Kategori Mobil
              </option>
              <option value={'small'} className="">
                2 - 4 orang
              </option>
              <option value={'medium'} className="">
                4 - 6 orang
              </option>
              <option value={'large'} className="">
                6 - 8 orang
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate('/admin/listcar')}
            className="px-3 py-2 bg-[#ffffff] border-[1px] border-[#0D28A6] text-[#0D28A6] font-bold text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={selectedFile ? false : true}
            className={`px-3 py-2 ${selectedFile ? 'bg-[#0D28A6] border-[#0D28A6]' : 'bg-[#CFD4ED] border-[#CFD4ED]'} border-[1px]  text-[#ffffff] font-bold text-sm`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditContent;
