import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const RoomCardList = ({ room }) => {
    const { _id, name, image, roomRating, hotelLocation, type, pricePerNight } = room
    return (
        <div className="card w-full h-60 card-side bg-base-300 shadow-sm">
            <figure>
                <img
                    className='h-full  w-80 object-cover'
                    src={image}
                    alt="Rooms" />
            </figure>
            <div className="card-body">
                <div className='flex w-full justify-between  items-center'>
                    <h2 className="card-title">{name}</h2>
                    <div className='flex  items-center'>
                        <p className='text-end '>{roomRating}</p>
                        <span className='text-amber-500'><FaStar></FaStar></span>
                    </div>

                </div>
                <div className='flex mt-4 items-center gap-1 w-full'>
                    <CiLocationOn size={18}></CiLocationOn>
                    <p>{hotelLocation}</p>
                </div>
                <div className='flex flex-col md:flex-row mt-5 md:mt-20 w-full justify-between items-center'>
                    <div className='flex  items-center justify-center'>
                        <h1><span className='text-2xl font-semibold'>${pricePerNight}</span>/Night</h1>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-sm btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCardList;