import React, { useEffect, useState } from 'react'
import truckImg from "../assets/truck.png"

const Home = ({toggleMenu,percentage,pressure,temp,topMeanLoad,bottomMeanLoad,speed,topTKPH,bottomTKPH}) => {

    const radius = 40
    const circleWidth = 100
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage)/100

    const leftItem = [
        {
            id: 1,
            name: "Front Left",
            ml: topMeanLoad,
            tkph: topTKPH
        },
        {
            id: 2,
            name: "Middle Left",
            ml: bottomMeanLoad,
            tkph: bottomTKPH
        },
        {
            id: 3,
            name: "Rear Left",
            ml: bottomMeanLoad,
            tkph: bottomTKPH
        },
    ]
    const rightItem = [
        {
            id: 1,
            name: "Front Right",
            ml: topMeanLoad,
            tkph: topTKPH
        },
        {
            id: 2,
            name: "Middle Right",
            ml: bottomMeanLoad,
            tkph: bottomTKPH
        },
        {
            id: 3,
            name: "Rear Right",
            ml: bottomMeanLoad,
            tkph: bottomTKPH
        },
    ]

  return (
    <section className='flex justify-evenly px-5 md:px-32'>
        {!toggleMenu && 
        <div>
            {
                leftItem.map((element) => (
                    <div key={element.id}>    
                        <div className='bg-white size-[105px] md:size-40 rounded-full flex justify-center items-center relative'>
                            <svg className='md:w-[100px] w-[70px] h-[70px] md:h-[100px]' viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                                <circle cx={circleWidth/2} cy={circleWidth/2} strokeWidth="15px" r={radius} className='fill-none stroke-[#ddd]' >

                                </circle>
                                <circle style={{strokeDasharray: dashArray, strokeDashoffset: dashOffset}} cx={circleWidth/2} cy={circleWidth/2} strokeWidth="15px" r={radius}  className='fill-none stroke-orange-400'>

                                </circle>
                            </svg>
                            <div className='absolute leading-3 flex flex-col justify-center items-center'>
                                <h1 className='md:text-xl font-bold'>{pressure}</h1>
                                <p className='text-sm md:text-base'>psi</p>
                            </div>
                            <h1 className='absolute md:bottom-1 bottom-0 md:text-lg font-semibold'>{temp}°C</h1>
                        </div>
                        <h1 className='text-[#FFD272] pt-2 text-center text-lg md:text-xl'>{element.name}</h1>
                        <p className='text-[#FFD272] text-sm md:text-base md:pt-2 text-center'>Load : {element.ml} T</p>
                        <p className='text-[#FFD272] text-center pb-10 text-xs md:text-sm md:pb-20'>TKPH : {element.tkph}</p>
                    </div>
                ))
            }
        </div>}
        <div>
            <img src={truckImg} className='md:h-[850px] h-[550px]' alt="truck" />
            <p className='text-[#FFD272] text-center text-sm md:text-2xl pt-1'>Avg Speed - {speed}</p>
            <p className='text-[#FFD272] text-center text-sm md:text-2xl pt-1'>Avg TKPH - {(topTKPH + bottomTKPH) /2}</p>
        </div>
        <div>
            {
                rightItem.map((element) =>(
                    <div key={element.id}>
                        <div className='bg-white size-[105px] md:size-40 rounded-full flex justify-center items-center relative'>
                            <svg className='md:w-[100px] w-[70px] h-[70px] md:h-[100px]' viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                                <circle cx={circleWidth/2} cy={circleWidth/2} strokeWidth="15px" r={radius} className='fill-none stroke-[#ddd]' >

                                </circle>
                                <circle style={{strokeDasharray: dashArray, strokeDashoffset: dashOffset}} cx={circleWidth/2} cy={circleWidth/2} strokeWidth="15px" r={radius}  className='fill-none stroke-orange-400'>

                                </circle>
                            </svg>
                            <div className='absolute leading-3 flex flex-col justify-center items-center'>
                                <h1 className='md:text-xl font-bold'>{pressure}</h1>
                                <p className='text-sm md:text-base'>psi</p>
                            </div>
                            <h1 className='absolute md:bottom-1 bottom-0 md:text-lg font-semibold'>{temp}°C</h1>
                        </div>
                        <h1 className='text-[#FFD272] pt-2 text-center text-lg md:text-xl'>{element.name}</h1>
                        <p className='text-[#FFD272] text-sm md:text-base md:pt-2 text-center'>Load : {element.ml} T</p>
                        <p className='text-[#FFD272] text-center pb-10 text-xs md:text-sm md:pb-20'>TKPH : {element.tkph}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Home