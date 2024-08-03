import React, { useRef, useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Content() {
  const fileInputRef = useRef(null);
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

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('name', form.name);
    formData.append('category', form.category);
    formData.append('price', form.price);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        access_token: accessToken,
      },
    };

    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/admin/car',
        formData,
        config
      );
      setTimeout(() => {
        sessionStorage.setItem('successMessage', 'Data Berhasil Ditambahkan');
        sessionStorage.setItem('color', '#73CA5C');
        navigate('/admin/listcar');
      }, 1000);
    } catch (error) {}
  };

  const handleCancel = () => {
    navigate('/admin/listcar');
  };

  return (
    <div className="content px-52 pt-24">
      <div className="breadcrumb">Cars &gt; List Car &gt; Add Car</div>
      <div className="Add-car">
        <h2 className="font-bold">Add New Car</h2>
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
                  <>
                    <div>Upload foto mobil</div>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </>
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
            onClick={handleCancel}
            className="px-3 py-2 bg-[#ffffff] border-[1px] border-[#0D28A6] text-[#0D28A6] font-bold text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={
              !form.name || !form.price || !form.category || !selectedFile
            }
            className={`px-3 py-2 border-[1px] text-sm font-bold ${
              !form.name || !form.price || !form.category || !selectedFile
                ? 'bg-[#7486d6] border-[#7486d6] text-gray-200'
                : 'bg-[#0D28A6] border-[#0D28A6] text-[#ffffff]'
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
