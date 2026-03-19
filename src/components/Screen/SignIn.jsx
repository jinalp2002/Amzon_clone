import React from 'react'
import Logo from '../../assets/amazon_logo.png'

function SignIn() {
    return (

        <div >
            <div className='flex justify-center items-center mt-10'>
                <div className='w-96 h-[400px] border border-gray-300 bg-white p-6 rounded shadow '>
                    <p className=' text-xl gap-x-7'>Sign in or create account</p>
                    <p className='text-slate-800 text-lg font-bold pt-5'>Enter mobile number or email</p>
                    <input
                        type="text"
                        placeholder=""
                        className="border rounded-md p-1 border-gray-900 w-80 mt-3" />
                    <div className=''>
                        <button className="rounded-3xl bg-yellow-500 w-80 mt-3 h-10 text-lg ">Continue</button>
                    </div>
                    <div className='mt-3 text-sm w-80'>
                        By continuing, you agree to Amazon's
                        <span className='underline text-blue-800 hover:cursor-pointer'> Conditions of Use</span>
                        <span> and</span>
                        <span className='underline text-blue-800 hover:cursor-pointer'> Privacy Notice.</span>
                    </div>
                    <div className='text-blue-800 hover:underline hover:text-slate-900 cursor-pointer mt-4 text-sm '>Need help?</div>
                    <div className='border-b mt-5 '></div>
                    <div>
                        <p className='font-bold mt-5'>Buying for work?</p>
                        <p className='text-blue-800 hover:underline hover:text-slate-800'>Create a free business account</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10 border-t-4 gap-6 text-sm'>
                <p className='text-blue-900 hover:underline hover:text-slate- cursor-pointer mt-5'>Conditions of Use </p>
                <p className='text-blue-900 hover:underline hover:text-slate- cursor-pointer mt-5'>Privacy Notice </p>
                <p className='text-blue-900 hover:underline hover:text-slate- cursor-pointer mt-5'> Help </p>
            </div>
            <div className='flex justify-center text-sm mt-5'>
                © 1996-2026, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    )
}

export default SignIn