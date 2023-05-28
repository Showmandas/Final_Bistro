import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content text-white">
      <li><Link to={'/dashboard/home'}>User Home</Link></li>
      <li><Link to={'/dashboard/reservations'}>Reservations</Link></li>
      <li><Link to={'/dashboard/mycart'}>My Cart</Link></li>
      <li><Link to={'/dashboard/history'}>Payment History</Link></li>
      <div className="divider"></div>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;