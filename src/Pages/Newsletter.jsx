import React from 'react';
import image from '../assets/Image/3d-rendering-isometric-fdgdf 1 (1).png'

const Newsletter = () => {
    return (
        <div className='w-full md:h-[350px]  bg-gradient-to-r from-primaryColor to-secondaryColor rounded-md'>

            <div className=' w-full h-full flex flex-col-reverse md:flex-row justify-between items-center'>

                <div className='w-6/12 h-full  px-10 flex flex-col justify-center'>
                    <h1 className='text-3xl md:text-4xl font-bold py-7'>Subscribe Our Newsletter</h1>
                    <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, labore incidunt enim nulla voluptatum ratione cumque consequuntur nihil sunt minima facere possimus expedita inventore delectus nostrum, rem quas veritatis corporis ex vitae aperiam. Ipsum qui eos nobis unde incidunt necessitatibus architecto, sunt maiores similique. Doloremque molestiae unde ut rerum corrupti.</p>
                    <div className='flex py-10'>
                        <input className='bg-white w-80 outline-none pl-4 pr-6  rounded-l-full' placeholder='Enter your email' type="text" name="" id="" />
                        <button className=' bg-black text-white py-3 px-5 -ml-6 rounded-full'>Get a Quote</button>
                    </div>
                </div>

                <div className='w-[450px] h-[450px]'>
                    <img className=' w-full h-full p-5 md:p-0' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;