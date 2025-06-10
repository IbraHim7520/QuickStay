import React from 'react';
import b1 from "../assets/banner1.jpg"
import b2 from "../assets/banner2.jpg"
import b3 from "../assets/banner3.jpg"
import { motion } from "framer-motion";
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='relative'>
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item  relative w-full">
                <img
                    src={b1}
                    className="w-full blur-xs object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={b2}
                    className="w-full blur-xs object-coverl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={b3}
                    className="w-full blur-xs object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        
        </div>
            <motion.div
             initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
            className='absolute pointer-events-none top-[40%] text-white w-full text-center'>
                <h1 className='text-sm bg-blue-200 w-fit mx-auto px-5 p-1 text-black rounded-full '>The Ultimate Travel Experience</h1>
                <h1 className='text-3xl font-bold shadow-md '>Discover Your<br></br>Perfect Getway Destination</h1>
                <p className='font-semibold '>Unparalleled luxury and comfort await at the world's most<br></br>exclusive hotels and resorts. Start your journey today.</p>
                <Link to={"/rooms"} className='btn px-12 mt-5  btn-primary'>Book Now</Link>
            </motion.div>
         </div>
    );
};

export default Banner;