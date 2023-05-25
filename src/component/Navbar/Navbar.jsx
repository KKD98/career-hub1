import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open , setOpen] = useState(false)
    return (
        <div className='flex justify-between items-center p-5  my-5'>
            <div>
            <h2 className='text-4xl font-bold text-gray-900'>CareerMaker</h2>
            </div>

            <div>
            <div className='md:hidden' onClick={()=> setOpen(!open)}>
            <span>{open === true ? <XMarkIcon className="h-6 w-6 text-indigo-500 " /> : <Bars3Icon className="h-6 w-6 text-indigo-500 " />}</span>
            </div>
            <div className={`absolute md:static flex mb-2 flex-col  md:flex-row md:justify-between md:mr-12 duration-500 text-gray-600 md:w-full text-xl font-semibold ${open ? 'top-24' : '-top-96'}`}>
                <Link to="/" className='hover:text-indigo-600'>Home</Link>
                <Link to="/statistics" className='hover:text-indigo-600'>Statistics</Link>
                <Link to="/applied-jobs" className='hover:text-indigo-600'>Applied Jobs</Link>
                <Link to="/blogs" className='hover:text-indigo-600'>Blogs</Link>
            </div>
            </div>

            <div><button className='bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded'>Start Applying</button></div>
        </div>
    );
};

export default Navbar;