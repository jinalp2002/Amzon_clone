import React, { useState } from 'react';
import Image from '../assets/amazon_logo.png';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";


function Header() {
    const [open, setOpen] = useState(false)
    const [Langopen, setLangOpen] = useState(false)
    const [signOpen, setSignOpen] = useState(false)


    return (
        <div>
            <header className=' bg-black  z-50 '>
                <div className='flex flex-row border border-transparent '>
                    <div>
                        <Link
                            to="/Home">
                            <img src={Image} alt="Logo" className="h-[66px] justify-start pl-0 flex border border-transparent hover:border-white cursor-pointer" /></Link>

                    </div>
                    <div className='ml-7  border border-transparent hover:border-white cursor-pointer'>
                        <p className='text-white mt-3'>Dilevery to </p>
                        <p className='text-white'>India</p>
                    </div>
                    <div className=' h-10 ml-7'>
                        <div className='flex rounded-4xl flex-row '>
                            <button
                                onClick={() => { setOpen(!open) }}
                                className='bg-zinc-200  w-12 ml-8 mt-3 text-center text-lg px-2 py-2 rounded-l-md'>All
                                <span className="text-sm">▼
                                    {open && <div className='text-black  absolute h-22 w-60 text-left z-50'>
                                        <ul className='mb-8 mt-3 bg-slate-100 text-xl'>
                                            <li className='border border-transparent hover:border-black cursor-pointer'>Books</li>
                                            <li className='border border-transparent hover:border-black cursor-pointer'>Electronics</li>
                                            <li className='border border-transparent hover:border-black cursor-pointer'>Dress</li>
                                            <li className='border border-transparent hover:border-black cursor-pointer'>Phones</li>
                                        </ul>
                                    </div>}
                                </span>
                            </button>
                            <input className='bg-zinc-200 h-11 static border border-gray-400  mt-3 text-left text-lg  px-2 py-2 w-96 outline-none' type="text" placeholder='Search on amazon' />

                            <button className='mt-3 h-11 w-12   text-center text-lg bg-yellow-400 px-2 py-2 rounded-r-md  border border-transparent hover:border-white cursor-pointer '>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                    />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => { setLangOpen(!Langopen) }}
                            className='text-white  ml-7 h-15 text-lg border border-transparent hover:border-white cursor-pointer h-[65px]'>
                            🌐 EN ▼
                        </button>
                        {Langopen && <div>
                            <ul className='text-black bg-slate-100 absolute w-20 mt-3 text-xl z-50'>
                                <li className='border border-transparent hover:border-black cursor-pointer'>Hindi</li>
                                <li className='border border-transparent hover:border-black cursor-pointer'>Marathi</li>
                                <li className='border border-transparent hover:border-black cursor-pointer'>Gujarati</li>
                                <li className='border border-transparent hover:border-black cursor-pointer'>Urdu</li>
                            </ul></div>}
                    </div>
                    <div
                        onClick={() => setSignOpen(!signOpen)}
                        className='ml-7 relative group inline-block'>
                        <div className='border border-transparent hover:border-white cursor-pointer h-[65px]'>
                            <p className='text-slate-100 text-sm mt-2 ml-2'>Hello, sign in</p>
                            <p className='text-white text-sm px-2 py-1 ml-0'>Account and list</p>
                        </div>

                        {/* Dropdown */}
                        {signOpen && <div className='bg-white absolute right-0 top-full mt-2 w-[500px] shadow-lg rounded z-50 p-4'>

                            {/* Sign In */}
                            <div className='flex flex-col items-center mb-3 w-full'>
                                <Link
                                    to="/auth/signin"
                                    className='bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded font-semibold w-full text-center block'>Sign In
                                </Link>


                                <p className='text-black mt-2 text-sm'>
                                    New customer?
                                    <span className='text-blue-500 underline hover:text-red-500 cursor-pointer ml-1'>
                                        Start here.
                                    </span>
                                </p>
                            </div>

                            <div className="border-t border-gray-300 my-2"></div>

                            {/* Content */}
                            <div className="flex">

                                {/* Left */}
                                <div className='text-black pr-4'>
                                    <p className='font-bold text-lg'>Your Lists</p>
                                    <p className='hover:underline hover:text-red-400 cursor-pointer'>Create a List</p>
                                    <p className='hover:underline hover:text-red-400 cursor-pointer'>Find a List or Registry</p>
                                </div>

                                {/* Divider */}
                                <div className="w-[1px] bg-gray-300 mx-4"></div>

                                {/* Right */}
                                <div className="text-black">
                                    <h1 className='font-bold text-lg '>Your Account</h1>
                                    <p className='hover:underline cursor-pointer hover:text-red-400'>Account</p>
                                    <p className='hover:underline cursor-pointer hover:text-red-400'>Orders</p>
                                    <p className='hover:underline cursor-pointer hover:text-red-400'>Recommendations</p>
                                    <p className='hover:underline cursor-pointer hover:text-red-400'>Browsing History</p>
                                    <p className='hover:underline cursor-pointer hover:text-red-400'>Shopping Preferences</p>
                                </div>

                            </div>

                        </div>}

                    </div>

                    <div className=' ml-14 border border-transparent hover:border-white cursor-pointer h-[65px]'>
                        <p className='text-slate-100 tet-sm mb-0 mt-2'>return</p>
                        <p className='text-slate-100 font-bold text-sl'>& order</p>
                    </div>
                    <div className='flex items-center ml-14 border border-transparent hover:border-white cursor-pointer'>

                        <div className="relative flex items-center  text-white ">
                            <span className=' absolute -top-5 left-2 text-lg font-bold text-yellow-400 mb-3 '>0</span>
                            <FaShoppingCart className="text-2xl" />
                            <span className="font-bold">Cart</span>
                        </div>
                    </div>
                </div>
                <div className='bg-[#232f3e] flex flex-row  rounded-sm '>
                    <div className='text-white h-8'>
                        <div className='text-white flex flex-row'>
                            <div className='flex items-center gap-1 h-8 text-white border border-transparent hover:border-white cursor-pointer ml-5 text-sm'>
                                <FaBars size={15} />
                                <div>All</div>
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Amazon Haul
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Amazon basics
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Best sellers
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Books
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm gap-1'>
                                Prime  <span className='text-gray-400 text-[10px] mt-1 '> ▼ </span>
                            </div>
                            <Link
                                to="/GiftCard"
                                className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm gap-1'>Gift card <span className='text-gray-400 text-[10px] mt-1 '> ▼ </span></Link>

                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Registry
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm gap-1'>
                                Groceries <span className='text-gray-400 text-[10px] mt-1 '> ▼ </span>
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Today's Deals
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Smart Home
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                New Releases
                            </div>
                            <div className='flex items-center ml-7 text-white border border-transparent hover:border-white cursor-pointer text-sm'>
                                Sell
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </div >

    );
}

export default Header;