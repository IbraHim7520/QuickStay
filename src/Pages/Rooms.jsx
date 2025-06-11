import React, { useEffect, useState } from 'react';
import { FaListAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import RoomCard from '../Components/RoomCard';
import RoomCardList from "../Components/RoomCardList"
const Rooms = () => {
    const [Listclick, setListClick] = useState(false)
    const [Cardclick, setCardClick] = useState(true)
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/getRooms')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoading(false)
                    setRoomData(data)
                } else {
                    setLoading(true)
                    setRoomData([])
                }
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
    return (
        <div>
            <div className=''>
                <div className='flex px-15 mt-5 justify-between items-center'>
                    <h1 className='text-2xl font-semibold '>Our Rooms</h1>
                    <div className='flex justify-center gap-5 items-center'>
                        <FaListAlt onClick={ClickViewList} size={20} className={Listclick ? 'text-blue-500 cursor-pointer' : ' cursor-pointer'}></FaListAlt>
                        <BsFillGrid3X3GapFill onClick={ClickViewCard} size={20} className={Cardclick ? 'text-blue-500 cursor-pointer' : ' cursor-pointer'}></BsFillGrid3X3GapFill>
                    </div>
                </div>

                <div>
                    {
                        loading ?
                            <div className='flex justify-center p-12 w-full items-center'>
                                <span className="loading loading-spinner text-success"></span>
                            </div>
                            :
                            <div className='px-15 mt-12'>
                                {
                                    Cardclick ?
                                        <div className='mt-12 grid justify-items-center space-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                                            {
                                                roomData.map(room => <RoomCard room={room} key={room._id}></RoomCard>)
                                            }
                                        </div>
                                        :
                                        <div className='space-y-3 flex flex-col start'>
                                            {
                                                roomData.map( room=> <RoomCardList room={room} key={room._id} ></RoomCardList> )
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