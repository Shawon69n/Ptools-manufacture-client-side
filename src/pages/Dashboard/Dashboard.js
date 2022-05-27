import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        {/* <!-- Page content here --> */}
        
        <Outlet></Outlet>

      </div>

      <div className="drawer-side">
        <label   htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-300">
          {/* <!-- Sidebar content here --> */}
          <h1 className='ml-3 mt-3 font-serif font-semibold text-xl mb-5'><span className='border-b-2 pb-2 border-slate-800'>Dashboard</span></h1>
          
          {admin === false && <li><NavLink to='/dashboard/myorders'>My orders</NavLink></li>}
          {admin === false &&<li><NavLink to='/dashboard/addreview'>Add a review</NavLink></li>}
          <li><NavLink to='/dashboard/myprofile'>My profile</NavLink></li>

          {admin === true && <li><NavLink to='/dashboard/users'>Users</NavLink></li>}
          {admin === true && <li><NavLink to='/dashboard/manageorders'>Manage Orders</NavLink></li>}
          {admin === true && <li><NavLink to='/dashboard/addproduct'>Add Product</NavLink></li>}
          {admin === true && <li><NavLink to='/dashboard/manageproducts'>Manage products</NavLink></li>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;