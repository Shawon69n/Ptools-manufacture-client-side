import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16 bg-slate-200">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
         
        <Outlet></Outlet>
          
        </div> 

        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-300">
            {/* <!-- Sidebar content here --> */}
            <h1 className='ml-3 mt-3 font-serif font-semibold text-xl'>Dashboard</h1>
            <li><NavLink to='/dashboard/myorders'>My orders</NavLink></li>
            <li><NavLink to='/dashboard/addreview'>Add a review</NavLink></li>
            <li><NavLink to='/dashboard/myprofile'>My profile</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;