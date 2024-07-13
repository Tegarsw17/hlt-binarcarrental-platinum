import React, { useState } from 'react';
import './style.css';
import { useSearchParams } from 'react-router-dom';

const SearchCar = ({ isDisabled = false, onSearch }) => {
  const [isFormFocused, setIsFormFocused] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: searchParams.get('name') || '',
    category: searchParams.get('category') || '',
    price: searchParams.get('price') || '',
    status: searchParams.get('status') || '',
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendQueryApi = () => {
    setIsFormFocused(false);
    setSearchParams(form);
    onSearch(form);
  };

  return (
    <div className="search-car-wrapper">
      <div className="search-car">
        <form
          className="search-bar"
          onFocus={() => setIsFormFocused(true)}
          onBlur={() => setIsFormFocused(false)}
          onSubmit={(e) => {
            e.preventDefault();
            sendQueryApi();
          }}
        >
          <div className="form-group">
            <label htmlFor="car_name">Nama Mobil</label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Ketik nama/tipe mobil"
              className="input-field"
              onChange={handleOnChange}
              disabled={isDisabled}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select
              className="input-field"
              name="category"
              value={form.category}
              onChange={handleOnChange}
              disabled={isDisabled}
            >
              <option value={''} className="">
                Masukan Kapasitas Mobil
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
          <div className="form-group">
            <label htmlFor="price">Harga</label>
            <select
              className="input-field"
              name="price"
              value={form.price}
              onChange={handleOnChange}
              disabled={isDisabled}
            >
              <option value={''} className="">
                Masukan Sewa perhari
              </option>
              <option value={'lt_400'} className="">
                &lt; Rp 400.000
              </option>
              <option value={'400_600'} className="">
                Rp 400.000 - Rp 600.000
              </option>
              <option value={'gt_600'} className="">
                &gt; Rp 600.000
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              className="input-field"
              name="status"
              value={form.status}
              onChange={handleOnChange}
              disabled={isDisabled}
            >
              <option value={''} className="">
                Status
              </option>
              <option value={true} className="">
                Disewa
              </option>
              <option value={false} className="">
                Tersedia
              </option>
            </select>
          </div>
          <button
            style={{ display: isDisabled ? 'none' : '' }}
            type="submit"
            className="search-button"
          >
            Cari Mobil
          </button>
        </form>
      </div>
      <div
        className="black-screen-hover"
        style={{ display: isFormFocused ? 'block' : 'none' }}
      ></div>
    </div>
  );
};

export default SearchCar;
