import React from 'react'
import "./contact.css"
import icons from '../constants/icons'

export default function Contact() {
  return (
    <div className='w-full bg-third flex justify-center items-center py-20' id='contact'>
      <div className='w-full max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-start items-center relative px-2 gap-4'>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-center md:items-start p-4 gap-4'>
            <div className='w-44 h-10 bg-secondary font-urbanist text-white text-xl text-center flex items-center justify-center rounded-full border-1'>
                Contact
            </div>
            <div className='text-3xl font-urbanist text-white max-w-[500px] text-start mt-4'>
                Lets Get In Touch
            </div>
            <div className='text-sm font-jost text-secondary-40 mt-4'>
                As a student nearing the end of my studies, I am currently seeking a 6-month internship opportunity starting from February 2025. Additionally, I am looking htmlFor employment opportunities as a DevSecOps (Development, Security, and Operations) professional.
                Over the years, I have developed significant skills in the fields of cybersecurity and software development, which will make me a valuable asset to your company.
            </div>
            <hr className='mt-10 w-3/5 h-[1px] bg-secondary-40 border-none'/>
            <div className='w-full md:w-[300px]'>
                <div className="card justify-between">
                    <ul className='justify-between w-full flex px-10 py-4'>
                        <li className="iso-pro">
                            <span></span>
                            <span></span>
                            <span></span>
                            <a href="/">
                                <icons.FaXTwitter className='svg' />
                            </a>
                            <div className="text">Twitter</div>
                        </li>
                        <li className="iso-pro">
                            <span></span>
                            <span></span>
                            <span></span>
                            <a href="/">
                                <icons.FaLinkedin className='svg' />
                            </a>
                            <div className="text">Linkedin</div>
                        </li>
                        <li className="iso-pro">
                            <span></span>
                            <span></span>
                            <span></span>
                            <a href="/">
                                <icons.IoLogoGithub className='svg' />
                            </a>
                            <div className="text">Github</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-start bg-secondary-20 p-10 rounded-xl min-h-96'>
            <div className='text-3xl font-urbanist text-white max-w-[500px] text-start mt-4'>
                Lets Get In Touch
            </div>
            <div className="relative w-full mt-10">
                <input
                id="username"
                name="username"
                type="text"
                className="text-white font-jost w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none peer bg-inherit"
                />
                <label
                htmlFor="username"
                className="font-urbanist text-sm absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-primary"
                >Name</label>
            </div>
            <div className="relative w-full mt-10">
                <input
                id="email"
                name="email"
                type="email"
                className="text-white font-jost  w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none peer bg-inherit"
                />
                <label
                htmlFor="email"
                className="font-urbanist text-sm absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-primary"
                >Email</label>
            </div>
            <div className="relative w-full mt-10">
                <input
                id="phone"
                name="phone"
                type="tel"
                className="text-white font-jost  w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none peer bg-inherit"
                />
                <label
                htmlFor="username"
                className="font-urbanist text-sm absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-primary"
                >Phone Number</label>
            </div>
            <div className="relative w-full mt-10">
                <textarea
                id="message"
                name="message"
                className="text-white font-jost w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none peer bg-inherit"
                />
                <label
                htmlFor="message"
                className="font-urbanist text-sm absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-primary"
                >Message</label>
            </div>
            <button className='w-36 h-12 rounded-xl mt-4 text-white font-urbanist hover:bg-transparent duration-300 bg-primary border-1 border-primary'>Send message</button>

        </div>
      </div>
    </div>
  )
}
