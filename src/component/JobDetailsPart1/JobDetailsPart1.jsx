import React from 'react';

const JobDetailsPart1 = ({singleJobDetails}) => {
    return (
        <div className='w-full md:w-[60%]'>
            <div className='w-full  p-3 md:p-16'>
            <p className='text-gray-800 font-semibold text-2xl mb-5'>Job Description: <span className='text-gray-600 font-medium text-xl'>{singleJobDetails?.job_description}</span></p>
            <p className='text-gray-800 font-semibold text-2xl mb-5'>Job Responsibility: <span  className='text-gray-600 font-medium text-xl'>{singleJobDetails?.job_responsibility}</span></p>
            <p className='text-gray-800 font-semibold text-2xl mb-1'>Educational requirements:</p>
            <p  className='text-gray-600 font-medium text-xl mb-5'>{singleJobDetails?.educational_requirements}</p>
            <p className='text-gray-800 font-semibold text-2xl mb-1'>Experiences:</p>
            <p  className='text-gray-600 font-medium text-xl mb-5'>{singleJobDetails?.experiences}</p>
           </div>
        </div>
    );
};

export default JobDetailsPart1;