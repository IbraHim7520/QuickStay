import moment from 'moment';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CiLocationOn } from "react-icons/ci";
import { data, Link, useNavigate } from 'react-router';
const BookedRooms = ({ room , handleCancelBooking, roomID}) => {
    const { _id, image, name, price, Date, address, hotelName } = room

    return (
        <div className="card card-side bg-base-200 shadow-sm">
            <Toaster></Toaster>
            <figure>
                <img
                    className='w-50'
                    src={image}
                    alt="Room" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm font-semibold'>{moment(Date).format('MMM Do YY')}</p>
                <div>
                    <div className='flex justify-start items-center gap-2'>
                        <CiLocationOn size={20}></CiLocationOn>
                        <div className='flex flex-col text-start text-xs md:text-sm md:flex-row items-center justify-start'>
                            <p>{hotelName}</p>
                            <p>{address}</p>
                        </div>
                    </div>
                    <hr className='text-gray-500 mt-2'></hr>
                </div>
                <div className='w-full justify-between flex flex-col md:flex-row gap-2  items-center'>
                    <h1 className='font-semibold text-xl text-gray-700'>${price}/night</h1>
                    <div className="card-actions justify-end">
                        <Link to={`/rooms_details/${roomID}`} className='btn w-full md:w-fit btn-secedary btn-sm btn-outline'>Post Review</Link>
                        <button className='btn w-full md:w-fit btn-sm btn-primary btn-outline'>Update Date</button>
                        <button onClick={() => handleCancelBooking(_id, Date)} className="btn w-full md:w-fit btn-error btn-sm btn-outline">Cancel Booking</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedRooms;