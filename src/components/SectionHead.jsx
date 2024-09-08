import React from 'react';

const SectionHead = ({ subHeading, heading, style }) => {
    return (
        <div className={style}>
            <p className='text-sm'>{subHeading}</p>
            <h2 className='text-3xl md:text-4xl text-black font-bold py-3'>{heading}</h2>
        </div>
    );
};

export default SectionHead;