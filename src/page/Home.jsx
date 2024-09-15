import React, { useState } from 'react'
import About from './about';
import Skills from './skills';
import Certificates from './certificates';

export default function Home() {
    const [inputValue, setInputValue] = useState("")
    const [hoverButton, setHoverButton] = useState("about-me")
    const [showInfo, setShowInfo] = useState("false")
    const [showOptions, setShowOptions] = useState()
    
    const handleChangeInputValue = (event) => {
        setInputValue(event.target.value)
    }
    const audio = new Audio('/songs/clavier.wav');

    const handleKeyDown = (event) => {
        audio.play()
        if (event.key === 'Enter') {
          // Empêcher le comportement par défaut de l'entrée
          event.preventDefault();
          // Appelez ici la fonction de validation ou effectuez une action
          validateInput();
        }
    };
    
    const validateInput = () => {
        const words = inputValue.split(' ')
        if (words[0] === "ls"){
            if (words[1] && words[1] !== "."){
                return setShowInfo("invalid command")
            }else{
                return setShowInfo("true")
            }
        }else if(words[0] === "cd"){
            if (words[1].toUpperCase() === "ABOUT-ME"){
                setShowOptions("about-me")
                setHoverButton("about-me")
            }else if (words[1].toUpperCase() === "HOME"){
                setShowOptions("home")
            }else if (words[1].toUpperCase() === "CERTIFICATES"){
                setShowOptions("certificates")
                setHoverButton("certificates")
            }else if (words[1].toUpperCase() === "SKILLS"){
                setShowOptions("skills")
                setHoverButton('skills')
            }else if (words[1].toUpperCase() === "CONTACT"){
                setShowOptions("contact")
            }
        }else{
            return setShowInfo("invalid command")
        }
        // if (inputValue === 'ls'){
        //     return setShowInfo("true")
        // }else if (showInfo !== "true"){
        //     return setShowInfo("invalid command")
        // }else if (inputValue === "cd ")
    };
    return (
        <div className='overflow-auto relative h-screen w-screen bg-home-img bg-black bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
        {/* <div className='h-scree w-scree min-h-screen min-w-screen flex justify-center items-center bg-roug'> */}
            <div className={"flex flex-col w-full h-auto justify-center items-center z-10 " + (showOptions ? "top-0 fixed" : "")}>
                <div className={'flex-col justify-center items-start flex z-10 tablet:w-4/5 tel:w-full p-1'}>
                    {/* //  + (showOptions ? "w-4/5 top-0 fixed" : "w-full")}> */}

                    <div className={' flex flex-col font-handjet text-white ' + (showOptions ? "hidden" : "")}>
                        <span className='text-2xl bg-black w-auto'>
                            Welcome, here the ways that I choose to let you pwned me.
                        </span>
                        <span className='bg-black'>
                            Let start by listing my information, Please enter the command to list it
                        </span>
                    </div>
                    <div className='z-99 mt-4 bg-black border-b-2 h-16 rounded-md w-full text-white tablet:px-10 tel:px-2 flex justify-start items-center gap-2'>
                        <span className='w-auto text-red-500 font-handjet text-xl'>mick<span className='text-white'>@</span>portefolio:~$</span>
                        <input
                            onChange={handleChangeInputValue}
                            onKeyDown={handleKeyDown} 
                            value={inputValue} 
                            type="text" 
                            className=' font-firacode bg-transparent outline-none w-4/5 text-white' />
                    </div>
                    {
                        showInfo === "true" && !showOptions ?
                        <div className='w-auto flex flex-col font-handjet mt-4'>
                            <span className='text-sm bg-black w-auto text-rouge'>
                                Now that you have access to the folder, navigate into and see information related to
                            </span>
                        </div>
                        :showInfo === "invalid command" &&
                        <div className='w-auto flex flex-col font-handjet mt-4'>
                            <span className='text-sm bg-black w-auto text-rouge'>
                                Command invalid
                            </span>
                        </div>
                    }

                </div>
            </div>
            {
                showOptions &&
            <div className=' h-auto flex justify-center items-center w-4/5 tel:w-full tel:py-24 tablet:w-4/5 absolute top-10'>
                {
                    showOptions === "about-me" &&
                    <About />
                }
                {
                    showOptions === "skills" &&
                    <Skills />
                }
                {
                    showOptions === "certificates" &&
                    <Certificates />
                }
            </div>
            }
            <div className="flex justify-center items-center mt-28 fixed bottom-10 left-0 w-full text-xs">
                <div className={"gap-2 duration-1000 origin-center scale-x-100 h-14 flex justify-between items-center bg-green/10 backdrop-blur-sm-1 rounded-lg text-green font-bold font-handjet text-xl " + (showInfo === "true" || showOptions ? "w-120 p-1":'w-0 overflow-hidden p-0')}>
                    <button
                        className={"w-1/5 tel:text-xs tablet:text-xl backdrop-blur- rounded-lg duration-500 " + (hoverButton === "skills" ? "bg-green text-white h-16": "bg-white/10 h-full")}
                        onMouseEnter={() => setHoverButton("skills")}
                    >Skills</button>
                    <button
                        className={"w-1/5 backdrop-blur- rounded-lg tel:text-xs tablet:text-xl duration-500 " + (hoverButton === "certificates" ? "bg-green text-white h-16": "bg-white/10 h-full")}
                        onMouseEnter={() => setHoverButton("certificates")}
                    >Certificates</button>
                    <button
                        className={"w-1/5 backdrop-blur- rounded-lg tel:text-xs tablet:text-xl duration-500 " + (hoverButton === "about-me" ? "bg-green text-white h-16": "bg-white/10 h-full")}
                        onMouseEnter={() => setHoverButton("about-me")}
                    >About-me</button>
                    <button
                        className={"w-1/5 backdrop-blur- rounded-lg tel:text-xs tablet:text-xl duration-500 " + (hoverButton === "ressources" ? "bg-green text-white h-16": "bg-white/10 h-full")}
                        onMouseEnter={() => setHoverButton("ressources")}
                    >Experiences</button>
                    <button
                        className={"w-1/5 backdrop-blur- rounded-lg tel:text-xs tablet:text-xl duration-500 " + (hoverButton === "contact" ? "bg-green text-white h-16": "bg-white/10 h-full")}
                        onMouseEnter={() => setHoverButton("contact")}
                    
                    >Contact</button>
                </div>
            </div>
        </div>
    )
}
