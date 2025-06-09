import React from 'react';
import Banner from '../Components/Banner';
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='mt-12 px-3 md:px-8  lg:px-16'>
                <h1 className='text-center mb-4 text-3xl font-semibold'>Featured Destination</h1>
                <p className='text-center'>Discover our handpicked selection of exceptional properties around the world, offering<br></br>unparalleled luxury and unforgettable experiences.</p>
            </section>

            <section className='mt-12 px-3 md:px-8  lg:px-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Exclusive Offers</h1>
                        <p>Take advantage of our limited-time offers and special packages to enhance<br></br>your stay and create unforgettable memories.</p>
                    </div>
                    <div className='flex items-center '>
                        <h1 className='text-sm '>View All Offers</h1>
                        <FaArrowRight size={13}></FaArrowRight>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Home;