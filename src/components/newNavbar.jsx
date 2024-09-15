
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function NewNavbar() {
    const { hash } = useLocation();

    return (
        <div className='w-full h-24 fixed top-0 left-0 justify-center flex items-center animate-slidein opacity-0 z-50'>
            <div className='px-1 py-1 xl:flex justify-between items-center w-full max-w-[1200px] tel:hidden bg-secondary h-16 border-[1px] rounded-full border-white '>
                <a href='#skill' className={"w-[13%] font-urbanise text-white text-md h-full rounded-full flex justify-center items-center hover:bg-primary duration-500 " + (hash === "#skill" ? "bg-primary" : "")}>
                    Skills
                </a>
                <a href='#project' className={"w-[13%] font-urbanise text-white text-md h-full rounded-full flex justify-center items-center hover:bg-primary duration-500 " + (hash === "#project" ? "bg-primary" : "")}>
                    Projects
                </a>
                <a href='#certificate' className={"w-[13%] font-urbanise text-white text-md h-full rounded-full flex justify-center items-center hover:bg-primary duration-500 " + (hash === "#certificate" ? "bg-primary" : "")}>
                    Certificates
                </a>
                <a href='#home' className='hover:underline w-[22%] text-center font-urbanist text-white text-4xl font-bold h-full'>
                    MPEZONGO
                </a>
                <a href='#experience' className={"w-[13%] font-urbanise text-white text-md h-full rounded-full flex justify-center items-center hover:bg-primary duration-500 " + (hash === "#experience" ? "bg-primary" : "")}>
                    Experiences
                </a>
                <NavLink to="/components" className={"w-[13%] font-urbanise text-white text-md h-full rounded-full flex justify-center items-center hover:bg-primary duration-500 " + (hash === "#component" ? "bg-primary" : "")}>
                    Components
                </NavLink>
                <a href='#contact' className={"w-[13%] font-urbanise text-white text-md h-full rounded-full flex justify-center items-center hover:bg-primary duration-500 " + (hash === "#contact" ? "bg-primary" : "")}>
                    Contact
                </a>
            </div>
            <div className='p-1 xl:hidden tel:flex tel:flex-col justify-between items-center w-full max-w-[1200px]'>
                <div className='w-full text-center font-urbanist text-white text-4xl font-bold h-full'>
                    MPEZONGO
                </div>
                <div className='w-full flex bg-secondary h-10 border-[1px] rounded-full border-white justify-between p-1 gap-2 mt-5'>
                <a href='#skill' className={"w-1/6 font-urbanise text-white text-[10px] h-11/12 rounded-full flex justify-center items-center " + (hash === "#skill" ? "bg-primary" : "")}>
                    Skills
                </a>
                <a href='#project' className={"w-1/6 font-urbanise text-white text-[10px] h-11/12 rounded-full flex justify-center items-center " + (hash === "#project" ? "bg-primary" : "")}>
                    Projects
                </a>
                <a href='#certificate' className={"w-1/6 font-urbanise text-white text-[10px] h-11/12 rounded-full flex justify-center items-center " + (hash === "#certificate" ? "bg-primary" : "")}>
                    Certificates
                </a>
                <a href='#experience' className={"w-1/6 font-urbanise text-white text-[10px] h-11/12 rounded-full flex justify-center items-center " + (hash === "#experience" ? "bg-primary" : "")}>
                    Experiences
                </a>
                <a href='/component' className={"w-1/6 font-urbanise text-white text-[10px] h-11/12 rounded-full flex justify-center items-center " + (hash === "#component" ? "bg-primary" : "")}>
                    Components
                </a>
                <a href='#contact' className={"w-1/6 font-urbanise text-white text-[10px] h-11/12 rounded-full flex justify-center items-center " + (hash === "#contact" ? "bg-primary" : "")}>
                    Contact
                </a>
                </div>
            </div>
        </div>
    )
}
