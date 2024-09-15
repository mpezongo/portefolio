import React from 'react'
import img from '../constants/img'
import { GlareCard } from "../components/glare-card"; 

export default function About() {
  return (
    <div className='w-full flex justify-center items-center relative'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex tablet:flex-row tel:flex-col justify-between items-center w-full p-1'>
                <div className='flex flex-col justify-center tablet:items-start tel:items-center h-full tablet:w-1/2 tel:w-full tablet:text-start tel:text-center'>
                    <span className='font-handjet text-2xl text-white text-center text-shadow-outline'>
                        Hello, I'm Mickael PEZONGO
                    </span>
                    <span className='text-8xl font-handjet font-bold text-green'>
                        Cyber security student
                    </span>
                    <span className=' font-handjet text-xl text-white text-shadow-outline'>
                    Étudiant en 4e année en ingénierie de
                    cybersécurité, passionné par la
                    protection des systèmes d'information.
                    Compétences en audit de sécurité,
                    tests d'intrusion, et sécurité des
                    réseaux. Développeur logiciel,
                    application mobile et web. Je travaille
                    actuellement sur mon diplôme
                    d'ingénieur en cybersécurité.
                    </span>
                </div>
                <div className='tablet:w-1/2 tel:w-full flex justify-center items-center'>
                    <div className='tablet:w-1/2 tel-full'>
                        <GlareCard children={img.pm}/>                                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
