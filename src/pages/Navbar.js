import React from 'react';
import CustomLink from '../components/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  }

  const navLink =
    <>
      <div className='lg:flex mt-5'>
        <p className='mx-2 mb-2 font-semibold'><CustomLink to='/home'>Home</CustomLink></p>
        <p className='mx-2 font-semibold'><CustomLink to='/blogs'>Blogs</CustomLink></p>
        <p className='mx-2 font-semibold'><CustomLink to='/dashboard/myorders'>Dashboard</CustomLink></p>

        {user && <div class="avatar mb-2 mx-2">
          <div class="w-10 rounded-full">
            <img src={user?.photoURL} alt='' />
          </div>
        </div>}

        {user && <p className='mx-2 font-serif font-semibold '>{user?.displayName}</p>}

        {user ? <p className='mx-2 font-semibold text-orange-400 lg:ml-10'><CustomLink to='' onClick={logout}>Sign out</CustomLink></p> : <p className='mx-2 font-semibold'> <CustomLink to='/login' >Login</CustomLink></p>}
      </div>


    </>
  return (
    <div className="navbar z-50 fixed top-0 lg:justify-center  bg-slate-50 shadow-sm ">
      <div className="navbar-start">

        <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <p className="normal-case text-3xl font-extrabold font-serif text-slate-900 space-x-1">
          <span className='text-indigo-500'>P</span>
          <span className='text-gray-600'>T</span>
          <span className='text-red-500'>o</span>
          <span className='text-orange-400'>o</span>
          <span className='text-purple-500'>l</span>
          <span className='text-green-300'>s</span>
        </p>

        <div className="dropdown ml-40">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-x-2 ">
          {navLink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;