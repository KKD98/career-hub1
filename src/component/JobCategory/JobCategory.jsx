import React from 'react';

const JobCategory = ({jobCategory}) => {
    return (
        <div className='p-5 bg-slate-100'>
            <img src={jobCategory.jobImg} alt="" className='mb-4 bg-blue-200 p-3 rounded'/>
            <p  className='mb-4 text-gray-700 font-bold text-xl'>{jobCategory.jobName}</p>
            <p  className='mb-4 text-gray-500'>{jobCategory.availableJobs}</p>
        </div>
    );
};

export default JobCategory;