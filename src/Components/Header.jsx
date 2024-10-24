import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import logoImg from "../assets/logo.png";
import { IoClose } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";


const Header = ({toggleMenu,settoggleMenu}) => {
    
    const sidenav = [
        {
            id: 1,
            name: "Temperature History"
        },
        {
            id: 2,
            name: "Load History"
        },
        {
            id: 3,
            name: "Speed History"
        },
        {
            id: 4,
            name: "Heat/Cut resistance balance History"
        },
        {
            id: 5,
            name: "Pressure History"
        },
        {
            id: 6,
            name: "Past alerts"
        },
        {
            id: 7,
            name: "Help"
        }
    ]
  return (
    <>
        <header className='flex bg-header items-center justify-between px-5 md:px-10'>
            <FaBars className='md:size-7 text-white cursor-pointer' onClick={() => settoggleMenu(!toggleMenu)}/>
            <div className='flex pl-7 md:pl-0 items-center'>
                <h1 className='text-xl font-bold text-white'>TPMS 4.0</h1>
                <img className='w-24 md:w-28' src={logoImg} alt="logo" />
            </div>
            <MdOutlineAccountCircle className='size-7 md:size-9 text-white cursor-pointer' />
        </header>
        {toggleMenu && <nav className='text-white fixed bottom-0 top-0 left-0 shadow-lg shadow-black  bg-header w-64 md:w-96 md:px-16 px-10 py-5'>
            <IoClose className='size-7 absolute right-6 cursor-pointer' onClick={() => settoggleMenu(!toggleMenu)}/>
            <ul className='list-disc pt-24'>
                {sidenav.map((element,index) => (
                        <li className='pb-6 cursor-pointer text-base font-semibold md:text-lg' key={index}>{element.name}</li>
                    ))}
            </ul>
        </nav>}
    </>
  )
}

export default Header