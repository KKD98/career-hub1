import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center my-8 font-bold text-4xl text-indigo-600'>Questions & Answers</h1>
            <div className='flex flex-col gap-5 justify-center mx-auto w-[80%]'>
                <div className='border-4 border-indigo-300 rounded p-4 w-full mx-3 md:mx-4'>
                    <h3 className='text-indigo-500 font-bold text-2xl'>Question: When should you use context API?</h3>
                    <p className='text-indigo-400 font-semibold text-2xl'>Answer: Use Context API in React when I need to share data or manage state that needs to be accessed by multiple components, avoiding prop drilling and simplifying component interactions, encapsulating third-party libraries, and managing application-wide state in a centralized manner.</p>
                </div>
                <div className='border-4 border-indigo-300 rounded p-4 w-full mx-3 md:mx-4'>
                    <h3 className='text-indigo-500 font-bold text-2xl'>Question: What is a custom hook?</h3>
                    <p className='text-indigo-400 font-semibold text-2xl'>Answer: Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. Custom React hooks are an essential tool that let us add special, unique functionality to our React applications.</p>
                </div>
                <div className='border-4 border-indigo-300 rounded p-4 w-full mx-3 md:mx-4'>
                    <h3 className='text-indigo-500 font-bold text-2xl'>Question: What is useRef?</h3>
                    <p className='text-indigo-400 font-semibold text-2xl'>Answer: useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object .
                    </p>
                </div>
                <div className='border-4 border-indigo-300 rounded p-4 w-full mx-3 md:mx-4'>
                    <h3 className='text-indigo-500 font-bold text-2xl'>Question: What is useMemo?</h3>
                    <p className='text-indigo-400 font-semibold text-2xl'>Answer: The useMemo is a hook used in the functional component of react that returns a memoized value.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;