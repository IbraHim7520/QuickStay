import React, { use } from 'react';
import Logo from "../assets/logo.jpg"
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import UserContext from '../Authentication/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
//import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const naviagte = useNavigate();
  const path =  useLocation();
  const { User, UserSignout, setUser } = use(UserContext);
  const handleUserLogout = () => {
    UserSignout()
      .then(() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to use some features!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout!"
        }).then((result) => {
          if (result.isConfirmed) {
            if (path.pathname === "/my-bookings"){
              naviagte("/")
            }
            setUser('')
            Swal.fire({
              title: "Log Out!",
              text: "Your account has been logout.",
              icon: "success"
            });
          }
        });
      })
  }

  return (
    <div className="navbar  flex justify-between items-center px-3 md:px-8  lg:px-16 bg-base-200  shadow-sm">
      <div className="flex justify-center items-center gap-2 ">
        <div className="dropdown  block md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content font-semibold flex flex-col space-y-3 bg-base-300 rounded-box shadow-md z-1 mt-3 w-52 p-2 shadow">
            <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"} >Home</NavLink>
            <NavLink to={'/rooms'} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"} >Rooms</NavLink>
            <li>My Bookings</li>
            <li><Link to={"/login"} className='btn btn-sm btn-primary'>Sign In</Link></li>
          </ul>
        </div>
        <img src={Logo} className='w-7 md:w-9'></img>
        <Link><h1 className='md:text-xl font-bold text-gray-700'>QuickStay</h1></Link>
      </div>

      <div className="hidden md:block">
        <ul className='flex justify-center font-semibold items-center gap-3'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"} >Home</NavLink>
          <NavLink to={'/rooms'} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"} >Rooms</NavLink>
          {
            User && <NavLink to={'/my-bookings'} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >My Bookings</NavLink>
          }
          {
            User ?
              <div className='flex justify-center itemx-center gap-2'>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                    <img src={User?.photoURL} />
                  </div>
                </div>
                <button onClick={handleUserLogout} className='btn text-white btn-error rounded-full px-8 btn-sm'>Logout</button>
              </div>
              :
              <li><Link to={"/login"} className='btn btn-sm px-8 rounded-full btn-primary'>Sign In</Link></li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;