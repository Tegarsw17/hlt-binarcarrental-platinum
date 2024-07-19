import React from 'react';
import './style.css';
import Sidebar from '../../../components/admin/Sidebar';
import Navbar from '../../../components/admin/Navbar/Navbar';
import Content from '../../../components/admin/Content';

function addcars() {
  return (
    <div className="admin-page-color w-full h-full">
      <Navbar />
      <Content />
    </div>
  );
}

export default addcars;
