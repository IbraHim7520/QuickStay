import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import RoomCard from '../Components/RoomCard';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import Testimonial from '../Components/Testimonial';
import OfferCard from "../Components/OfferCard"
const Home = () => {
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [testimonials, setTestimonials] = useState([]);
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/roomDetails')
            .then(res => res.json()).then(data => {
                if (data) {
                    setLoading(false)
                    setRoomData(data)
                } else {
                    setLoading(true);
                    setRoomData([])
                }
            })
        fetch('hoteloffer.json').then(res => res.json()).then(data => setOffer(data))
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <section className='mt-12 px-3 md:px-8  lg:px-16'>
                <h1 className='text-center mb-4 text-3xl font-semibold'>Featured Destination</h1>
                <p className='text-center'>Discover our handpicked selection of exceptional properties around the world, offering<br></br>unparalleled luxury and unforgettable experiences.</p>
                <div>
                    <div>
                        {
                            loading ?
                                <div className='flex justify-center p-12 w-full items-center'>
                                    <span className="loading loading-spinner text-success"></span>
                                </div>
                                :
                                <div className='grid mt-8 gap-5 justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                    {
                                        roomData.map(room => <RoomCard room={room} key={room._id}></RoomCard>)
                                    }
                                </div>
                        }
                        <div className='flex w-full justify-center mt-12'>
                            <Link to={'/rooms'} className='btn btn-outline px-12 btn-sm '>View All Destinations</Link>
                        </div>
                    </div>
                </div>

            </section>

            <section className='mt-12 px-3 md:px-8  lg:px-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Exclusive Offers</h1>
                        <p>Take advantage of our limited-time offers and special packages to enhance<br></br>your stay and create unforgettable memories.</p>
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
                    <h1 className='text-3xl text-center font-semibold'>What Our Guests Say</h1>
                    <p className='text-gray-700 text-md'>Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.</p>
                </div>
                <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center items-center'>
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;