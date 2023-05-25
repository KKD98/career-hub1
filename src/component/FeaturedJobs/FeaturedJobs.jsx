import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJobs = ({allFeaturedJobs}) => {
    // const allFeaturedJobs = useLoaderData();
    const [featuredjobs , setFeaturedJobs] = useState(false);
    const fourFeatures = allFeaturedJobs.slice(0 , 4);
    return (
        <div className='my-5'>
         <h1 className='text-center text-gray-950 text-4xl font-bold'>Featured Jobs</h1>
        <p className='text-center text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-[80%] mx-auto my-3 p-5'>
           {
            featuredjobs === false ? fourFeatures.map(featuredJob => <SingleFeaturedJob key={featuredJob.id} featuredJob={featuredJob}></SingleFeaturedJob>) :  allFeaturedJobs.map(featuredJob => <SingleFeaturedJob key={featuredJob.id} featuredJob={featuredJob}></SingleFeaturedJob>)
           }
           </div>
           <div className='flex'>
            <button className='mx-auto bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-[35%] md:w-[10%]'
            onClick={()=> setFeaturedJobs(!featuredjobs)}
            >{featuredjobs === true ? 'Back' : 'See All Jobs'}</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;
