import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredJobApplication } from './Utility/sotreLocalstorage';
import Header2nd from './Header2nd';

const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [appliedjobs, setAppliedJobs] = useState([])
    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job=> storedJobIds.includes(job.id))
            // console.log(jobsApplied, storedJobIds)

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
        }
    },[])
    return (
        <div>
            <div>
            <div className='bg-linear-to-r from-[#7E90FE0D] to-[#9873FF0D]'> 
                <img src="../../assets/images/bg2.png"  className='absolute md:-right-1 lg:-right-15.5 lg:-top-1'/>
                
                    <h2 className='pt-32 font-bold text-3xl text-center'>Applied Jobs</h2>
                
                <img src="../../assets/images/bg1.png" alt=""  />
            </div>
        </div>
            <div className='mt-32 mb-32'>
                <h2 className='text-5xl'>I have applied : {appliedjobs.length} jobs</h2>
            </div>
        </div>
    );
};

export default Appliedjobs;