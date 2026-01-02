import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router';
import { FaCalculator } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FcEngineering } from "react-icons/fc";
import { HiLightBulb } from "react-icons/hi";
import Jobcategory from './Jobcategory';
import FeateuredJobs from './FeateuredJobs';

const Home = () => {
    const [jobcategory, setJobcategory]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setJobcategory(data))
    }
        ,[])

    return (
        <div>
            <div className=' bg-linear-to-r from-[#7E90FE0D] to-[#9873FF0D]'>
                <div className='max-w-7xl mx-auto  '>
                    <div className='pt-37.5 flex flex-col md:flex-row justify-center items-center'>
                        <div className=''>
                            <h2 className='text-[48px] md:text-72px] font-extrabold'>
                                One Step
                                <br />
                                Closer To Your 
                                <br />
                                <span className='text-[#7E90FE]'>Dream Job</span>
                            </h2>
                            <p className='mt-6 text-lg font-medium text-[#757575]'>Explore thousands of job opportunities with all the
                                <br />
                                information you need. Its your future. Come find it. Manage all 
                                <br />
                                your job application from start to finish.</p>
                            <button className="rounded-lg bg-linear-to-r from-[#7E90FE] to-[#9873FF] font-extrabold text-xl text-white px-7 py-5 mt-8">Get Started</button>
                        </div>
                        <div className=''>
                            <img src="../../assets/images/user.png" alt="users picture" srcset="" className='w-180 h-150 md:w-205 md:h-180 '/>
                        </div>

                    </div>
                </div>
            </div>
            {/* Job category list */}
            <div className='mt-32 max-w-7xl mx-auto '>
                <div className='flex flex-col justify-center items-center gap-4 mb-8'>
                    <h3 className='font-extrabold text-5xl '>Job Category List</h3>
                    <p className='font-medium text-[16px] text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-6.5'>
                    {/* cards */}
                    {
                    jobcategory.map(category=><Jobcategory category={category}></Jobcategory>)
                    }

                 
                </div>
            </div>
            {/* featured jobs */}
            <FeateuredJobs></FeateuredJobs>
        </div>
    );
};

export default Home;