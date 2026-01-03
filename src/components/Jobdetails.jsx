import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiDollar, CiPhone } from "react-icons/ci";
import { RiHandbagLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Header2nd from './Header2nd';

import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from './Utility/sotreLocalstorage';

const Jobdetails = () => {
    const jobs =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=> job.id == id);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
    
    const handleApplyJob=()=>{
        saveJobApplication(idInt);
        toast('You have successfully applied !')
    }
    return (
        <div>
            <Header2nd></Header2nd>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-32 mb-32 max-w-7xl mx-auto gap-6'>
                <div className='flex flex-col gap-6 w-[350px] md:w-[500px]'>
                    
                    <p><span className='font-bold'>Job Description: </span><span className='text-[#757575]'>{job_description}</span></p>
                    <p><span  className='font-bold'>Job Responsibility: </span><span className='text-[#757575]'>{job_responsibility}</span></p>
                    <p><span  className='font-bold'>Educational Requirements: </span></p>
                    <p className='text-[#757575]'>{educational_requirements}</p>
                    <p><span  className='font-bold'>Experiences: </span></p>
                    <p className='text-[#757575]'>{experiences}</p>
                    
                </div>
                <div className='flex flex-col'>
                    <div className='rounded-lg p-7 bg-linear-to-r from-[#7E90FE1A] to-[#9873FF1A] w-[330px] md:w-[425px]'>
                        <h3 className='mb-6 font-extrabold'>Job Details</h3>
                        <div className='border text-[#7E90FE] mb-6'></div>
                        <p className='text-[#474747] flex font-bold text-lg gap-2  items-center'><span className='text-[#7E90FE]'><CiDollar /></span>Salary: <span className='text-[#757575]'>{salary}</span></p>
                        <p className='text-[#474747] flex font-bold text-lg gap-2  items-center'><span className='text-[#7E90FE]'><RiHandbagLine /></span>Job Title: <span className='text-[#757575]'>{job_title}</span></p>
                        
                        <h3 className='mb-6 mt-6 font-extrabold'>Contact Information</h3>
                        <div className='border text-[#7E90FE] mb-6'></div>
                         <p className='text-[#474747] flex font-bold text-lg gap-2  items-center'><span className='text-[#7E90FE]'><CiPhone /></span>Phone: <span className='text-[#757575]'>{contact_information.phone}</span></p>
                        <p className='text-[#474747] flex font-bold text-lg gap-2  items-center'><span className='text-[#7E90FE]'><MdOutlineEmail /></span>Email: <span className='text-[#757575]'>{contact_information.email}</span></p>
                        <p className='text-[#474747] flex font-bold text-lg gap-2  items-center'><span className='text-[#7E90FE]'><IoLocationOutline /></span>Location: <span className='text-[#757575]'>{contact_information.address}</span></p>
                       

                    </div>
                    <button onClick={handleApplyJob} className="rounded-lg bg-linear-to-r from-[#7E90FE] to-[#9873FF] font-bold text-xl text-white px-4 py-2.5 mt-6">Apply Now</button>

                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Jobdetails;