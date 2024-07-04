import React from 'react';
import './style.css';

function EditContent() {
  return (
    <div className="content">
      <div className="breadcrumb">
        Cars &gt; List Car &gt; Edit Car
      </div>
      <div className="edit-car">
        <h2>Edit Car</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" value="Innova" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Harga*</label>
            <input type="text" id="price" value="Rp 600.000" />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Foto*</label>
            <input type="text" id="photo" value="IMG/20220901" />
            <button>Upload</button>
          </div>
          <div className="form-group">
            <label htmlFor="category">Kategori*</label>
            <select id="category">
              <option value="6-8 orang">6 - 8 orang</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="created-at">Created at</label>
            <input type="text" id="created-at" disabled value="-" />
          </div>
          <div className="form-group">
            <label htmlFor="updated-at">Updated at</label>
            <input type="text" id="updated-at" disabled value="-" />
          </div>
          <div className="form-actions">
            <button className="cancel">Cancel</button>
            <button className="save">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContent;
