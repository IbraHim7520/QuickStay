import moment from 'moment';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CiLocationOn } from "react-icons/ci";
import { data, Link, useNavigate } from 'react-router';
const BookedRooms = ({ room , handleCancelBooking, roomID }) => {
    const { _id, image, name, price, Date, address, hotelName } = room
    const [bookedRoomDate , setBookedRoomDate] = useState(Date);


    const handleUpdateBooking = (id) => {
        const modal = document.getElementById('updateModal');
        modal.show();

    }
    const updateBookingDate = (e , bookedRoomID) => {
        e.preventDefault()
        const updatedDate = e.target.date.value;
        fetch(`http://localhost:5000/update-booking/${bookedRoomID}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ Date: updatedDate })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Data Successfully Updated")
                setBookedRoomDate(updatedDate)
                document.getElementById('updateModal').close()
            }).catch(err=>{
                toast.error("Something error!");
            })
    }
    
    return (
        <div className="card card-side bg-base-200 shadow-sm">
                        <dialog id="updateModal" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Update Date</h3>
                                <form onSubmit={(e) => updateBookingDate(e , _id)} className='w-full space-y-2'>
                                    <div className='w-full'>
                                        <legend>New Date</legend>
                                        <input name='date' required className='input w-full' type='date' ></input>
                                    </div>
                                    <button type='submit' className='w-full btn btn-sm btn-success'>Update</button>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
            <Toaster></Toaster>
            <figure>
                <img
                    className='w-50'
                    src={image}
                    alt="Room" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm font-semibold'>{moment(bookedRoomDate).format('MMM Do YY')}</p>
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
                        <button onClick={()=>handleUpdateBooking(_id)} className='btn w-full md:w-fit btn-sm btn-primary btn-outline'>Update Date</button>
                        <button onClick={() => handleCancelBooking(_id, Date)} className="btn w-full md:w-fit btn-error btn-sm btn-outline">Cancel Booking</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedRooms;