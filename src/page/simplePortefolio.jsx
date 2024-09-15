"use client";
import React from "react";
import Navbar from '../components/navbar'
import img from '../constants/img'
import icons from '../constants/icons'
import { NavLink } from "react-router-dom";

const cybersecurityElements = [
  {
      img:img.wireshark,
      title:"WireShark"
  },
  {
      img:img.burpsuite,
      title:"BurpSuite"
  },
  {
      img:img.metasploit,
      title:"MetaSploit"
  },
  {
      img:img.linuxConsole,
      title:"Linux Console"
  },
  {
      img:img.snort,
      title:"Snort"
  },
  {
      img:img.wazuh,
      title:"Wazuh"
  },
  {
      img:img.elk,
      title:"ELK"
  },
  {
      img:img.splunk,
      title:"Splunk"
  },
  {
      img:img.tryhackme,
      title:"TryHackMe"
  },
  {
      img:img.vuln,
      title:"VulnHub"
  },
  {
      img:img.rootme,
      title:"Root-Me"
  },
  {
      img:img.bots,
      title:"BOTS"
  },
]

const developerElements = [
  {
      img:img.python,
      title:"Python"
  },
  {
      img:img.js,
      title:"JavaScript"
  },
  {
      img:img.java,
      title:"Java"
  },
  {
      img:img.c,
      title:"C"
  },
  {
      img:img.logo,
      title:"React"
  },
  {
      img:img.nodejs,
      title:"NodeJs"
  },
  {
      img:img.django,
      title:"Django"
  },
  {
      img:img.nextjs,
      title:"NextJs"
  },
  {
      img:img.css,
      title:"CSS"
  },
  {
      img:img.tailwind,
      title:"Tailwind"
  },
  {
      img:img.sass,
      title:"Sass"
  },
  {
      img:img.bootstrap,
      title:"BootStrap"
  },
]

const elements = [
  {
      image:img.ciscoBadge,
      title:"Cisco",
      description:"Introduction to Cybersecurity",
      link:"https://www.credly.com/badges/ab812de4-d1f2-402c-b138-541df6c57739/public_url"
  },
  {
      image:img.ccna1,
      title:"Cisco",
      description:"CCNA: Introduction to Networks",
      link:"https://www.credly.com/badges/ac9b3d6e-4cec-4685-830c-b777e7a52426/public_url"
  },
  {
      image:img.awscloudfoundation,
      title:"AWS",
      description:"AWS Academy Cloud Foundations",
      link:"https://www.credly.com/badges/b312cf63-916e-4feb-a0e8-9e0de6c9529e/public_url"
  },
  {
      image:img.isc2candidate,
      title:"ISC2",
      description:"ISC2 Candidate",
      link:"https://www.credly.com/badges/ad7bac6b-459e-4485-af5a-9960e7020ef7/public_url"
  },
]

const Experiences = [
  {
    year:"2024",
    title:"Intership at LAAS-CNRS (France)",
    subtitle:"Implementation of edge and cloud service bundle",
    description:"The objective of this internship was to test a seamless integration between cloud and edge computing by offering a bundle service accessible via an API. The use case involved autonomous vehicles that, through the API, accessed the bundle service to leverage available resources in both cloud and edge computing. A new concept, called capacities, was introduced during this internship. This work allowed me to gain an in-depth understanding of cloud and edge computing, as well as the world of autonomous vehicles."
  },
  {
    year:"2024",
    title:"Professor (France)",
    subtitle:"Mathematics Teacher Terminal Level",
    description:"Taught advanced mathematics to terminal students, preparing them for final exams such as the Baccalauréat. Developed and delivered comprehensive explanation plans covering calculus, algebra, and geometry, while providing personalized tutoring to help students grasp complex concepts. Assessed student progress through regular evaluations and provided targeted feedback to enhance their understanding. Promoted critical thinking and problem-solving skills, leading to improved student performance, with a strong focus on exam readiness."
  },
  {
    year:"2023",
    title:"Web site building",
    subtitle:"Building Lithyus Music Web Site",
    description:"As the lead developer of Lithyus Music, I designed and launched a comprehensive music distribution platform focused on promoting independent African artists. I built and maintained the backend architecture, integrating streaming services like YouTube, Apple Music, Deezer etc to ensure smooth content distribution. Additionally, I developed key features such as free distribution services and artist profiles, creating a user-friendly interface that supports both artists and production houses while enhancing global visibility and engagement."
  },
  {
    year:"2022",
    title:"Internship at 1337 (Maroc)",
    subtitle:"Building a Security Operation Center (SOC)",
    description:"During this internship, I contributed to the development of a Security Operations Center (SOC) by integrating Wazuh, ELK Stack, and Syslog for real-time monitoring and threat detection. I set up Wazuh for endpoint security and log collection, configured the ELK Stack (Elasticsearch, Logstash, Kibana) for log aggregation, visualization, and analysis, and integrated Syslog to centralize logs from various sources. This experience deepened my knowledge of cybersecurity practices, log management, and SIEM (Security Information and Event Management) solutions."
  },
]

const Component = ({title, description, image}) => {
  return (
    <NavLink className='tablet:w-56 tablet:h-70 px-2 border-2 border-white rounded-xl flex flex-col tel:w-40 tel:h-56 tablet:hover:w-60 tablet:hover:h-72 tel:hover:w-42 tel:hover:h-60 duration-300 shadow-2xl hover:shadow-green'>
      <span className='text-shadow-outline text-green font-mono font-bold'>{title}</span>
      <span className='text-gray-400 text-xs'>{description}</span>
      <img src={image} alt={title} className='w-full mt-4'/>
    </NavLink>
  );
}

export default function SimplePortefolio() {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
        <div className='w-full flex flex-col justify-start items-center tel:p-1 tablet:p-0 gap-20'>
            <Navbar />
            <div className='tablet:w-11/12 max-w-[1200px] tel-w-full flex justify-center items-center relative mt-24'>
              <div className='tel:w-1/3 tablet:1/2 flex flex-col gap-10'>
                <div className='tablet:text-3xl tel:text-lg text-white font-mono w-full'>
                  I'm <span className='tablet:text-5xl tel:text-3xl font-mono text-green'>PEZONGO Mickael</span> <br />
                  <span className='tel:text-sm tablet:text-3xl tablet:flex-col flex'>
                    Cybersecurity engineer <span>& software developper</span>
                  </span>
                </div>
                <button className='hover:w-44 hover:h-16 transform origin-center duration-300 hover:bg-green hover:shadow-lg hover:text-white hover:shadow-green w-40 h-12 border-4 rounded-lg border-green text-green text-lg font-mono'>Contact me</button>
              </div>
              <div className='tel:w-2/3 tablet:1/2 flex justify-center tablet:items-center tel:items-end'>
                <img src={img.pm} alt="PEZONGO Mickael" className='w-full'/>
                <div className='absolute bottom-0 tablet:right-10 tel:right-0 flex flex-col gap-4 justify-center items-center w-24 '>
                  <hr className='tablet:h-60 bg-green w-[3px] rounded-full tel:h-12'/>
                  <div className='flex flex-col gap-4 tablet:text-2xl tel:text-md text-white'>
                    <icons.FaLinkedin className='tablet:hover:text-3xl tel:hover:text-lg hover:text-[#0e76a8] duration-150'/>
                    <icons.FaInstagram className='tablet:hover:text-3xl tel:hover:text-lg hover:text-[#C32AA3] duration-150' />
                    <icons.FaFacebook className='tablet:hover:text-3xl tel:hover:text-lg  hover:text-[#3b5998] duration-150'/>
                    <icons.FaXTwitter className='tablet:hover:text-3xl tel:hover:text-lg  hover:text-[#00acee] duration-300'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-11/12 max-w-[1200px] flex flex-col justify-center items-center gap-2'>
              <div className='w-full text-start text-6xl text-white font-mono'>
                About
              </div>
              <div className='w-full flex tablet:flex-row tel:flex-col gap-2'>
                <hr className='w-32 h-1 bg-green border-0' />
                <span className='tablet:w-4/5 tel:w-full text-justify text-gray-500 font-mono '>
                  I am a 4th-year student in <span className='text-green'>cybersecurity engineering</span>, passionate about protecting information systems. My skills include security auditing, penetration testing, and network security. <span className='text-green'>Additionally, I am a software, mobile, and web application developer</span>. I am currently working towards completing my cybersecurity engineering degree.
                </span>
              </div>
            </div>
            <div className='w-11/12 max-w-[1200px] flex flex-col justify-center items-center gap-4'>
              <span className='text-5xl font-mono text-white font-bold'>My Skills</span>
              <div className='w-full flex tel:flex-col gap-y-4 tablet:flex-row justify-between items-center'>
                <div className='tablet:w-1/2 tel:w-full flex flex-col justify-center items-center gap-4'>
                  <span className='text-3xl text-white font-mono'>Cybersecurity</span>
                  <div className='w-full flex flex-wrap justify-center items-center gap-10'>
                    {
                      cybersecurityElements.map((element, index) => (
                        <div key={index} className='tablet:w-32 tablet:h-32 tel:w-20 tel:h-20 bg-[#303030] rounded-lg flex flex-col justify-center items-center tel:gap-2 tablet:gap-4'>
                          <img src={element.img} alt="Nodejs compétence" className='tablet:w-12 tel:w-10'/>
                          <span className='font-mono tablet:text-lg tel:text-xs font-bold text-green text-center'>{element.title}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className='tablet:w-1/2 tel:w-full flex flex-col justify-center items-center gap-4'>
                  <span className='text-3xl text-white font-mono'>Cybersecurity</span>
                  <div className='w-full flex flex-wrap justify-center items-center gap-10'>
                    {
                      developerElements.map((element, index) => (
                        <div key={index} className='tablet:w-32 tablet:h-32 tel:w-20 tel:h-20 bg-[#303030] rounded-lg flex flex-col justify-center items-center tel:gap-2 tablet:gap-4'>
                          <img src={element.img} alt="Nodejs compétence" className='tablet:w-12 tel:w-10'/>
                          <span className='font-mono tablet:text-lg tel:text-xs font-bold text-green text-center'>{element.title}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='w-11/12 max-w-[1200px] flex flex-col justify-center items-center gap-4'>
              <span className='text-5xl font-mono text-white font-bold'>Certificates</span>
              <div className="w-full flex gap-4 justify-between flex-wrap">
                {
                  elements.map((element, index) => <Component key={index} title={element.title} description={element.description} image={element.image}/>)
                }
              </div>
            </div> 
            <div className="relative w-full bg-[#303030] flex justify-center items-start">
              <div className="w-11/12 max-w-[1200px] flex flex-col justify-center items-center gap-4">
                <span className="text-5xl font-mono text-white  w-full font-bold text-start relative -top-8">Experiences</span>
                <div className="w-11/12 relative flex flex-col gap-4">
                  {
                    Experiences.map((experience, index) => (
                      <div className="w-full flex flex-col justify-center items-start gap-2">
                        <div className="w-full flex justify-start items-center gap-4">
                          <div className="w-[70px] h-[50px] bg-gray-500 relative flex justify-center items-center text-white font-mono text-xl">
                              {experience.year}
                            <div className="left-full top-0  w-20 h-0 border-t-[25px] border-t-transparent border-l-gray-500 border-l-[20px] border-b-[25px] border-b-transparent absolute ">
                            </div>
                          </div>
                          <span className="relative flex h-6 w-6 left-[20px]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-6 w-6 bg-green" ></span>
                          </span>
                          <div className="relative left-[20px] tablet:text-3xl tel:text-xl text-white font-mono ">
                            {experience.title}
                          </div>
                        </div>
                        <div className="relative tablet:ml-[115px] h-auto flex justify-start items-center tel:gap-2 tablet:gap-4">
                          <hr className="tablet:h-40 tel:h-52 w-2 rounded-full bg-green"/>
                          <div className="flex flex-col justify-start items-start ml-4">
                            <span className="tablet:text-xl tel:text-base font-mono text-white">{experience.subtitle}</span>
                            <span className="text-gray-500 font-mono tablet:text-sm tel:text-xs text-justify ">
                              {experience.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
