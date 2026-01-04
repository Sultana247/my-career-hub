import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredJobApplication } from './Utility/sotreLocalstorage';
import Header2nd from './Header2nd';
import { FaAngleDown } from "react-icons/fa";
import Jobs from './Jobs';
import DisplayAppliedJobs from './DisplayAppliedJobs';

const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [appliedjobs, setAppliedJobs] = useState([])
     const [displayJobs, setDisplayJobs] = useState([]);
     const handleJobsFilter = filter =>{
        if(filter === 'Remote'){
            const remoteJobs = appliedjobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedjobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
        else if(filter === 'All'){
            setDisplayJobs(appliedjobs);
        }
     }
    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job=> storedJobIds.includes(job.id))
            // console.log(jobsApplied, storedJobIds)

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
        }
    },[jobs])
    return (
        <div>
            <div>
            <div className='bg-linear-to-r from-[#7E90FE0D] to-[#9873FF0D]'> 
                <img src="https://i.ibb.co.com/8gJ0Qx5j/bg2.png"  className='absolute md:-right-1 lg:-right-15.5 lg:-top-1'/>
                
                    <h2 className='pt-32 font-bold text-3xl text-center'>Applied Jobs</h2>
                
                <img src="https://i.ibb.co.com/VWjjh7D8/bg1.png" alt=""  />
            </div>
        </div>
            

            
           <div className='max-w-7xl mx-auto'>
            {/* filter buttons */}
             <div className='flex justify-end mt-8 mr-8'>
                 {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className=" flex text-[#474747] text-xl font-light p-5 btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                Filter By<FaAngleDown />
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                <li><button onClick={()=>handleJobsFilter('All')}><a>All</a></button></li>
                <li><button onClick={()=>handleJobsFilter('Remote')}><a>Remote</a></button></li>
                <li><button onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></button></li>
                </ul>

            </div>
            {/* display jobs */}
          
            <div className='flex flex-col gap-6 mt-8'>
                {displayJobs.map(job => (
                    <DisplayAppliedJobs job={job} key={job.id}></DisplayAppliedJobs>
                ))}
            </div>
           </div>
        </div>
    );
};

export default Appliedjobs;