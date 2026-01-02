import React from 'react';
import { FaCalculator } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FcEngineering } from "react-icons/fc";
import { HiLightBulb } from "react-icons/hi";

const Jobcategory = (category) => {
    
    const jobCategory = category.category;
    const {availability, category_name}= jobCategory;
    return (
        <div>
            <div className='bg-linear-to-r from-[#7E90FE0D] to-[#9873FF0D] rounded-lg p-10 w-79 '>
                <div className='rounded-lg bg-linear-to-r from-[#7E90FE1A] to-[#9873FF1A] text-[#7E90FE] p-3.5 mb-8 text-4xl size-17.5 flex justify-center items-center'>
                <FaCalculator />
                </div>
                <h3 className='font-extrabold text-xl text-[#474747] mb-2'>{category_name}</h3>
                <p className='font-medium text-[16px] text-[#A3A3A3]'>{availability}</p>
            </div>
        </div>
    );
};

export default Jobcategory;