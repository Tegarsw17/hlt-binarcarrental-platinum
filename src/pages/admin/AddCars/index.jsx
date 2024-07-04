import React from 'react';
import './style.css';
import Sidebar from '../../../components/admin/Sidebar';
import Navbar from '../../../components/admin/Navbar';
import Content from '../../../components/admin/Content';

function addcars() {
  return (
    <div className="addcars">
       <Sidebar />
      <Navbar />
      <Content />
      </div>
    
  
  );
}

export default addcars;
