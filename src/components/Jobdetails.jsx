import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiDollar, CiPhone } from "react-icons/ci";
import { RiHandbagLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Jobdetails = () => {
    const jobs =useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job=> job.id == id);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
    console.log(id, job)
    return (
        <div>
            <div className='bg-linear-to-r from-[#7E90FE0D] to-[#9873FF0D]'> 
                <img src="../../assets/images/bg2.png"  className='absolute -right-15.5 -top-1'/>
                
                    <h2 className='pt-32 font-bold text-3xl text-center'>Job Details</h2>
                
                <img src="../../assets/images/bg1.png" alt=""  />
            </div>
            <div className='flex justify-center items-center mt-32 mb-32 max-w-7xl mx-auto gap-6'>
                <div className='flex flex-col gap-6 '>
                    
                    <p><span className='font-bold'>Job Description: </span><span className='text-[#757575]'>{job_description}</span></p>
                    <p><span  className='font-bold'>Job Responsibility: </span><span className='text-[#757575]'>{job_responsibility}</span></p>
                    <p><span  className='font-bold'>Educational Requirements: </span></p>
                    <p className='text-[#757575]'>{educational_requirements}</p>
                    <p><span  className='font-bold'>Experiences: </span></p>
                    <p className='text-[#757575]'>{experiences}</p>
                    
                </div>
                <div className='flex flex-col'>
                    <div className='rounded-lg p-7 bg-linear-to-r from-[#7E90FE1A] to-[#9873FF1A] w-[425px]'>
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
                                    <button className="rounded-lg bg-linear-to-r from-[#7E90FE] to-[#9873FF] font-bold text-xl text-white px-4 py-2.5 mt-6">Apply Now</button>

                </div>
            </div>

        </div>
    );
};

export default Jobdetails;