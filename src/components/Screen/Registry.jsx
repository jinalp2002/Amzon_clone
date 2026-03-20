import React from 'react'
import registryOne from '../../assets/registryOne.jpeg'
import RegistryTwo from '../../assets/RegistryTwo.jpg'
import Baby from '../../assets/Registry_baby.jpg'
import { Link } from 'react-router-dom'

function Registry() {
    return (
        <div>
            <div className='flex gap-2'>
                <div className='w-96 h-72 ml-4 mt-4 mb-4 border border-gray-300 bg-white p-9 rounded shadow'>
                    <p className='text-black font-bold text-3xl '>Inspiration for life's biggest moments</p>
                    <p className='text-black mt-2'>For weddings, babies, birthdays, or any life event, registries and gift lists ensure the perfect item.</p>
                    <button className='text-black rounded-3xl w-80 h-30 border border-black shadow mt-3'>Find a Registry</button>
                    <Link
                        to="/auth/signin"
                        className='block text-center text-black rounded-3xl w-80 h-30  shadow mt-3 items-center justify-center bg-yellow-300'>Create</Link>
                </div>
                <div className='w-96 h-72 ml-4 mt-4 mb-4 border border-gray-300 bg-white rounded shadow hover:cursor-pointer'>
                    <img
                        className='h-48 w-96'
                        src={registryOne} alt="" />
                    <p className='font-bold text-2xl pl-5 mt-3'>Baby Registry</p>
                    <p className='text-sm pl-5 pt-2 text-gray-600'>Get help preparing for your new arrival.</p>
                </div>
                <div className='w-96 h-72 ml-4 mt-4 mb-4 border border-gray-300 bg-white rounded shadow hover:cursor-pointer'>
                    <img
                        className='h-48 w-96'
                        src={RegistryTwo} alt="" />
                    <p className='font-bold text-2xl pl-5 mt-3'>Wedding Registry</p>
                    <p className='text-sm pl-5 pt-2 text-gray-600'>Register for gift to start new chapter.</p>
                </div>
            </div>
            <div className='mb-10'>
                <div className='text-black font-bold text-2xl mb-4 mt-12 ml-6 '>Create a Registry or Gifts</div>
                <div className="flex gap-6 ml-6">

                    <div className="flex flex-col items-center">
                        <img
                            className="h-60 w-96 rounded-2xl"
                            src={Baby}
                            alt=""
                        />
                        <p className="mt-2 text-lg">Baby</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            className="h-60 w-96 rounded-2xl"
                            src={Baby}
                            alt=""
                        />
                        <p className="mt-2 text-lg">Wedding</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            className="h-60 w-96 rounded-2xl"
                            src={Baby}
                            alt=""
                        />
                        <p className="mt-2 text-lg">Birthday</p>
                    </div>

                </div>
                <div className='text-black font-bold text-2xl mb-4 mt-12 ml-6 '>Make your Registry unique to you</div>
                <div className="flex gap-6 ml-6">

                    <div className="flex flex-col items-center">
                        <img
                            className="h-60 w-96 rounded-2xl"
                            src={Baby}
                            alt=""
                        />
                        <p className="mt-2 text-lg">Baby</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            className="h-60 w-96 rounded-2xl"
                            src={Baby}
                            alt=""
                        />
                        <p className="mt-2 text-lg">Wedding</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            className="h-60 w-96 rounded-2xl"
                            src={Baby}
                            alt=""
                        />
                        <p className="mt-2 text-lg">Birthday</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Registry