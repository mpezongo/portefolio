import React from 'react'
import { HoverEffect } from "../components/card-hover-effects";
import img from '../constants/img';

export const projects = [
  {
    title: "Lithyus Music",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://lithyusmusic.com",
    img:img.lithyuspage
  },
  {
    title: "Project SMSI",
    description:
      "Case study for obtaining ISO 27001 certification for the online ticket reservation service of Royal Air Maroc",
    link: "localhost:3000",
    img:img.smsi
  },
  {
    title: "WebSecPi",
    description:
      "This project involves creating a web interface to execute remote commands on a Raspberry Pi and use exploits via MSFConsole, with the goal of conducting remote penetration tests on specific targets.",
    link: "localhost:3000",
    img:img.websecpi
  },
  {
    title: "IAAS Provider",
    description:
      "Our project is based on the fundamental principle of virtualization. We will offer users a virtual environment where they can create, configure, and deploy virtual machines online according to their specific needs.",
    link: "localhost:3000",
    img:img.projectcloud
  },
  {
    title: "Ebbok Website",
    description:
      "Online bookstore for enthusiasts of novels, biographies, textbooks, and children's books.",
      link: "localhost:3000",
      img:img.ebook
  },
  {
    title: "CheckMK",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default function Projects() {
  return (
    <div className='w-full bg-secondary-20 mt-20 flex justify-center items-center py-20' id='project'>
      <div className='w-full max-w-[1200px] flex justify-start items-center relative flex-col gap-4'>
        <div className='w-44 h-10 bg-secondary font-urbanist text-white text-xl text-center flex items-center justify-center rounded-full border-1'>
            My Projects
        </div>
        <div className='text-3xl font-urbanist font-bold text-white max-w-[500px] text-center'>
            What I already Do ?
        </div>
        <div className="w-full mx-auto">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  )
}
