import React from 'react'

export default function SkillsComponent({img, title, key}) {
  return (
    <div key={key} className='rounded-xl w-[100px] h-[100px] bg-white/5  flex flex-col justify-center items-center'>
        <img src={img} alt="" className='max-w-[60px]' />
        <span className='text-white font-firacode font-bold text-shadow-outline text-center text-sm overflow-hidden'>
            {title}
        </span>
    </div>
  )
}
