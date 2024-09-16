import React from 'react'
import img from '../constants/img'
import icons from '../constants/icons'

export default function About() {
  return (
    <div className='w-full pt-36 flex flex-col justify-center items-center px-2' id='about'>
        <div className='w-full xl:max-w-[1200px] flex tel:flex-col-reverse xl:flex-row justify-start items-start relative'>
            <div className='relative xl:w-1/2  w-full flex flex-col xl:justify-start xl:items-start justify-center items-center gap-4 z-10 xl:mt-0 mt-10 md:mt-40'>
                <div className='h-6 xl:w-5/6 tel:w-full bg-secondary rounded-full border-1 xl:text-xs tel:text-[10px] text-white font-urbanist text-center justify-center items-center flex max-w-[800px]'>
                    Hello, I'm PEZONGO Mickael cybersecurity student and software developer
                </div>
                <div className='xl:text-6xl font-urbanist text-white tel:text-center xl:text-start tel:text-4xl max-w-[400px] xl:max-w-[800px]'>
                    I'm a <span className='text-primary font-bold'>Cybersecurity</span> Student at INSA CVL and Software Developer
                </div>
                <div className='text-white font-urbanist xl:text-xs tel:text-[8px] tel:text-justify xl:text-start max-w-[400px]'>
                    I am a 4th-year student in <span className='text-primary'>cybersecurity engineering</span>, passionate about protecting information systems. My skills include security auditing, penetration testing, and network security. <span className='text-primary'>Additionally, I am a software, mobile, and web application developer</span>. I am currently working towards completing my cybersecurity engineering degree.
                </div>
                <div className='flex gap-4 tel:flex-wrap w-full justify-center items-center xl:justify-start justify-items-center'>
                    <div className='w-[150px] h-[100px] border-1 rounded-lg relative text-white flex flex-col p-2'>
                        <span className='font-urbanist text-lg font-bold'>---</span>
                        <hr className='w-10 h-[2px] bg-white rounded-full border-none' />
                        <div className='absolute right-2 z-10 bottom-4 w-8 flex justify-center items-center rounded-full h-8 bg-secondary'>
                            <img src={img.tryhackme} alt="TryHackme" className='w-5' />
                        </div>
                        <span className='font-urbanist text-[10px] w-16 mt-4 text-primary font-bold'>TryHackMe</span>

                        <div className='absolute right-[54px] -top-2'>
                            <div className='w-0 h-0 border-t-[51px] border-t-transparent border-b-[51px] border-b-transparent border-r-[35px] relative border-r-white
                                before:content-[""] before:absolute before:w-0 before:h-0 before:border-t-[50px] before:border-t-transparent before:border-b-[50px] before:border-b-transparent before:border-r-[33px]
                                before:border-r-secondary-20
                                before:-top-[49.5px] before:left-[2px]
                            '> 
                            </div>
                            <div className='h-[100px] w-[55px] border-r-1 border-t-1 border-b-1  absolute top-[1px] left-[34px] bg-secondary-20 rounded-r-lg'>

                            </div>
                        </div>
                    </div>
                    <div className='w-[150px] h-[100px] border-1 rounded-lg relative text-white flex flex-col p-2'>
                        <span className='font-urbanist text-lg font-bold'>---</span>
                        <hr className='w-10 h-[2px] bg-white rounded-full border-none' />
                        <div className='absolute right-2 z-10 bottom-4 w-8 flex justify-center items-center rounded-full h-8 bg-secondary'>
                            <img src={img.bots} alt="Boss of the SOC" className='w-4' />
                        </div>
                        <span className='font-urbanist text-[10px] w-16 mt-4 text-primary font-bold'>Boss Of The Soc</span>

                        <div className='absolute right-[54px] -top-2'>
                            <div className='w-0 h-0 border-t-[51px] border-t-transparent border-b-[51px] border-b-transparent border-r-[35px] relative border-r-white
                                before:content-[""] before:absolute before:w-0 before:h-0 before:border-t-[50px] before:border-t-transparent before:border-b-[50px] before:border-b-transparent before:border-r-[33px]
                                before:border-r-secondary-20
                                before:-top-[49.5px] before:left-[2px]
                            '> 
                            </div>
                            <div className='h-[100px] w-[55px] border-r-1 border-t-1 border-b-1  absolute top-[1px] left-[34px] bg-secondary-20 rounded-r-lg'>

                            </div>
                        </div>
                    </div>
                    <div className='w-[150px] h-[100px] border-1 rounded-lg relative text-white flex flex-col p-2'>
                        <span className='font-urbanist text-lg font-bold'>---</span>
                        <hr className='w-10 h-[2px] bg-white rounded-full border-none' />
                        <div className='absolute right-2 z-10 bottom-4 w-8 flex justify-center items-center rounded-full h-8 bg-secondary'>
                            <img src={img.rootme} alt="Root me" className='w-4'/>
                        </div>
                        <span className='font-urbanist text-[10px] w-16 mt-4 text-primary font-bold'>Code Lab</span>

                        <div className='absolute right-[54px] -top-2'>
                            <div className='w-0 h-0 border-t-[51px] border-t-transparent border-b-[51px] border-b-transparent border-r-[35px] relative border-r-white
                                before:content-[""] before:absolute before:w-0 before:h-0 before:border-t-[50px] before:border-t-transparent before:border-b-[50px] before:border-b-transparent before:border-r-[33px]
                                before:border-r-secondary-20
                                before:-top-[49.5px] before:left-[2px]
                            '> 
                            </div>
                            <div className='h-[100px] w-[55px] border-r-1 border-t-1 border-b-1  absolute top-[1px] left-[34px] bg-secondary-20 rounded-r-lg'>

                            </div>
                        </div>
                    </div>
                </div>
                <span className="xl:absolute xl:flex hidden top-40 -right-10 h-16 w-16">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <a href="/files/Resume Mickael PEZONGO.pdf">
                        <span className="relative inline-flex justify-center items-center rounded-full h-16 w-16 text-xs bg-primary text-white font-urbanist gap-1 cursor-pointer">
                            <icons.FaDownload /> Resume
                        </span>
                    </a>
                </span>
            </div>
            <div className='relative tel:w-full xl:w-1/2 flex justify-center tel:px-1'>
                <div className='relative xl:w-[400px] xl:h-[400px] h-[320px] w-[320px] rounded-full border-1 flex justify-center items-center'>
                    {/* <div className='w-4 h-4 bg-primary rounded-full absolute -top-2'>

                     </div> */}
                    <div className='relative xl:w-[370px] xl:h-[370px] tel:w-[300px] tel:h-[300px] rounded-full border-1.5 flex justify-center items-center'>
                        {/* <div className='w-4 h-4 bg-primary rounded-full absolute right-28 top-1'>

                        </div> */}
                        <div className='relative xl:w-[340px] xl:h-[340px] tel:w-[280px] tel:h-[280px] rounded-full border-2. justify-center items-center flex'>
                            {/* <div className='w-4 h-4 bg-primary rounded-full absolute right-12 top-8'>

                            </div> */}
                            <div className='relative xl:w-[310px] xl:h-[310px] tel:w-[260px] tel:h-[260px] rounded-full border-2.5  justify-center items-center flex'>
                                {/* <div className='w-4 h-4 bg-primary rounded-full absolute right-0 top-24'>

                                </div> */}
                                <div className='relative xl:w-[280px] xl:h-[280px] tel:w-[240px] tel:h-[240px] rounded-full border-3. justify-center items-center flex'>
                                    {/* <div className='w-4 h-4 bg-primary rounded-full absolute -right-2 top-40'>

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 flex justify-center items-center'>
                    <img src={img.pm} alt="PEZONGO Mickael" className='top-10 relative' />
                    <div className="absolute xl:-bottom-10 tel:-bottom-10 left-0 w-full h-10 bg-gradient-to-t from-third to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
