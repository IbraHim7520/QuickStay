import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const RoomCardList = ({ room }) => {
    const { _id, name, image, roomRating, hotelLocation, pricePerNight } = room
    return (
         <div className="card w-full h-60 card-side bg-base-300 shadow-sm">
            <figure className="w-2/5 min-w-[150px]">
                <img
                    className='h-full w-full object-cover'
                    src={image}
                    alt="Rooms"
                />
            </figure>
            <div className="card-body p-4 w-3/5 flex flex-col justify-between">
                {/* Title and Rating */}
                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-base md:text-lg">{name}</h2>
                    <div className='flex items-center gap-1'>
                        <p>{roomRating}</p>
                        <FaStar className='text-amber-500' />
                    </div>
                </div>

                {/* Location */}
                <div className='flex items-center gap-1 mt-1'>
                    <CiLocationOn size={18} />
                    <p className="text-sm">{hotelLocation}</p>
                </div>

                {/* Price and Book Button */}
                <div className='flex flex-col md:flex-row justify-between items-center mt-3 gap-2'>
                    <h1 className="text-sm md:text-base">
                        <span className='text-lg font-semibold'>${pricePerNight}</span> /Night
                    </h1>
                    <button className="btn btn-outline btn-sm btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCardList;