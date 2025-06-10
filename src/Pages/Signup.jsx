import React from 'react';
import { Link } from 'react-router';
import G9 from "../assets/register.jpg"
const Signup = () => {
    const HandleUserResister = (e) =>{
            e.preventDefault();
    }
    return (
               <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                    <h1 className="text-5xl font-extrabold ">Register</h1>
                    <form noValidate="" action="" className="self-stretch mt-8 space-y-3">
                            <input id="name" type="text" required placeholder="username" className="w-full input rounded-md " />
                            <input id="name" type="text" placeholder="profile image" className="w-full input rounded-md" />
                            <input id="name" type="email" required placeholder="example@mail.com" className="w-full input rounded-md " />
                            <input id="pass" type="password" placeholder="password" className="w-full input rounded-md" />
                            <input id="lastname" type="password" placeholder="confirm password" className="w-full input rounded-md" />
                        <button type="submit" className="w-full btn btn-outline btn-primary">Register</button>
                    </form>
                    <div className='mt-5 space-y-3'>
                        <p className='text-sm'>Or Continue With</p>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Signup with Google
                        </button>
                        <h1 className='text-sm mt-5 text-black'>Already Registered? <Link to={"/login"} className='link text-blue-500 link-hover'>Login</Link></h1>
                    </div>
                </div>
                <img src={G9} alt="" className="object-cover w-full h-screen rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Signup;