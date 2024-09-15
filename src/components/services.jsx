import React from 'react'
import icons from '../constants/icons'

export default function Services() {
  return (
    <div className='w-full flex justify-center items-center py-20' id='service'>
        <div className='w-full max-w-[1200px] flex justify-start items-center relative flex-col gap-4'>
            <div className='w-44 h-10 bg-secondary font-urbanist text-white text-xl text-center flex items-center justify-center rounded-full border-1'>
                My Services
            </div>
            <div className='text-3xl font-urbanist font-bold text-white max-w-[500px] text-center'>
                What Can I do ?
            </div>
            <div className='w-full flex tel:flex-wrap px-2 gap-y-8 mt-4 gap-x-1 justify-between items-center'>
                <div className=' relative xl:w-1/5 tel:w-[49%]  xl:p-5 tel:p-0 rounded-xl bg-secondary-20 flex flex-col justify-center items-center xl:gap-4 h-[250px] xl:pt-10'>
                    <div className='w-10 h-10 rounded-md bg-third rotate-45 absolute -top-5 drop-shadow-2xl border-1 border-secondary-20 text-white text-xl flex justify-center items-center'>
                        <icons.SiCyberdefenders className='-rotate-45' />
                    </div>
                    <span className='text-white font-urbanist text-xl'>Cybersecurity</span>
                    <div className='w-16 h-[3px] rounded-full flex justify-between gap-1'>
                        <div className='w-2/3 h-full bg-primary rounded-full'>

                        </div>
                        <div className='w-1/3 h-full bg-primary rounded-full'>

                        </div>
                    </div>
                    <div className='w-full text-center text-white font-jost text-sm'>
                        Cybersecurity engineer ensuring data protection, threat prevention, and secure operations for businesses.
                    </div>
                </div>
                <div className=' relative xl:w-1/5 tel:w-[49%] xl:p-5 tel:p-1 rounded-xl bg-secondary-20 flex flex-col justify-center items-center gap-4 h-[250px] pt-10' >
                    <div className='w-10 h-10 rounded-md bg-third rotate-45 absolute -top-5 drop-shadow-2xl border-1 border-secondary-20 text-white text-xl flex justify-center items-center'>
                        <icons.BsCodeSquare className='-rotate-45' />
                    </div>
                    <span className='text-white font-urbanist text-xl'>Front-end</span>
                    <div className='w-16 h-[3px] rounded-full flex justify-between gap-1'>
                        <div className='w-2/3 h-full bg-primary rounded-full'>

                        </div>
                        <div className='w-1/3 h-full bg-primary rounded-full'>

                        </div>
                    </div>
                    <div className='w-full text-center text-white font-jost text-sm'>
                        Front-end developer crafting intuitive, responsive, and visually appealing user interfaces to enhance user experience and engagement.
                    </div>
                </div>
                <div className=' relative xl:w-1/5 xl:p-5 tel:w-[49%] rounded-xl bg-secondary-20 flex flex-col justify-center items-center gap-4 h-[250px] pt-10' >
                    <div className='w-10 h-10 rounded-md bg-third rotate-45 absolute -top-5 drop-shadow-2xl border-1 border-secondary-20 text-white text-xl flex justify-center items-center'>
                        <icons.BsDatabaseFillGear className='-rotate-45' />
                    </div>
                    <span className='text-white font-urbanist text-xl'>Back-end</span>
                    <div className='w-16 h-[3px] rounded-full flex justify-between gap-1'>
                        <div className='w-2/3 h-full bg-primary rounded-full'>

                        </div>
                        <div className='w-1/3 h-full bg-primary rounded-full'>

                        </div>
                    </div>
                    <div className='w-full text-center text-white font-jost text-sm'>
                    Back-end developer building robust, scalable server-side solutions and APIs to support seamless data management and application functionality.
                    </div>
                </div>
                <div className=' relative xl:w-1/5 tel:w-[49%] xl:p-5 rounded-xl bg-secondary-20 flex flex-col justify-center items-center gap-4 h-[250px] pt-10' >
                    <div className='w-10 h-10 rounded-md bg-third rotate-45 absolute -top-5 drop-shadow-2xl border-1 border-secondary-20 text-white text-xl flex justify-center items-center'>
                        <div className='text-sm text-white flex flex-wrap w-full h-full -rotate-45 justify-center items-center '>
                            <icons.TbBrandDocker/>
                            <icons.AiOutlineKubernetes />
                            <icons.HiOutlineServerStack  />
                        </div>
                    </div>
                    <span className='text-white font-urbanist text-xl'>Operations</span>
                    <div className='w-16 h-[3px] rounded-full flex justify-between gap-1'>
                        <div className='w-2/3 h-full bg-primary rounded-full'>

                        </div>
                        <div className='w-1/3 h-full bg-primary rounded-full'>

                        </div>
                    </div>
                    <div className='w-full text-center text-white font-jost text-sm'>
                        Ops engineer ensuring reliable infrastructure management, automation, and performance optimization for seamless application delivery and operations.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
