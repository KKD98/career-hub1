import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
    const [jobCategories , setJobCategories] = useState([]);
    useEffect(()=>{
        fetch('job-category.json')
        .then(res => res.json())
        .then(data => setJobCategories(data))
    } , [])
    return (
        <div className='my-5'>
        <h1 className='text-center text-gray-950 text-4xl font-bold'>Job Category List</h1>
        <p className='text-center text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex flex-col gap-5 md:flex-row justify-between w-[75%] mx-auto my-10'>
            {jobCategories.map(jobCategory => <JobCategory key={jobCategory.jobId} jobCategory={jobCategory}></JobCategory>)}
        </div>
        </div>
    );
};

export default JobCategories;