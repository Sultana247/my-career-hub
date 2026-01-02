import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="text-white p-32 max-w-7xl mx-auto">
                <div className='footer sm:footer-horizontal '>
                    <aside>
                        <h3 className='text-[32px] font-extrabold mb-5'>CareerHub</h3>
                        <p className='text-[16px] text-[#FFFFFFB3] mb-5'>
                        There are many variations of passages
                        <br />
                        of Lorem Ipsum , but the majority have 
                        <br />
                        suffered alteration in some form.
                    
                        </p>
                        <div className='flex gap-6'>
                            <div className='rounded-full size-10 bg-white text-[#337FFF] flex justify-center items-center text-2xl'><FaFacebookF /></div>
                            <div className='rounded-full size-10 bg-white  text-[#33CCFF] flex justify-center items-center text-2xl'><FaTwitter /></div>
                            <div className='rounded-full size-10 bg-white text-[#F75274] flex justify-center items-center text-2xl'><FaInstagram /></div>
                            
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
                <div className='border text-[#7E90FE] mb-12.5 mt-12.5'></div>
                <div className="footer sm:footer-horizontal bg-neutral items-center p-4 text-[#FFFFFF66]">
                    <aside className="grid-flow-col items-center">
                        
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                       <p>Powered by CareerHub</p>
                    </nav>
                </div>
            </footer>
            
        </div>
    );
};

export default Footer;