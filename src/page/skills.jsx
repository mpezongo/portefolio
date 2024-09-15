import React from 'react'
import img from '../constants/img'
import SkillsComponent from '../components/skillsComponent'

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
export default function Skills() {
  return (
    <div className='w-full flex tablet:flex-row tel:flex-col justify-center items-center gap-4'>
        <div className='tablet:w-1/2 tel:w-full h-full bg-white/5 backdrop-blur-lg p-4'>
            <div className='text-center font-handjet text-3xl text-white text-shadow-outline'>
                Cybersecurity
            </div>
            <div className='w-full flex-wrap justify-center items-center flex gap-4'>
                {
                    cybersecurityElements.map((element, index) => <SkillsComponent img={element.img} title={element.title} key={index} />)
                }
            </div>
        </div>
        <div className='tablet:w-1/2 tel:w-full h-full bg-white/5 backdrop-blur-lg p-4'>
            <div className='text-center font-handjet text-3xl text-white text-shadow-outline'>
                Developper
            </div>
            <div className='w-full flex-wrap justify-center items-center flex gap-4'>
                {
                    developerElements.map((element, index) => <SkillsComponent img={element.img} title={element.title} />)
                }
            </div>
        </div>
    </div>
  )
}
