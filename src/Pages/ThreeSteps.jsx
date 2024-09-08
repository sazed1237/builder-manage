import React from 'react';
import SectionHead from '../components/SectionHead';
import messages from '../assets/icon/messages.png'
import smsTracking from '../assets/icon/sms-tracking.png'
import edit from '../assets/icon/edit-2.png'


const ThreeSteps = () => {
    return (
        <div>
            <SectionHead
                heading={'EveryThing should be this easy.'}
                subHeading={'Three steps, Three minutes'}
                style={'text-center py-12'}
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10'>
                <div className=' pb-5'>
                    <img className='w-14 h-14' src={messages} alt="" />
                    <h3 className='text-xl font-bold py-5'>Answer questions</h3>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga, dolor molestiae quis aut magni?</p>
                </div>
                <div className='pb-5'>
                    <img className='w-14 h-14' src={smsTracking} alt="" />
                    <h3 className='text-xl font-bold py-5'>Select a quote</h3>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga, dolor molestiae quis aut magni?</p>
                </div>
                <div className='pb-5'>
                    <img className='w-14 h-14' src={edit} alt="" />
                    <h3 className='text-xl font-bold py-5'>Get Registered</h3>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga, dolor molestiae quis aut magni?</p>
                </div>
            </div>
        </div>
    );
};

export default ThreeSteps;