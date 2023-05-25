import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobDetailsPart1 from '../JobDetailsPart1/JobDetailsPart1';
import JobDetailsPart2 from '../JobDetailsPart2/JobDetailsPart2';

const JobDetails = () => {
    const foundJob = useLoaderData();

    const [allJobDetails, setAllJobDetails] = useState([])
   

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('/featured-jobs.json')
            response = await response.json()
            setAllJobDetails(response)
        }

        fetchMyAPI()
    }, [])

    const singleJobDetails = allJobDetails?.find(jobDetail => { return jobDetail.id == foundJob.jobId })
    

    return (
        <div>
        <div className='relative mb-3'>
        <img src="/Vector2.png"  alt="" />
        <h1 className='text-4xl text-gray-800 font-bold text-center absolute top-[50%] left-[45%]'>Job Details</h1>
        </div>
            <div className='flex flex-col md:flex-row justify-center mb-8'>
                <JobDetailsPart1 singleJobDetails={singleJobDetails}></JobDetailsPart1>
                <JobDetailsPart2 singleJobDetails={singleJobDetails}></JobDetailsPart2>
            </div>
        </div>
    );
};

export default JobDetails;