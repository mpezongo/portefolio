import React from 'react'
import icons from '../constants/icons'
import "./footer.css"

export default function Footer() {

  return (
    <div className='w-full bg-secondary-20 flex justify-center items-center py-10'>
        <div className='w-full max-w-[1200px] flex flex-col xl:flex-row justify-center items-center relative px-2 gap-4'>
            <div className='w-full xl:w-4/5 flex'>
                <div className='w-1/2 flex flex-col justify-start items-start gap-4 h-48 xl:h-72'>
                    <div className='text-xl xl:text-5xl  text-white font-urbanist font-bold'>
                        MPEZONGO
                    </div>
                    <div className='text-[8px] xl:text-sm text-white font-urbanist text-justify w-4/5'>
                    I am a 4th-year student in <span className='text-primary'>cybersecurity engineering</span>, passionate about protecting information systems. My skills include security auditing, penetration testing, and network security. <span className='text-primary'>Additionally, I am a software, mobile, and web application developer</span>. I am currently working towards completing my cybersecurity engineering degree.
                    </div>
                    <div className='flex items-center gap-2 text-white font-jost text-[8px] xl:text-lg'>
                        <div className='w-8 h-8 xl:w-12 xl:h-12 rounded-full bg-white text-primary text-xl xl:text-3xl flex justify-center items-center'>
                            <icons.IoMdMail />
                        </div>
                        pezongomickael67@gmail.com
                    </div>
                </div>
                <div className='w-1/4 flex flex-col justify-start items-start h-48 xl:h-72 text-white'>
                    <span className='text-xl xl:text-2xl font-urbanist'>Quick Link</span>
                    <div className='flex justify-start items-start flex-col mt-10 font-urbanist gap-2 text-xs xl:text-md'>
                        <a href='/#about'>About</a>
                        <a href='/#project'>Projects</a>
                        <a href='/#skill'>Skills</a>
                        <a href='/#certificate'>Certificates</a>
                        <a href='/#experience'>Experiences</a>
                        <a href='/#contact'>Contact</a>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col justify-start items-start h-48 xl:h-72 text-white'>
                    <span className='text-xl xl:text-2xl font-urbanist'>Link</span>
                    <div className='flex justify-start items-start flex-col mt-10 font-urbanist gap-2 text-xs xl:text-md'>
                        <a href='/'>Components</a>
                        <a href='/files/Resume Mickael PEZONGO.pdf'>Resume</a>
                    </div>
                </div>
            </div>
            <hr className='w-full h-1 bg-white border-none xl:hidden' />
            <div className='w-full xl:w-1/5 flex flex-col justify-start items-center h-32 xl:h-72'>
                <span className='text-2xl font-urbanist text-white'>Social media</span>
                <div className='flex justify-start items-start flex-col font-urbanist gap-2'>
                    <ul className="wrapper">
                    <li className="icon facebook">
                    <a href="https://x.com/pezongo74552" className='flex flex-col justify-center items-center'>
                        <span className="tooltip">X</span>
                        <icons.FaXTwitter />
                    
                    </a>
                    </li>
                    <li className="icon twitter">
                        <a href="https://www.linkedin.com/in/mpezongo/" className='flex flex-col justify-center items-center'>
                            <span className="tooltip">LinkedIn</span>
                            <icons.FaLinkedin />
                        </a>
                    </li>
                    <li className="icon instagram">
                        <a href="https://github.com/mpezongo" className='flex flex-col justify-center items-center'>
                            <span className="tooltip">Github</span>
                            <icons.IoLogoGithub />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
