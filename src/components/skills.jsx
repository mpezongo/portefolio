import React from 'react'
import icons from '../constants/icons'
import img from '../constants/img'

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

export default function Skills() {
  return (
    <div className='w-full bg-secondary-20 mt-20 flex justify-center items-center py-20' id='skill'>
      <div className='w-full max-w-[1200px] flex justify-start items-center relative flex-col gap-4'>
        <div className='w-44 h-10 bg-secondary font-urbanist text-white text-xl text-center flex items-center justify-center rounded-full border-1'>
            My Skills
        </div>
        <div className='text-3xl font-urbanist font-bold text-white max-w-[500px] text-center'>
            View my Skills in cybersecurity and software developer
        </div>
        <div className='flex justify-center items-center tel:gap-1 tablet:gap-4 w-full tel:px-2 tablet:px-0 '>
            <div className='relative w-1/2 h-32 bg-secondary rounded-xl p-4 flex flex-col justify-center items-center gap-4'>
                <div className='absolute tablet:w-16 tablet:h-8 tel:w-12 tel:h-6 tel:text-sm tablet:text-lg bg-secondary-20 top-2 right-2 rounded-md border-1 flex justify-center items-center text-white font-urbanist  '>
                    75%
                </div>
                <div className='relative flex justify-center items-center w-full max-w-[400px] tablet:gap-10 tel:gap-2'>
                    <div className='relative w-auuto h-auto flex '>
                        <icons.TbWorld className='text-secondary-40 tablet:text-6xl tel:text-3xl ' />
                        <icons.GrShieldSecurity className='text-white tablet:text-5xl tel:text-2xl absolute tablet:left-8 top-2 tel:left-3'/>
                    </div>
                    <span className='relative text-white font-urbanist tablet:text-3xl tel:text-xl'>CyberSecurity</span>
                </div>
                <div className='w-11/12 h-2 border-1 rounded-full'>
                    <div className='w-[75%] h-full bg-primary rounded-full'>

                    </div>
                </div>
            </div>
            <div className='relative w-1/2 h-32 bg-secondary rounded-xl p-4 flex flex-col justify-center items-center gap-4'>
                <div className='absolute tablet:w-16 tablet:h-8 tel:w-12 tel:h-6 tel:text-sm tablet:text-lg bg-secondary-20 top-2 right-2 rounded-md border-1 flex justify-center items-center text-white font-urbanist  '>
                    70%
                </div>
                <div className='relative flex justify-center items-center w-full max-w-[400px] tablet:gap-10 tel:gap-2'>
                    <div className='relative w-auuto h-auto flex '>
                        <icons.TbWorld className='text-secondary-40 tablet:text-6xl tel:text-3xl ' />
                        <icons.TbSettingsCode className='text-white tablet:text-5xl tel:text-2xl absolute tablet:left-8 top-2 tel:left-3'/>
                    </div>
                    <span className='relative text-white font-urbanist tablet:text-3xl tel:text-xl'>Developper</span>
                </div>
                <div className='w-11/12 h-2 border-1 rounded-full'>
                    <div className='w-[70%] h-full bg-primary rounded-full'>

                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center tablet:gap-4 tel:gap-1 w-full px-2'>
            <div className='relative w-1/2 bg-secondary rounded-xl p-4 flex flex-col justify-center items-center gap-4'>
                <div className='w-full flex flex-wrap tablet:justify-center tel:justify-between items-center gap-1'>
                    {
                        cybersecurityElements.map((element, index) => (
                        <div key={index} className='tablet:w-32 tablet:h-32 tel:w-10 tel:h-20 bg-[#303030] rounded-lg flex flex-col justify-center items-center tel:gap-2 tablet:gap-4'>
                            <img src={element.img} alt="Nodejs compétence" className='tablet:w-12 tel:w-10'/>
                            <span className='font-mono tablet:text-lg tel:text-[8px] font-bold text-green text-center'>{element.title}</span>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className='relative w-1/2 bg-secondary rounded-xl p-4 flex flex-col justify-center items-center gap-4'>
                <div className='w-full flex flex-wrap tablet:justify-center tel:justify-between items-center gap-1'>
                    {
                        developerElements.map((element, index) => (
                        <div key={index} className='tablet:w-32 tablet:h-32 tel:w-10 tel:h-20 bg-[#303030] rounded-lg flex flex-col justify-center items-center tel:gap-2 tablet:gap-4'>
                            <img src={element.img} alt="Nodejs compétence" className='tablet:w-12 tel:w-10'/>
                            <span className='font-mono tablet:text-lg tel:text-[8px] font-bold text-green text-center'>{element.title}</span>
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
