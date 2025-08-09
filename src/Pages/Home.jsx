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
        fetch(`${import.meta.env.VITE_API_URL}/roomDetails`)
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

        fetch(`${import.meta.env.VITE_API_URL}/get-top-reviews`)
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
            <section className='my-24 xl:mt-24 px-3 md:px-8  lg:px-16'>
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
                                
                                 <div className='grid mt-8 gap-5 justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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

            <section className='my-24 px-3 md:px-8  lg:px-16'>
                
                    <div className='text-center'>
                        <h1 className='text-2xl xl:text-4xl font-semibold'>Exclusive Offers</h1>
                        <p className='xl:text-lg'>Take advantage of our limited-time offers and special packages to enhance<br></br>your stay and create unforgettable memories.</p>
                    </div>
                
                <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        offer.map(ofer => <OfferCard key={ofer.id} ofer={ofer} ></OfferCard>)
                    }
                </div>
            </section>

            <section className='my-24 px-3 md:px-8 lg:px-16'>
                <div className="max-w-7xl mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/30">
                    <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-gradient-to-r from-[#F3EAFF] to-[#E1EFFF]">
                        <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.503 10.06a3.3 3.3 0 0 0-.88 1.809 4.7 4.7 0 0 0-.067 1.03v.545h.75q.416-.002.825-.075a3.24 3.24 0 0 0 1.81-.882 1.65 1.65 0 0 0-.131-2.325 1.65 1.65 0 0 0-2.307-.103m1.632 1.621a2.1 2.1 0 0 1-1.182.563h-.206v-.207a2.1 2.1 0 0 1 .563-1.18.34.34 0 0 1 .225-.076.63.63 0 0 1 .44.206.506.506 0 0 1 .16.694m9.6-9.581a.853.853 0 0 0-.835-.835A8.2 8.2 0 0 0 6.816 3.28L5.288 5.062l-2.25-.468a.94.94 0 0 0-.863.253l-.637.637a.94.94 0 0 0-.263.76.94.94 0 0 0 .422.693l1.931 1.238.122.075 3 3.047.075.075 1.238 1.931a.94.94 0 0 0 .693.422h.104a.94.94 0 0 0 .656-.272l.637-.637a.94.94 0 0 0 .253-.863l-.468-2.24 1.725-1.482A8.24 8.24 0 0 0 13.735 2.1M2.915 5.765l1.238.263-.6.703-.937-.628zm5.982 6.657-.628-.938.703-.6.263 1.238zm1.978-5.053-3.45 2.943-2.737-2.737 2.943-3.45a6.98 6.98 0 0 1 4.932-1.688 7 7 0 0 1-1.688 4.932" fill="#5C67FF" />
                                <path d="M10.434 6.216a1.116 1.116 0 0 0-.056-1.594 1.086 1.086 0 0 0-1.918.742 1.1 1.1 0 0 0 .38.786 1.125 1.125 0 0 0 1.594.066" fill="#5C67FF" />
                            </svg>
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">Trusted by Experts</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-medium mt-2">
                            Book Smarter, Travel Better – <br />
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">QuickStay </span>
                             Has You Covered!
                        </h2>
                        <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">Unlock unforgettable stays with handpicked hotels, seamless booking, and prices that fit your budget – because your perfect trip starts here.</p>
                        <Link to={"/rooms"} type="button" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300">
                            Get Started Today
                        </Link>
                    </div>
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