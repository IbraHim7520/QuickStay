import React, { use } from 'react';
import G9 from "../assets/g9.jpg"
import { Link, useNavigate } from 'react-router';
import UserContext from '../Authentication/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Login = () => {
    const { GoogleSignIn, UserLogin } = use(UserContext)
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        GoogleSignIn()
            .then(data => {
                if (data.user) {
                    Swal.fire({
                        title: "Login Successful!",
                        icon: "success",
                        timer: 1500
                    });
                    navigate('/')
                }
            }).catch(err => {
                toast.error("Something went wrong!")
            })
    }
    const handleUserLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        UserLogin(email, pass)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: "Login Successful!",
                        icon: "success",
                        timer: 1500
                    });
                    navigate('/')
                    e.terget.reset()
                } else {
                    toast.error("Something went wrong!")
                }
            }).catch(err=>{
                toast.error("Something went wrong!");
            })
    }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            <Toaster></Toaster>
            <div className="container justify-items-center grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                    <h1 className="text-5xl font-extrabold ">Welcome Back Dear</h1>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-900">Login</span> to your existing account and continue as before and see what you have been done yet
                    </p>
                    <form onSubmit={(e) => handleUserLogin(e)} action="" className="self-stretch space-y-3">
                        <div>
                            <label htmlFor="name" className="text-sm sr-only">Email*</label>
                            <input name='email' type="text" placeholder="example@mail.com" className="w-full input rounded-md " />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Password*</label>
                            <input name='password' type="password" placeholder="*********" className="w-full input rounded-md" />
                            <p className='text-end text-xs link link-hover'>Forget Password?</p>
                        </div>
                        <button type="submit" className="w-full btn btn-outline btn-primary">Login</button>
                    </form>
                    <div className='mt-5 space-y-3'>
                        <p className='text-sm'>Or Continue With</p>
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <h1 className='text-sm mt-5 text-black'>New Here? Don't Worry <Link to={"/signup"} className='link text-blue-500 link-hover'>Register Now</Link></h1>
                    </div>
                </div>
                <img src={G9} alt="" className="object-cover w-full h-full rounded-md  xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Login;