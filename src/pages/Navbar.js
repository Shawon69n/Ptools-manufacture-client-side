import React from 'react';
import CustomLink from '../components/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png'
const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  }

  const navLink =
    <>
      <div className='lg:flex justify-center items-center'>
        <p className='mx-2 font-semibold'><CustomLink to='/home'>Home</CustomLink></p>
        <p className='mx-2 font-semibold'><CustomLink to='/blogs'>Blogs</CustomLink></p>
        <p className='mx-2 font-semibold'><CustomLink to='/dashboard/myorders'>Dashboard</CustomLink></p>
       {user && <div class="avatar online ml-10">
          <div class="w-10 rounded-full">
            <img src={user.photoURL ? user.photoURL : avatar} alt='' />
          </div>
        </div>}
        {user && <p className='mx-2 font-serif font-semibold '>{user?.displayName}</p>}

        {user ? <p className='mx-2 font-semibold text-orange-400 lg:ml-10'><Link to='' onClick={logout}><span className='badge p-5 badge-lg'>Log out</span></Link></p> : <p className='mx-2 font-semibold'> <Link to='/login' ><span className='badge ml-5 p-5 badge-lg'>Login</span></Link></p>}
      </div>



    </>
  return (
    <div className="navbar z-50 fixed top-0 lg:justify-center  bg-slate-50 shadow-sm ">
      <div className="navbar-start">

        <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>

        <div className="normal-case text-3xl font-extrabold font-serif text-slate-900 space-x-1">
          <span className='text-indigo-500'>P</span>
          <span className='text-gray-600'>T</span>
          <span className='text-red-500'>o</span>
          <span className='text-orange-400'>o</span>
          <span className='text-purple-500'>l</span>
          <span className='text-green-300'>s</span>
        </div>

        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden ml-40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-x-2 ">
          {navLink}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;