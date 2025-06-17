import React from 'react';
import { FaLocationArrow, FaStar } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router';

const RoomCard = ({ room }) => {
    const { _id, name, image, roomRating, hotelLocation,  pricePerNight } = room
    const navigate = useNavigate();
    const handleSeeDetails = (id) =>{
        navigate(`/rooms_details/${id}`)
    }
    return (
        <div onClick={()=>handleSeeDetails(_id)} className="card  hover:cursor-pointer hover:bg-gray-200  w-80 bg-base-200  shadow-sm">
            <figure>
                <img
                    className='h-52  w-full object-cover'
                    src={image}
                    alt="Shoes" />
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
                <div className="flex justify-between items-center">
                    <div className='flex items-center justify-center'>
                        <h1><span className='text-2xl font-semibold'>${pricePerNight}</span>/Night</h1>
                    </div>
                    <button className="btn btn-outline btn-sm btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};
export default RoomCard;