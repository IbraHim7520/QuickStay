import React from 'react';
import Logo from "../assets/anim/logo.png"
const Footer = () => {
    return (
       <footer className="footer mt-24 sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
      <img src={Logo} className='w-36 '>

      </img>
    <p className='text-xl font-bold'>
      QuickStay
      <br />
     <span className='text font-normal'>Providing reliable tech since 1992</span>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Rooms</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    );
};

export default Footer;