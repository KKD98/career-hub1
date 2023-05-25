import React from 'react';

const Title = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center my-3'>
            <div className='grid grid-cols-1 gap-5 md:pl-12'>
                <h1 className='text-6xl font-bold text-gray-950'>One Step</h1>
                <h1 className='text-6xl font-bold text-gray-950'>Closer To Your</h1>
                <h1 className='text-6xl font-bold text-indigo-500'>Dream Job</h1>
                <p className='text-gray-500 text-xl font-bold'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-[50%] md:w-[20%]'>Get Started</button>
            </div>
            <div>
                <img src="titleImage.png" alt="" className='h-full w-[70%] my-4 mx-auto' />
            </div>
        </div>
    );
};

export default Title;