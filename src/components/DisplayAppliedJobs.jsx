import React from 'react';
import { CiLocationOn, CiDollar} from "react-icons/ci";
import { Link } from 'react-router';

const DisplayAppliedJobs = (jobs) => {
    const job = jobs.job;
    const { job_title, company_name, job_type, logo, remote_or_onsite, location, salary, id} = job;
    return (
        <div>
            <div className="flex gap-8 items-center bg-base-100 shadow-sm p-10">
                <div className='bg-[#F4F4F4] rounded-lg py-24 px-12'>
                    <figure>
                    <img className='w-29 h-10'
                    src={logo}
                    alt="Shoes" />
                </figure>
                </div>
                <div className=" mt-8 w-3/4">
                    <h2 className="font-extrabold text-2xl text-[#474747]">{job_title}</h2>
                    <p className='font-semibold text-xl text-[#757575] mt-2 mb-4'>{company_name}</p>
                    <div className='flex gap-6 mb-4'>
                        <button className='border text-[#7E90FE] py-2.5 px-4.5 rounded-sm'>{remote_or_onsite}</button>
                        <button className='border text-[#7E90FE] py-2.5 px-4.5 rounded-sm'>{job_type}</button>
                    </div>
                    <div className='flex gap-6 text-[#757575] text-xl font-semibold mb-4 '>
                        <p className='flex gap-2 justify-center items-center'><CiLocationOn />{location}</p>
                        <p className='flex gap-2 justify-center items-center'><CiDollar />Salary: {salary}</p>
                    </div>
                    
                </div>
                
                    <div className="navbar-end ml-auto">
                    <Link to={`/job/${id}`}> <button className="rounded-sm bg-linear-to-r from-[#7E90FE] to-[#9873FF] font-bold text-xl text-white px-4 py-2.5 ">View details</button></Link>
                
                    </div>
            </div>
        </div>
    );
};

export default DisplayAppliedJobs;