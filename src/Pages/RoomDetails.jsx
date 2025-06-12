import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { CiLocationOn } from 'react-icons/ci';
import Testimonial from '../Components/Testimonial';
import ReviewCard from '../Components/ReviewCard';
import UserContext from '../Authentication/UserContext';
const RoomDetails = () => {
    const {User} = use(UserContext)
    const data = useLoaderData();
    const navigate = useNavigate()
    const [roomData, setRoomData] = useState(data);
    const { _id,
        roomNumber, floor, name, description, pricePerNight, capacity,
        type, bedType, cooling, balconyAvailable, balconyView, features,
        amenities, image, available, hotelName, hotelLocation, roomRating,
        defaultDate, reviews
    } = roomData
    const handleRoomBooking = () =>{
      console.log(User)
      if(User){
        alert("Clicked")
      }else{
        navigate('/login')
      }
    }
    return (
        <div>
            <div className="container p-2 md:p-3 lg:p-5 w-full mx-auto">
                <div className='flex flex-col items-start pb-8 pt-5  justify-center'>
                    <div className='flex items-center justify-center gap-2 '>
                        <h1 className='text-3xl md:text-4xl font-semibold'>{name}</h1>
                        <p className='text-sm font-semibold'>({bedType})</p>
                    </div>
                    <div className='flex text-sm justify-center items-center gap-1'><p>Room Number: <span className='font-semibold text-blue-500'>{roomNumber}</span></p>  <p> Floor: {floor}</p></div>
                    <div>
                        <p className='text-sm font-bold text-gray-500'>{hotelName}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" checked={true} />
                        </div>
                        <p className='text-md font-semibold'>{reviews.length}+ reviews</p>
                    </div>
                    <div className='flex items-center'>
                        <CiLocationOn></CiLocationOn>
                        <p className='text-sm font-bold text-gray-500'>{hotelLocation}</p>
                    </div>

                </div>
                <img src={image} className='w-full h-72 md:h-96 object-cover rounded-lg'></img>

                <div className='w-full mt-5 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-semibold text-gray-700'>{description}</h1>
                        <div className='flex gap-3 mt-2 items-center justify-start'>
                            {
                                amenities.map(fet => <button className='btn btn-outline btn-xs px-6'>{fet}</button>)
                            }
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <p className='font-semibold text-gray-400'><span className='text-3xl text-black font-semibold'>${pricePerNight}</span>/Night</p>
                    </div>
                </div>


                <div className='bg-base-300 shadow-md mt-12 p-5  rounded-xl  shadow-gray-300'>
                  <button onClick={handleRoomBooking} className='btn w-full btn-primary btn-outline'>Book Now</button>
                </div>

                <div className='mt-12 container w-full'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-semibold'>Additional Informations:</h1>
                    <ul className='space-y-1'>
                        <li>Room Type: {type}</li>
                        <li>Room Capacity: {capacity} Person</li>
                        <li>Room Air System: {cooling}</li>
                        <li>Balcony: {balconyAvailable ? 'Yes' : 'No'} </li>
                        <li>Balcony View: {balconyView ? balconyView : 'None'}</li>
                        <li>
                            <div className='flex gap-2 '>
                                Features:
                                {
                                    features.map((feature, index) => <p className='font-semibold'>{index + 1}. {feature}</p>)
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className='my-10 text-gray-300 '>
                </hr>

                <div className="flex w-full gap-2 items-center justify-center flex-col md:flex-row">
                 <div className='w-full'>
                    <h1 className='text-xl font-bold text-gray-500 '>Total Reviews: {reviews.length}</h1>
                       <div className="card w-full items-center justify-center gap-2 rounded-box grid p-5 space-y-2 lg:space-y-0 grow place-items-center">
                    {
                        reviews.map( review =><ReviewCard  review={review}></ReviewCard>)
                    }
                    </div>
                 </div>
                    
                    <div className="card rounded-box grid w-full space-y-2 grow place-items-center">
                        <h1 className='text-xl font-bold'>Post Your Review:</h1>
                          <div className="rating mt-0 rating-lg">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 stat"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star"  />
                        </div>
                        <textarea placeholder="Write your review here" className="textarea textarea-primary"></textarea>
                        <button className='btn btn-primary'>Post Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;