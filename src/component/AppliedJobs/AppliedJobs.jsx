import React, { useEffect, useState } from 'react';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { Link } from 'react-router-dom';

let jobs = [];

const AppliedJobs = () => {

    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('/featured-jobs.json')
            response = await response.json()
            setAllJobs(response)
        }
        fetchMyAPI()
    }, [])
    const getIdFromLocalStorage = JSON.parse(localStorage.getItem("jobID"));
    let appliedJobs = getIdFromLocalStorage?.map(id => allJobs?.filter(appliedJob => appliedJob?.id == id));
    jobs = appliedJobs;

    return (
        <div>
            <div className='relative mb-3'>
                <img src="/Vector.png" alt="" />
                <h1 className='text-4xl text-gray-800 font-bold text-center absolute top-[50%] left-[45%]'>Job Details</h1>
            </div>

            <div className='flex justify-end mx-auto w-[80%]'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-full border border-white">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/remoteJobs"><button className='bg-indigo-400 text-white mb-4 p-2 rounded hover:bg-indigo-500'>Remote</button></Link>
                        <Link to="/onsiteJobs"><button className='bg-indigo-400 text-white p-2 rounded hover:bg-indigo-500'>Onsite</button></Link>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-5  p-8 m-5'>
                {
                    jobs?.map(appliedJob => <ShowAppliedJobs appliedJob={appliedJob}></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
