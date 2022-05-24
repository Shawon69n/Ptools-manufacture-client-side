import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16 bg-slate-200">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-300">
            {/* <!-- Sidebar content here --> */}
            <h1 className='ml-3 mt-3 font-serif font-semibold text-xl'>Dashboard</h1>
            <li><Link to=''>My orders</Link></li>
            <li><Link to=''>Add a review</Link></li>
            <li><Link to=''>My profile</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;