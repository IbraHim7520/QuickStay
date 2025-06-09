import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import RoomCard from '../Components/RoomCard';
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
    const [roomData , setRoomData] = useState([]);
    const [loading , setLoading] = useState(true)
 useEffect( ()=>{
    fetch('http://localhost:5000/roomDetails')
    .then(res => res.json()).then(data => {
        if(data){
            setLoading(false)
            setRoomData(data)
        }else{
            setLoading(true);
            setRoomData([])
        }
    })
 }, [] )
    return (
        <div>
            <Banner></Banner>
            <section className='mt-12 px-3 md:px-8  lg:px-16'>
                <h1 className='text-center mb-4 text-3xl font-semibold'>Featured Destination</h1>
                <p className='text-center'>Discover our handpicked selection of exceptional properties around the world, offering<br></br>unparalleled luxury and unforgettable experiences.</p>
            
            
            <div>
               {
                loading ? 
                <div className='flex justify-center p-12 w-full items-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
                :
                <div className='grid mt-8 gap-5 justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        roomData.map( room => <RoomCard room={room} key={room._id}></RoomCard> )
                    }
                </div>
               }
            </div>
            
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