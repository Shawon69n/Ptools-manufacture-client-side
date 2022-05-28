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
        <p className='mx-2 font-semibold'><CustomLink to='/portfolio'>Portfolio</CustomLink></p>
        {user && <p className='mx-2 font-semibold'><CustomLink to='/dashboard'>Dashboard</CustomLink></p>}
       {user && <div className="avatar online ml-3 lg:ml-10">
          <div className="w-10 rounded-full">
            <img src={user.photoURL ? user.photoURL : avatar} alt='' />
          </div>
        </div>}
        {user && <p className='mx-2 badge badge-outline  font-semibold '>{user?.displayName}</p>}

        {user ? <p className='mx-2 font-semibold text-orange-400 lg:ml-10'><Link to='' onClick={logout}><span className='lg:badge lg:p-5 badge-lg'>Log out</span></Link></p> : <p className='mx-2 font-semibold'> <Link to='/login' ><span className='badge lg:ml-5 lg:p-5 badge-lg'>Login</span></Link></p>}
      </div>



    </>
  return (
    <div className="navbar z-50 fixed top-0 lg:justify-center  bg-slate-50 shadow-sm ">
      <div className="navbar-start">

        <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
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
          <label tabIndex="0" className="btn btn-ghost lg:hidden ml-36">
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