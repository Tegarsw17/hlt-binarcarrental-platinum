import React from 'react';
import './style.css';

import Navbar from '../../../components/admin/Navbar/Navbar';
import EditContent from '../../../components/admin/EditContent';

function EditCar() {
  return (
    <div className="admin-page-color w-full h-full">
      <Navbar />
      <EditContent />
    </div>
  );
}

export default EditCar;
