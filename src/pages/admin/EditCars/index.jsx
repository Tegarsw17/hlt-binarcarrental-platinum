import React from 'react';
import './style.css';
import Sidebar from '../../../components/admin/Sidebar';
import Navbar from '../../../components/admin/Navbar';
import EditContent from '../../../components/admin/EditContent';

function addcars() {
  return (
    <div className="addcars">
       <Sidebar />
      <Navbar />
      <EditContent />
      </div>
    
  
  );
}

export default addcars;
