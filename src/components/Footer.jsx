import React from 'react'
import Logo from '../assets/amazon_logo.png'
import { FaGlobe } from "react-icons/fa";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        <footer>
            <div className='h-full mb-0'>
                <div
                    onClick={scrollToTop}
                    className='bg-slate-600 h-10 text-slate-200 text-center hover:bg-slate-700 cursor-pointer'>
                    <p className='bg-slate-600 h-10 text-slate-200 text-center pt-2'> Back to top</p>
                </div>
                <div className='bg-slate-800 text-white grid grid-cols-4   items-start justify-center h-full border-b border-gray-500'>

                    {/* Colum 1 */}
                    <div className='ml-20 pl-10 pt-16'>
                        <h1 className='font-bold text-lg'>Get to know us</h1>
                        <ul >
                            <li className='hover:underline cursor-pointer mt-2 text-sm text-slate-300'>Careers</li>
                            <li className='hover:underline cursor-pointer mt-2 text-sm text-slate-300 '>Blog</li>
                            <li className='hover:underline cursor-pointer mt-2 text-sm text-slate-300'>About Amazon</li>
                            <li className='hover:underline cursor-pointer mt-2 text-sm text-slate-300'>Investor Relations</li>
                            <li className='hover:underline cursor-pointer mt-2 text-sm text-slate-300'>Amazon Devices</li>
                            <li className='hover:underline cursor-pointer mt-2 text-sm text-slate-300'>Amazon Science</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className=' pl-3 pt-16 ml-7' >
                        <h1 className='flex flex-row font-bold text-lg'>Make Money with Us</h1>
                        <ul className='mb-10 '>
                            <li className='hover:underline cursor-pointer  mt-2 text-slate-300' >Sell products on Amazon</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-slate-300'>Sell on Amazon Business</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Sell apps on Amazon</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Become an Affiliate</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Advertise Your Products</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Self-Publish with Us</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Host an Amazon Hub</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>›See More Make Money with Us</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className=' pl-2 pt-16 mr-7'>
                        <h1 className='flex flex-row font-bold text-lg'>Amazon Payment Products</h1>
                        <ul>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Amazon Business Card</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Shop with Points</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Reload Your Balance</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Amazon Currency Converter</li>
                        </ul>

                    </div>

                    {/* Column 4 */}
                    <div className=' pl-10 pt-16 mr-4 ml-1'>
                        <h1 className='flex flex-row font-bold text-lg'>Amazon Payment Products</h1>
                        <ul>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Amazon Business Card</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Shop with Points</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Reload Your Balance</li>
                            <li className='hover:underline cursor-pointer  mt-2 text-sm text-slate-300'>Amazon Currency Converter</li>
                        </ul>

                    </div>
                </div>
                <div className='bg-slate-800 h-28 justify-center flex gap-10 items-center '>
                    <img className=' text-white h-24  pt-4 ' src={Logo} alt="" />
                    <div className='pt-1'>
                        <button className='border px-3 py-1 text-white flex items-center gap-2'>
                            <FaGlobe />English
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer