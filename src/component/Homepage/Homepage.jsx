import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


const Homepage = () => {
    const [allFeaturedJobs , setAllFeaturedJobs] = useState([]);
    
    useEffect(()=>{
            fetch('featured-jobs.json')
            .then(res => res.json())
            .then(data => setAllFeaturedJobs(data))
        } , [])
    return (
        <div className='mx-auto px-5'>
         <Title></Title>
         <JobCategories></JobCategories>
         <FeaturedJobs allFeaturedJobs={allFeaturedJobs}></FeaturedJobs>
        </div>
    );
};

export default Homepage;