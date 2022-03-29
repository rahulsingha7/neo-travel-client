import React from 'react';
import admin from '../../images/admin/admin1.png'
import Admin from './Admin/Admin';
const AdminPanel = () => {
  return (
    <div className="overflow-hidden">
      <div className='row'>
          <div className='col-md-2 col-1'>
          <Admin></Admin>
          </div>
          <div className='col-md-10'>
            <img src={admin} alt=""/>
          </div>
      </div>
    </div>
  );
};

export default AdminPanel;