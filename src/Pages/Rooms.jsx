import React, { useEffect, useState } from 'react';
import { FaFilter, FaListAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import noData from "../assets/anim/noData.jpg"
import RoomCard from '../Components/RoomCard';
import RoomCardList from "../Components/RoomCardList"
const Rooms = () => {
    const [Listclick, setListClick] = useState(false)
    const [Cardclick, setCardClick] = useState(true)
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/getRooms`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoading(false)
                    setRoomData(data)
                } else {
                    setLoading(true)
                    setRoomData([])
                }
            }).catch(err=>{
                setLoading(false)
                setRoomData([])
            })
    }, [])
    const ClickViewList = () => {
        setCardClick(false)
        setListClick(true)
    }
    const ClickViewCard = () => {
        setListClick(false)
        setCardClick(true)
    }
    const handleUserFilter = (e) =>{
        e.preventDefault()
        const filter = e.target.value;
        const update_filter = filter.toLowerCase(filter.replaceAll(" ", "_"))
       fetch(`${import.meta.env.VITE_API_URL}/filtered_data/${update_filter}`)
       .then(promis=> promis.json())
       .then(data => {
        setRoomData(data)
       })
    }
    return (
        <div>
            <div className=''>
                <div className='flex px-15 mt-5 justify-between items-center'>
                    <h1 className='text-2xl font-semibold '>Our Rooms</h1>
                    <div className='flex justify-center gap-5 items-center'>
                        <form className='flex justify-center items-center  text-sm'>
                            <select onChange={(e)=>handleUserFilter(e)} defaultValue="Filter" className="select text-xs select-ghost">
                                <option disabled value="Filter">Filter</option>
                                <option>Price High to Low</option>
                                <option>Price Low to High</option>
                                <option>Rating High to Low</option>
                                <option>Ratng Low to High</option>
                            </select>
                        </form>
                        <FaListAlt onClick={ClickViewList} size={20} className={Listclick ? 'text-blue-500 cursor-pointer' : ' cursor-pointer'}></FaListAlt>
                        <BsFillGrid3X3GapFill onClick={ClickViewCard} size={20} className={Cardclick ? 'text-blue-500 cursor-pointer' : ' cursor-pointer'}></BsFillGrid3X3GapFill>
                    </div>
                </div>

                <div>
                    {
                        loading ?
                            <div className='flex flex-col justify-center p-12 w-full items-center'>
                                <span className="loading loading-spinner text-success"></span>
                                <p className='text-xl'>Loading</p>
                            </div>
                            :
                            <div className='px-15 mt-12'>
                            {
                                roomData.length==0?
                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={noData} className='max-w-96'>
                                        
                                        </img>
                                        <p className='text-xl'>Failed to load Data</p>
                                    </div>
                                 :
                                 <div className='w-full'>
                                    {
                                    Cardclick ?
                                        <div className='mt-12 grid justify-items-center space-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                            {
                                                roomData.map(room => <RoomCard room={room} key={room._id}></RoomCard>)
                                            }
                                        </div>
                                        :
                                        <div className='space-y-3 flex flex-col start'>
                                            {
                                                roomData.map(room => <RoomCardList room={room} key={room._id} ></RoomCardList>)
                                            }
                                        </div>
                                }
                                 </div>
                            }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;