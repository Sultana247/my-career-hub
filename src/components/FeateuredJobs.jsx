import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const FeateuredJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },
        [])
    return (
        <div>
             <div className='mt-32 max-w-7xl mx-auto '>
                <div className='flex flex-col justify-center items-center gap-4 mb-8'>
                    <h3 className='font-extrabold text-5xl '>Featured Jobs</h3>
                    <p className='font-medium text-[16px] text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                          {/*Jobs display*/}
                         
                         <div className='grid grid-cols-2 gap-6'>
                             {
                            jobs.map(job=><Jobs job={job} key={job.id}></Jobs>)
                          }

                          
                         </div>
                         <div className='flex justify-center mt-10 mb-32'>
                            <button className="rounded-lg bg-linear-to-r from-[#7E90FE] to-[#9873FF] font-bold text-xl text-white px-4 py-2.5 ">See all jobs</button>
                          </div>
            </div>
        </div>
    );
};

export default FeateuredJobs;