import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { CiLocationOn } from 'react-icons/ci';
import Testimonial from '../Components/Testimonial';
import ReviewCard from '../Components/ReviewCard';
import UserContext from '../Authentication/UserContext';
import moment from 'moment/moment';
import toast, { Toaster } from 'react-hot-toast';


const RoomDetails = () => {
    const { User } = useContext(UserContext);
    const data = useLoaderData();
    const navigate = useNavigate();
    const [roomData, setRoomData] = useState(data);

    const {
        _id, roomNumber, floor, name, description, pricePerNight, capacity,
        type, bedType, cooling, balconyAvailable, balconyView, features,
        amenities, image, hotelName, hotelLocation, roomRating,
        Booked, reviews, 
    } = roomData;

    const [Book, setBook] = useState(Booked);

    const handleRoomBooking = () => {
        const modal = document.getElementById('my_modal');
        modal.showModal();
    };

    const handlehotelBooking = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const time = moment(date, "YYYYMMDD").fromNow();

        if (time.includes('ago')) {
            toast.error("You cannot Book on previous date");
        } else {
            fetch(`http://localhost:5000/room_booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    Date: date,
                    RoomID: _id,
                    BookedBy: User?.email,
                })
            }).then(res => res.json())
            .then(data => {
                setBook(true)
                toast.success('Room has been Booked!')
                document.getElementById('my_modal').close()
                console.log(data)
            } )
        }
    };

    return (
        <div>
            <Toaster />

            <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirmation</h3>
                    <form onSubmit={handlehotelBooking} className='space-y-3'>
                        <div className='w-full'>
                            <legend className='text-sm'>Name:</legend>
                            <input value={name} readOnly className='input w-full' />
                        </div>
                        <div className='flex justify-center gap-2 items-center'>
                            <div className='w-full'>
                                <legend className='text-sm'>Hotel Location:</legend>
                                <input value={hotelLocation} readOnly className='input w-full' />
                            </div>
                            <div className='w-full'>
                                <legend className='text-sm'>Room Location:</legend>
                                <input value={roomNumber} readOnly className='input w-full' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <legend className='text-sm'>Price:</legend>
                            <input value={pricePerNight} readOnly className='input w-full' />
                        </div>
                        <div className='w-full'>
                            <legend className='text-sm'>Select Booking Date:</legend>
                            <input name='date' required type='date' className='input w-full' />
                        </div>
                        <button type='submit' className='btn btn-primary w-full'>Book</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-error">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="container p-2 md:p-3 lg:p-5 w-full mx-auto">
                <div className='flex flex-col items-start pb-8 pt-5 justify-center'>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='text-3xl md:text-4xl font-semibold'>{name}</h1>
                        <p className='text-sm font-semibold'>({bedType})</p>
                    </div>
                    <div className='flex text-sm justify-center items-center gap-1'>
                        <p>Room Number: <span className='font-semibold text-blue-500'>{roomNumber}</span></p>
                        <p> Floor: {floor}</p>
                    </div>
                    <div>
                        <p className='text-sm font-bold text-gray-500'>{hotelName}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                        <p>({roomRating})</p>
                        <p className='text-md font-semibold'>{reviews.length}+ reviews</p>
                    </div>
                    <div className='flex items-center'>
                        <CiLocationOn />
                        <p className='text-sm font-bold text-gray-500'>{hotelLocation}</p>
                    </div>
                </div>

                <img src={image} className='w-full h-72 md:h-96 object-cover rounded-lg' alt="Room" />

                <div className='w-full mt-5 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-semibold text-gray-700'>{description}</h1>
                        <div className='flex gap-3 mt-2 items-center justify-start'>
                            {
                                amenities.map((fet, i) => (
                                    <button key={i} className='btn btn-outline btn-xs px-6'>{fet}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <p className='font-semibold text-gray-400'>
                            <span className='text-3xl text-black font-semibold'>${pricePerNight}</span>/Night
                        </p>
                    </div>
                </div>

                <div className='bg-base-300 shadow-md mt-12 p-5 rounded-xl shadow-gray-300'>
                    <button onClick={handleRoomBooking} className={Book ? 'btn  btn-disabled  w-full' : 'btn btn-primary btn-outline w-full'}>
                        {Book ? 'Booked' : 'Book Now'}
                    </button>
                </div>

                <div className='mt-12 container w-full'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-semibold'>Additional Informations:</h1>
                    <ul className='space-y-1'>
                        <li>Room Type: {type}</li>
                        <li>Room Capacity: {capacity} Person</li>
                        <li>Room Air System: {cooling}</li>
                        <li>Balcony: {balconyAvailable ? 'Yes' : 'No'}</li>
                        <li>Balcony View: {balconyView ? balconyView : 'None'}</li>
                        <li>
                            <div className='flex gap-2 flex-wrap'>
                                Features:
                                {
                                    features.map((feature, index) => (
                                        <p key={index} className='font-semibold'>{index + 1}. {feature}</p>
                                    ))
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className='my-10 text-gray-300' />

                <div className="flex w-full gap-2 items-center justify-center flex-col md:flex-row">
                    <div className='w-full'>
                        <h1 className='text-xl font-bold text-gray-500'>Total Reviews: {reviews.length}</h1>
                        <div className="card w-full items-center justify-center gap-2 rounded-box grid p-5 space-y-2 lg:space-y-0 grow place-items-center">
                            {
                                reviews.map((review, i) => (
                                    <ReviewCard key={i} review={review} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="card rounded-box grid w-full space-y-2 grow place-items-center">
                        <h1 className='text-xl font-bold'>Post Your Review:</h1>
                        <div className="rating mt-0 rating-lg">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                        <textarea placeholder="Write your review here" className="textarea textarea-primary" />
                        <button className='btn btn-primary'>Post Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
