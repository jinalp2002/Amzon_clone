import React, { useRef } from 'react'
import bgOne from '../../assets/bgOne.jpg'
import bgTwo from '../../assets/bgTwo.mp4'
import bgThree from '../../assets/bgThree.jpg'
import bgFour from '../../assets/bgFour.mp4'
import Jewellery from '../../assets/Jewellery.jpg'
import ClothesImg from '../../assets/Clothes.jpg'
import PurseImg from '../../assets/Purse.jpg'
import DeviceImg from '../../assets/Device.jpg'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Home() {

    const [slide, setSlide] = React.useState(0);


    const slides = [
        { type: "image", src: bgOne },
        { type: "video", src: bgTwo },
        { type: "image", src: bgThree },
        { type: "video", src: bgFour },
    ];

    const nextSlide = () => {
        setSlide((slide + 1) % slides.length);
    };

    const prevSlide = () => {
        setSlide((slide - 1 + slides.length) % slides.length);
    };

    // second card
    const Clothes = [
        { img: ClothesImg, title: "dress" },
        { img: ClothesImg, title: "shoes" },
        { img: ClothesImg, title: "women dress" },
        { img: ClothesImg, title: "men dress" },
    ]

    // Third card
    const Purse = [
        { img: PurseImg, title: "fancy" },
        { img: PurseImg, title: "medium" },
        { img: PurseImg, title: "small" },
        { img: PurseImg, title: "large" },
    ]
    // Fourth card
    const Devices = [
        { img: DeviceImg, title: "Phone" },
        { img: DeviceImg, title: "Laptop" },
        { img: DeviceImg, title: "Cover" },
        { img: DeviceImg, title: "Earphones" },
    ]

    // scrolling line one
    const scrollImg = [
        { img: DeviceImg, title: "Phone" },
        { img: PurseImg, title: "shoes" },
        { img: ClothesImg, title: "shoes" },
        { img: DeviceImg, title: "Earphones" },
        { img: PurseImg, title: "women dress" },
        { img: DeviceImg, title: "Phone" },
        { img: PurseImg, title: "shoes" },
        { img: ClothesImg, title: "shoes" },
        { img: DeviceImg, title: "Earphones" },
        { img: PurseImg, title: "women dress" },
        { img: DeviceImg, title: "Phone" },
        { img: PurseImg, title: "shoes" },
        { img: ClothesImg, title: "shoes" },
        { img: DeviceImg, title: "Earphones" },
        { img: PurseImg, title: "women dress" },
        { img: DeviceImg, title: "Phone" },
        { img: PurseImg, title: "shoes" },
        { img: ClothesImg, title: "shoes" },
        { img: DeviceImg, title: "Earphones" },
        { img: PurseImg, title: "women dress" },
    ]



    return (
        <div className='min-h-screen w-full  bg-gray-300 pb-[500px]'>
            <div className="relative bg-gray-300 min-h-screen mb-20">
                <div onClick={(e) => e.preventDefault()}>
                    {slides[slide].type === "image" && (
                        <img src={slides[slide].src} className="w-full h-full" />
                    )}

                    {slides[slide].type === "video" && (
                        <video className="w-full" autoPlay muted loop>
                            <source src={slides[slide].src} type="video/mp4" />
                        </video>
                    )}

                    {/* Left arrow */}
                    <div

                        onClick={prevSlide}
                        className="absolute top-20 left-5 text-white text-4xl cursor-pointer"
                    >
                        <IoIosArrowBack size={40} />
                    </div>

                    {/* Right arrow */}
                    <div
                        onClick={nextSlide}
                        className="absolute top-20 right-5 text-white text-4xl cursor-pointer"
                    >
                        <IoIosArrowForward size={40} />

                    </div>

                    {/* First card line */}
                    <div className='absolute top-64 grid grid-cols-2 gap-x-2'>
                        <div className=" grid grid-cols-4 gap-80 p-10 pl-3">

                            {/* First Card */}
                            <div className="bg-white p-5 w-72 items-start">
                                <h2 className="text-xl font-bold mb-4">
                                    Type something to start
                                </h2>

                                <div className="grid grid-cols-2 gap-3">
                                    <img src={Jewellery} className="h-32" />

                                    <img src={Jewellery} className="h-32" />
                                    <img src={Jewellery} className="h-32" />
                                    <img src={Jewellery} className="h-32" />
                                </div>

                                {/* <p className="text-blue-500 mt-4">
                                Shop pre-loved Jewellery
                            </p> */}
                            </div>


                            {/* Second Card */}
                            <div className="bg-white p-5 w-72 ">

                                <h2 className="text-xl font-bold mb-4">
                                    A nod to neutrals
                                </h2>

                                <div className="grid grid-cols-2 gap-4">
                                    {Clothes.map((item, index) => (
                                        <div key={index}>
                                            <img src={item.img} className="w-full h-32" />
                                            <p className="text-sm mt-1">{item.title}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* <p className="text-blue-500 mt-4">
                                    Shop pre-loved jewelry
                                </p> */}
                            </div>

                            {/* Third card */}
                            <div className='bg-white p-5 w-72 '>
                                <h2 className='text-xl font-bold mb-4'>Trending spring bags</h2>
                                <div className='grid grid-cols-2 gap-4'>
                                    {Purse.map((item, index) => (
                                        <div key={index}>
                                            <img src={item.img} className="w-full h-32" />
                                            <p className="text-sm mt-1">{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fourth card */}
                            <div className='bg-white p-5 w-72 '>
                                <h2 className='text-xl font-bold mb-4'>Trending spring bags</h2>
                                <div className='grid grid-cols-2 gap-4'>
                                    {Devices.map((item, index) => (
                                        <div key={index}>
                                            <img src={item.img} className="w-full h-32" />
                                            <p className="text-sm mt-1">{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {/* second line */}
            <div className='pb-32 gap-x-2 '>
                <div className='absolute  grid grid-cols-2'>
                    <div className=" grid grid-cols-4 gap-80 p-10 pl-3">

                        {/* First Card */}
                        <div className="bg-white p-5 w-72 items-start">
                            <h2 className="text-xl font-bold mb-4">
                                Type something to start
                            </h2>

                            <div className="grid grid-cols-2 gap-3">
                                <img src={Jewellery} className="h-32" />

                                <img src={Jewellery} className="h-32" />
                                <img src={Jewellery} className="h-32" />
                                <img src={Jewellery} className="h-32" />
                            </div>

                            <p className="text-blue-500 mt-4">
                                Shop pre-loved Jewellery
                            </p>
                        </div>


                        {/* Second Card */}
                        <div className="bg-white p-5 w-72 ">

                            <h2 className="text-xl font-bold mb-4">
                                A nod to neutrals
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                {Clothes.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} className="w-full h-32" />
                                        <p className="text-sm mt-1">{item.title}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-blue-500 mt-4">
                                Shop pre-loved jewelry
                            </p>
                        </div>

                        {/* Third card */}
                        <div className='bg-white p-5 w-72 '>
                            <h2 className='text-xl font-bold mb-4'>Trending spring bags</h2>
                            <div className='grid grid-cols-2 gap-4'>
                                {Purse.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} className="w-full h-32" />
                                        <p className="text-sm mt-1">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fourth card */}
                        <div className='bg-white p-5 w-72 '>
                            <h2 className='text-xl font-bold mb-4'>Trending spring bags</h2>
                            <div className='grid grid-cols-2 gap-4'>
                                {Devices.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} className="w-full h-32" />
                                        <p className="text-sm mt-1">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* scrooling line one */}
            <div className='gap-x-4 top-20 pt-20 h-96'>
                <h1 className='text-black'>Men's</h1>
                <div className='pt-72 flex overflow-x-auto scroll-smooth p-4'>
                    <div className="flex overflow-x-auto scroll-smooth  ">
                        {scrollImg.map((item, index) => (
                            <div key={index} className="min-w-[200px] shrink-0 bg-white p-4">
                                <img src={item.img} className="w-full h-32 object-cover" />
                                <p className="mt-2">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* scrolling line two */}
                <div className='flex overflow-x-auto scroll-smooth p-4 '>
                    <div className="flex overflow-x-auto scroll-smooth  ">
                        {scrollImg.map((item, index) => (
                            <div key={index} className="min-w-[200px] shrink-0 bg-white p-4">
                                <img src={item.img} className="w-full h-32 object-cover" />
                                <p className="mt-2">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home