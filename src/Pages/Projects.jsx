import React from 'react';
import SectionHead from '../components/SectionHead';
import image1 from '../assets/Image/Rectangle 19.png'
import image2 from '../assets/Image/image2.png'
import image3 from '../assets/Image/image3.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";


const Projects = () => {
    return (
        <div>
            <div className='flex justify-between items-end mb-7'>
                <SectionHead
                    heading={'Our recent projects'}
                    subHeading={"Best Projects of the Years"}
                    style={"mt-14 "}
                />

                <div className='flex items-start justify-end gap-1'>
                    <LiaAngleLeftSolid className=' text-4xl p-2 rounded-full' />
                    <LiaAngleRightSolid className='bg-blackColor text-white text-4xl p-2 rounded-full' />
                </div>
            </div>


            <div className=' w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 '>
                <div className='border rounded-md'>
                    <div className='bg-gradient-to-r from-primaryColor to-secondaryColor rounded-md '>
                        <img className='w-full h-[263px]' src={image1} alt="" />
                    </div>

                    <div className='p-3'>
                        <h3 className='font-bold text-xl'>Sobha Hearland || Villas</h3>
                        <p className='text-xs py-3 w-10/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, non.</p>
                        <div className='flex items-center text-sm gap-x-3'>
                            <Rating size='small' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p>2.5</p>
                        </div>
                    </div>
                </div>

                <div className='border rounded-md'>
                    <div
                        style={{
                            backgroundImage: `url(${image2})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                            width: "100%",
                            height: "263px",
                            borderRadius: "8px"
                        }}>
                        {/* <img className='w-full h-[263px] ' src={image2} alt="" /> */}
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryColor via-white/10 to-secondaryColor opacity-50' />
                    </div>

                    <div className='p-3'>
                        <h3 className='font-bold text-xl'>Sobha Hearland || Villas</h3>
                        <p className='text-xs py-3 w-10/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, non.</p>
                        <div className='flex items-center text-sm gap-x-3'>
                            <Rating size='small' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p>2.5</p>
                        </div>
                    </div>
                </div>


                <div className='border rounded-md'>
                     <div
                        style={{
                            backgroundImage: `url(${image3})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                            width: "100%",
                            height: "263px",
                            borderRadius: "8px"
                        }}>
                        {/* <img className='w-full h-[263px] ' src={image2} alt="" /> */}
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryColor via-white/10 to-secondaryColor opacity-50' />
                    </div>

                    <div className='p-3'>
                        <h3 className='font-bold text-xl'>Sobha Hearland || Villas</h3>
                        <p className='text-xs py-3 w-10/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, non.</p>
                        <div className='flex items-center text-sm gap-x-3'>
                            <Rating size='small' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p>2.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;