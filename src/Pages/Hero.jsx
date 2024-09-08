import React from 'react';
import groupImage from '../assets/Group 2.png'

const Hero = () => {
    return (
        <div className='w-full md:h-[500px]  bg-gradient-to-r from-primaryColor to-secondaryColor rounded-md'>
            
            <div className=' w-full h-full flex flex-col-reverse md:flex-row'>

                <div className='w-full h-full  px-10 flex flex-col justify-center'>
                    <p className='text-black text-sm'>Welcome to Realstate</p>
                    <h1 className='text-3xl md:text-6xl font-bold py-7'>Manage Your Property</h1>
                    <p className='text-sm'>You will have everything nearby supermarket, buses, station, the carmen neighborhood, etc</p>
                    <div className='flex py-10'>
                        <input className='bg-white w-80 outline-none pl-4 pr-6  rounded-l-full' placeholder='Enter your email' type="text" name="" id="" />
                        <button className=' bg-black text-white py-3 px-5 -ml-6 rounded-full'>Get a Quote</button>
                    </div>
                </div>

                <div className='w-full h-full'>
                    <img className='object-scale-down h-full w-full p-5 md:p-0' src={groupImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;