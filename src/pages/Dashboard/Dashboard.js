import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        {/* <!-- Page content here --> */}
        
        <Outlet></Outlet>

      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-300">
          {/* <!-- Sidebar content here --> */}
          <h1 className='ml-3 mt-3 font-serif font-semibold text-xl mb-5'><span className='border-b-2 pb-2 border-slate-800'>Dashboard</span></h1>
          <li><NavLink to='/dashboard/myorders'>My orders</NavLink></li>
          <li><NavLink to='/dashboard/addreview'>Add a review</NavLink></li>
          <li><NavLink to='/dashboard/myprofile'>My profile</NavLink></li>
          <li><NavLink to='/dashboard/users'>Users</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;