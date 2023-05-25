import React from 'react';
import { CurrencyDollarIcon, MapPinIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const storeData = [];
const JobDetailsPart2 = ({ singleJobDetails }) => {

    const setDataInLocalStorage = (id) => {
        const previousData = JSON.parse(localStorage.getItem("jobID"));
        if (previousData) {
            const isAdded = previousData.find(data => data == id)
            if (isAdded) {
                localStorage.setItem("jobID", JSON.stringify(previousData));
            }
            else {
                const newData = [...previousData, id];
                localStorage.setItem("jobID", JSON.stringify(newData));
            }

        }
        else {
            storeData.push(id)
            localStorage.setItem("jobID", JSON.stringify(storeData));
        }

    }
    return (
        <div className='w-full md:w-[40%]'>
            <div className='grid grid-cols-1 px-3 m-3'>
                <div className='w-full mb-5 p-3 md:p-8 bg-blue-100 rounded'>
                    <h3 className='text-gray-900 font-bold text-4xl '>Job Details</h3>
                    <hr className='my-5 border-b-2 border-gray-300' />
                    <div className='flex gap-2 items-center mb-3'>
                        <CurrencyDollarIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Salary: <span className='text-gray-600 font-medium text-xl'>{singleJobDetails?.salary} (Per Month)</span></p>
                    </div>

                    <div className='flex gap-2 items-center mb-6'>
                        <CalendarDaysIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Job Title: <span className='text-gray-600 font-medium text-xl'>{singleJobDetails?.job_title}</span></p>
                    </div>

                    <h3 className='text-gray-900 font-bold text-4xl '>Contact Information</h3>
                    <hr className='my-5 border-b-2 border-gray-300' />

                    <div className='flex gap-2 items-center mb-6'>
                        <PhoneIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Phone: <span className='text-gray-600 font-medium text-xl'>{singleJobDetails?.phone}</span></p>
                    </div>

                    <div className='flex gap-2 items-center mb-6'>
                        <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Email: <span className='text-gray-600 font-medium text-xl'>{singleJobDetails?.email}</span></p>
                    </div>

                    <div className='flex gap-2 items-center mb-6'>
                        <MapPinIcon className="h-6 w-6 text-indigo-400" />
                        <p className='text-gray-800 font-semibold text-2xl'>Address: <span className='text-gray-600 font-medium text-xl'>{singleJobDetails?.location}</span></p>
                    </div>
                </div>

                <Link>
                    <button onClick={() => setDataInLocalStorage(singleJobDetails.id)} className='bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-full'>Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetailsPart2;