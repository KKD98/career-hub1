import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ShowAppliedJobs = ({ appliedJob }) => {
    const singleJob = appliedJob[0]

    return (
        <div className='flex flex-col md:flex-row md:justify-between md:items-center w-full'>
            <div className='flex flex-col md:flex-row gap-3 items-center w-full'>
            <div className='bg-red-100 h-52 w-48 flex items-center'>
                <img src={singleJob?.company_logo} alt="" className='p-8 w-full' />
            </div>
            <div className='grid grid-cols-1 gap-2'>
                <p className='text-gray-700 font-bold text-2xl'>{singleJob?.job_title}</p>
                <p className='text-gray-400 font-semibold text-xl'>{singleJob?.company_name}</p>

                <div className='flex mr-5 my-3'>
                    <button className='bg-white border border-indigo-500 p-2 rounded text-indigo-500 font-bold mr-4 w-full md:w-[30%]'>{singleJob?.remote_or_onsite}</button>
                    <button className='bg-white border border-indigo-500 p-2 rounded text-indigo-500 font-bold w-full md:w-[30%]'>{singleJob?.fulltime_or_parttime}</button>
                </div>
                <div className='flex  justify-center gap-5'>
                    <div className='flex gap-2 items-center mb-6'>
                        <MapPinIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Address: <span className='text-gray-600 font-medium text-xl'>{singleJob?.location}</span></p>
                    </div>
                    <div className='flex gap-2 items-center mb-6'>
                        <CurrencyDollarIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Salary: <span className='text-gray-600 font-medium text-xl'>{singleJob?.salary} (Per Month)</span></p>
                    </div>
                </div>

            </div>

        </div>

        <div className='w-full md:w-[15%]'>
       <Link  to={`/jobDetails/${singleJob?.id}`}>
       <button onClick={() => setDataInLocalStorage(singleJobDetails.id)} className='bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-full'>View Details</button>
       </Link>
        </div>
        </div>
    );
};

export default ShowAppliedJobs;