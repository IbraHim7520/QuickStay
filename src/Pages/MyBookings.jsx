import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../Authentication/UserContext';
import BookedRooms from '../Components/BookedRooms';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import noData from "../assets/anim/noData.jpg"
import axios from 'axios';
const MyBookings = () => {
    const { User } = useContext(UserContext);
    const [BookedRoom, setBookedRoom] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
      const [bookedRoomDate , setBookedRoomDate] = useState(Date);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios(`http://localhost:5000/get_booked_room/${User?.email}`, {
            headers: {
            Authorization:`Bearer ${token}`
            }
        })
    
            .then(data => {
                setBookedRoom(data?.data);
                setLoading(false)
            })

    }, [User])



    const handleUpdateBooking = (id) => {
        setSelectedBookingId(id)
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
                  setBookedRoomDate(prev => ({
                ...prev,
                [bookedRoomID]: updatedDate
            }));
                document.getElementById('updateModal').close()
            }).catch(err=>{
                toast.error("Something error!");
            })
        //alert(bookedRoomID)
    }
    

    const handleCancelBooking = (id, Date) => {
        const date_differ = moment(Date, "YYYYMMDD").fromNow()
        if (date_differ.includes("1 days") || date_differ.includes('hours')) {
            toast.error("Sorry you can't cancel booking now");

        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/cancel_booking/${id}`, {
                        method: 'DELETE'
                    }).then(promis => promis.json())
                        .then(data => {
                            if (data.deletedCount == 1) {
                                toast.success("Booking Canceled!")
                                const remaining = BookedRoom.filter(Room => Room._id != id);
                                setBookedRoom(remaining)
                            }
                        })
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        }
    }
    return (
        <div className='w-full'>
            <Toaster></Toaster>
            <dialog id="updateModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Date</h3>
                    <form onSubmit={(e) => updateBookingDate(e , selectedBookingId)} className='w-full space-y-2'>
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
            <div className='container p-5  w-full mx-auto'>
                <h1 className='text-start px-6 md:px-12 text-3xl font-semibold'>My Bookings: {BookedRoom.length} Rooms</h1>
                {
                    loading ?
                        <div className='flex justify-center items-center p-5'>
                            <span className="loading loading-spinner text-warning"></span>
                        </div>
                        :
                        <div className='px-6 md:px-12 mt-5'>
                            {
                                BookedRoom?.length == 0 ?
                                    <img src={noData} className='w-96 mx-auto'></img>
                                    :
                                    <div className=' space-y-2'>
                                        {
                                            BookedRoom?.map(room => <BookedRooms 
                                            handleUpdateBooking={handleUpdateBooking} 
                                            bookedRoomDate={bookedRoomDate[room._id]}
                                            room={room} roomID={room.RoomID} 
                                            key={room._id} 
                                            handleCancelBooking={handleCancelBooking} 
                                            ></BookedRooms>)
                                        }
                                    </div>
                            }
                        </div>

                }
            </div>
        </div>
    );
};

export default MyBookings;