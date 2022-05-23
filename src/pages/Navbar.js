import React from 'react';
import CustomLink from '../components/CustomLink';

const Navbar = () => {
  const menuItmes =
    <>
     <div className='lg:flex p-10'>
      <p className='mx-2 font-semibold'><CustomLink to='/home'>Home</CustomLink></p>
      <p className='mx-2 font-semibold'><CustomLink to='/products'>Products</CustomLink></p>
      <p className='mx-2 font-semibold'><CustomLink to='/blogs'>Blogs</CustomLink></p>
      <p className='mx-2 font-semibold'><CustomLink to='/dashboard'>Dashboard</CustomLink></p>
      <p className='mx-2 font-semibold'><CustomLink to='/login'>Login</CustomLink></p>

      <div class="avatar mx-2">
        <div class="w-10 rounded-full">
          <img src={`https://stickerly.pstatic.net/sticker_pack/y79pP0GdjdaDlvYIEobhoA/V9JV8S/35/0513d979-3b61-4818-878c-97f6d94f6d06.png`} alt='' />
        </div>
      </div>
     </div>

      
    </>
  return (
    <div className="navbar z-50 fixed top-0 lg:justify-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItmes}
          </ul>
        </div>
        <p className="normal-case text-3xl font-extrabold">PTools hub</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-x-2 ">
          {menuItmes}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;