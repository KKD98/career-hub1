import React from 'react';
import { CurrencyDollarIcon , MapPinIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleFeaturedJob = ({featuredJob}) => {
    return (
        <div className='border border-gray-200 p-5 '>
            <img src={featuredJob.company_logo} alt="" className='mb-4 '/>
            <p className='text-gray-700 font-bold text-2xl w-full'>{featuredJob.job_title}</p>
            <p className='text-gray-600 text-xl font-semibold'>{featuredJob.company_name}</p>
            <div className='my-4'>
                <button className='bg-white border border-indigo-500 p-2 rounded text-indigo-500 font-bold mr-4 w-[30%] md:w-[20%]'>{featuredJob.remote_or_onsite}</button>
                <button className='bg-white border border-indigo-500 p-2 rounded text-indigo-500 font-bold w-[30%] md:w-[20%]'>{featuredJob.fulltime_or_parttime}</button>
            </div>
            <div className='flex flex-col md:flex-row gap-7 mb-4 text-gray-500 font-semibold text-xl'>
                <div className='flex gap-2'>
                <MapPinIcon className="h-6 w-6" />
                <p>{featuredJob.location}</p>
                </div>
               <div  className='flex gap-2'>
               <CurrencyDollarIcon className="h-6 w-6" />
               <p>{featuredJob.salary}</p>
               </div>
            </div>
           <Link to={`/jobDetails/${featuredJob.id}`}>
           <button className='bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-[70%] md:w-[30%]'>View Details</button>
           </Link>
        </div>
    );
};

export default SingleFeaturedJob;