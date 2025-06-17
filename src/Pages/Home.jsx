import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import RoomCard from '../Components/RoomCard';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import Testimonial from '../Components/Testimonial';
import OfferCard from "../Components/OfferCard"
import room_promotion from "../assets/anim/room_promotion.jpg"
import HotelMap from '../Components/HotelMap';
import noData from "../assets/anim/noData.jpg"
const Home = () => {
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [testimonials, setTestimonials] = useState([]);
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch('https://mern-hotel-booking-a11.vercel.app/roomDetails')
            .then(res => res.json()).then(data => {
                if (data) {
                    setLoading(false)
                    setRoomData(data)
                } else {
                    setLoading(true);
                    setRoomData([])
                }
            }).catch(err=>{
                setLoading(false)
                setRoomData([])
            })
        fetch('hoteloffer.json').then(res => res.json()).then(data => setOffer(data))

        fetch('https://mern-hotel-booking-a11.vercel.app/get-top-reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
            })

        document.getElementById('my_modal_3').show()
    }, [])
    return (
        <div>
            <Banner></Banner>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='w-fit h-fit'>
                        <img 
                        className='w-fit h-fit'
                        src={room_promotion}></img>
                    </div>
                </div>
            </dialog>
            <section className='mt-12 xl:mt-24 px-3 md:px-8  lg:px-16'>
                <h1 className='text-center mb-4 text-3xl xl:text-5xl font-semibold'>Featured Destination</h1>
                <p className='text-center xl:text-lg '>Discover our handpicked selection of exceptional properties around the world, offering<br></br>unparalleled luxury and unforgettable experiences.</p>
                <div className='xl:mt-12'>
                    <div>
                        {
                            loading ?
                                <div className='flex flex-col justify-center p-12 w-full items-center'>
                                    <span className="loading loading-spinner text-success"></span>
                                    <p className='text-lg'>Loading</p>
                                </div>
                                :
                               <div>
                                {
                                    roomData.length == 0 ? 
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <img src={noData} className='w-96'></img>
                                        <p className='text-2xl'>Faied to load Data</p>
                                    </div>
                                    :
                                
                                 <div className='grid mt-8 gap-5 justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                    {
                                        roomData.map(room => <RoomCard room={room} key={room._id}></RoomCard>)
                                    }
                                </div>
                                }

                               </div>
                        }
                        <div className='flex w-full justify-center mt-12'>
                            <Link to={'/rooms'} className='btn btn-outline px-12 btn-sm xl:btn-lg'>View All Destinations</Link>
                        </div>
                    </div>
                </div>

            </section>

            <section className='mt-12 px-3 md:px-8  lg:px-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl xl:text-4xl font-semibold'>Exclusive Offers</h1>
                        <p className='xl:text-lg'>Take advantage of our limited-time offers and special packages to enhance<br></br>your stay and create unforgettable memories.</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <h1 className='text-sm '>View All Offers</h1>
                        <FaArrowRight size={13}></FaArrowRight>
                    </div>
                </div>
                <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        offer.map(ofer => <OfferCard key={ofer.id} ofer={ofer} ></OfferCard>)
                    }
                </div>
            </section>

            <section className='lg:mt-24 mt-12  px-3 md:px-8  lg:px-16'>
                <div className='text-center mb-10 space-y-2'>
                    <h1 className='text-3xl xl:text-5xl text-center font-semibold'>What Our Guests Say</h1>
                    <p className='text-gray-700 text-md xl:text-lg'>Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.</p>
                </div>
                <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center items-center'>
                    {
                        testimonials.map(testimonial => <Testimonial  testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </section>


            <section className='lg:mt-24 mt-12  px-3 md:px-8  lg:px-16'>
                <h1 className='text-3xl mb-12 xl:text-5xl text-center font-semibold'>Our Location</h1>
                <HotelMap></HotelMap>
            </section>
        </div>
    );
};

export default Home;