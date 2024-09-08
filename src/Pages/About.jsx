import React from 'react';
import image1 from '../assets/Image/Rectangle 27.png'


const About = () => {
    return (
        <div className='my-16'>
            <h1 className=' text-center text-4xl w-6/12 mx-auto font-bold'>We are a Global, Boutique real estate brokerage</h1>

            <div className='flex justify-between my-10 px-16'>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-4xl font-bold'>The Transfer of real estate</h2>
                    <p className='text-xs w-10/12 py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla magnam, harum fuga voluptates fugiat doloribus vitae beatae veniam et repellat tenetur dolorum, ad dignissimos molestias eaque facilis eligendi minima voluptate, enim ratione voluptatum magni? Corrupti, exercitationem! Doloremque modi recusandae autem deserunt, totam obcaecati eveniet illo consectetur, ut, voluptate ducimus! Officia.</p>

                    <div className=' flex items-center gap-5'>
                        <button className='px-4 py-2 text-white rounded-full bg-black '>Book Now!</button>
                        <button className='px-4 py-2 text-black  border rounded-full'>Read More</button>
                    </div>

                    <div className='flex items-center gap-10 pt-14'>
                        <h2 className='text-3xl md:text-5xl font-bold leading-tight '>12+<span className='text-xs'>Customers</span></h2>
                        <h2 className='text-3xl md:text-5xl font-bold leading-tight '>12+<span className='text-xs'>Officers</span></h2>
                        <h2 className='text-3xl md:text-5xl font-bold leading-tight '>12+<span className='text-xs'>Students</span></h2>
                    </div>
                </div>

                <div>
                    <div
                        style={{
                            backgroundImage: `url(${image1})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                            width: "450px",
                            height: "500px",
                            borderRadius: "8px"
                        }}>
                        {/* <img className='w-full h-[263px] ' src={image2} alt="" /> */}
                        <div className='absolute top-0 left-0 rounded-md right-0 bottom-0 bg-gradient-to-r from-primaryColor via-white/10 to-secondaryColor opacity-50' />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;