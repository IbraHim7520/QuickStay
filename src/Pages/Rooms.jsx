import React, { useEffect, useState } from 'react';
import { FaListAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import RoomCard from '../Components/RoomCard';
const Rooms = () => {
    const [click, setClick] = useState(false)
    const [roomData , setRoomData] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect( ()=>{
        fetch('http://localhost:5000/getRooms')
        .then(res=> res.json())
        .then(data => {
            if (data){
                setLoading(false)
                setRoomData(data)
            }else{
                setLoading(true)
                setRoomData([])
            }
        })
    }, [] )
    return (
        <div>
            <div className=''>
                <div className='flex px-15 mt-5 justify-between items-center'>
                    <h1 className='text-2xl font-semibold '>Our Rooms</h1>
                    <div className='flex justify-center gap-5 items-center'>
                        <FaListAlt size={20} className={''}></FaListAlt>
                        <BsFillGrid3X3GapFill size={20} className={''}></BsFillGrid3X3GapFill>
                    </div>
                </div>

                <div className='mt-12 grid justify-items-center space-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        roomData.map(room => <RoomCard room={room} key={room._id}></RoomCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;