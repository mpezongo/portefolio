import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../constants/img'
import icons from '../constants/icons'

// import "./navbar.css"

export default function Navbar() {
  const [toogleMenu, setToogleMenu] = useState(false)
  const [displaySearch, setDisplaySearch] = useState(false)

  const handleDisplaySearch = () => {
    setDisplaySearch(!displaySearch)
  }

  const handleToogleMenu = () => {
    setToogleMenu(!toogleMenu)
  }
  return (
    
    <div className='h-24 w-full fixed top-0 left-0 justify-center flex items-center bg-[#191919] z-10 shadow shadow-black'>
      <div className='tablet:flex justify-between items-center w-full max-w-[1200px] h-full tel:hidden'>
        <div className='w-1/5 flex justify-start items-center'>
          <img src={img.nodejs} alt="Logo de PEZONGO Mickael" className='w-12' />
        </div>
        <div className='w-3/5 h-full flex justify-center gap-5 items-center text-gray-500 text-xl'>
          <NavLink to="/" className="w-32 h-12 font-mono flex justify-center items-center ">
            About
          </NavLink>
          <NavLink to="/" className="w-32 h-12 font-mono flex justify-center items-center ">
            Skills
          </NavLink>
          <NavLink to="/" className="w-32 h-12 font-mono flex justify-center items-center ">
            Certficates
          </NavLink>
          <NavLink to="/" className="w-32 h-12 font-mono flex justify-center items-center ">
            Contact
          </NavLink>
        </div>
        <div className='w-1/5'>
          <div className="relative">
            <input
              placeholder="Search..."
              className="text-gray-500 bg-transparent border-gray-500 input border-2 focus:border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
              name="search"
              type="search"
            />
            <svg
              className="size-6 absolute top-3 right-5 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className='w-full px-6 justify-center items-center flex h-24 tablet:hidden'>
        <div className='w-1/5 justify-center flex-col gap-2 flex h-full items-center' onClick={handleToogleMenu}>  
            <div className={"h-1 bg-white rounded-full duration-[0.3s] " + (toogleMenu ? "rotate-[35deg] w-1/5 translate-x-[17px] translate-y-[8.5px]" : "w-3/5")}></div>
            <div className="h-1 bg-white rounded-full w-3/5"></div>
            <div className={"h-1 bg-white rounded-full duration-[0.3s] " + (toogleMenu ? "rotate-[-35deg] w-1/5 translate-x-[17px] translate-y-[-8.5px]" : "w-3/5")}></div>
        </div>
        <div className='w-3/5 flex justify-center items-center h-full'>
          <img src={img.nodejs} alt="Logo PEZONGO Mickael" className='w-12' />
        </div>
        <div className={'h-12 flex justify-center items-center rounded-full px-2 bg-[#191919] duration-1000 ' + (displaySearch ? "w-11/12 border-2 border-gray-500 absolute":"w-1/5")}>
          <input type="search" className={ "duration-1000 flex h-full bg-transparent outline-none text-gray-500 placeholder:text-gray-500 font-mono " + (displaySearch ? "block w-11/12" : "w-0" )} placeholder='Search'/>
          <icons.IoIosSearch className='text-3xl text-gray-500' onClick={handleDisplaySearch}/>
        </div>
      </div>
    </div>
  )
}
