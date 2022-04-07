import React from 'react'
import './css.css'
import men from './mens.png'
import women from './women.png'
import dot from './dot.png'
import dotdark from './dotdark.png'
const Testimonials = () => {
    return (
        <div className='shadow-inner shadow-gray-900 border-8 md:border-4  border-gray-900 rounded-[50px]  pl-8 pt-8 flex bg-gray-800 flex-col mx-auto w-screen md:w-[950px] md:h-[460px]  mt-[80px]  mb-16 h-auto '>
            <div className="text mt-4 ml-16 ">
                <span className='font-bold text-3xl text-blue-300 '>Testimonials</span>
            </div>
            <div className="flex flex-col  md:flex-row  static">



                <div className=" shadow-2xl hover:shadow-red-900  shadow-black rounded-3xl bg-black md:w-[500px] md:h-[230px] mt-6 md:mt-12 md:ml-16 flex flex-row pt-8 mr-8" >
              
                    <div className="image ml-6 md:ml-16">
                        <img src={men} alt="Image here" className='h-112 w-28 '></img>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-blue-300 text-xl font-bold mx-8">John Fang</span>
                        <div className="flex flex-row items-center">
                            <span className="text-blue-500 text-xs font-bold mx-8 ">Web developer</span>
                            <div className="flex flex-row space-x-1 animate-pulse">
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dotdark} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                            </div>
                        </div>
                        <span className="text-white text-sm md:ml-8 md:mr-16 mb-4 md:mb-0 mr-4  mt-8">Suspendise ultrices at diam lectus nullam. nisl, sagitlis vieverra enim erat lartor ultrices massa turpis. Arcu Pulvinar aenean nam laoreet nulla.</span>

                    </div>
                </div>








                <div className="md:absolute md:right-0 shadow-2xl hover:shadow-red-900  shadow-black rounded-3xl bg-black md:w-[500px] md:h-[230px] mt-6 md:mt-12 md:ml-16 flex flex-row pt-8 mr-8 md:mr-0" >
                    
                    <div className="image  ml-6 md:ml-16">
                        <img src={women} alt="Image here" className='h-112 w-28 '></img>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-blue-300 text-xl font-bold mx-8">Jonney Doe</span>
                        <div className="flex flex-row items-center">
                            <span className="text-blue-500 text-xs font-bold mx-8 ">UX Designer</span>
                            <div className="flex flex-row space-x-1 animate-pulse">
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                                <img src={dot} alt="Image here" className='md:h-4 md:w-4 h-2 w-2 rounded-full'></img>
                            </div>
                        </div>
                        <span className="text-white text-sm md:ml-8 md:mr-16 mb-4 md:mb-0 mr-4  mt-8">Suspendise ultrices at diam lectus nullam. nisl, sagitlis vieverra enim erat lartor ultrices massa turpis. Arcu Pulvinar aenean nam laoreet nulla.</span>

                    </div>
                </div>

            </div>

            <div className="buttons flex flex-row md:mt-8 mt-4 md:mb-8 mb-4 items-center justify-between">
                <div className=" w-[500px] text-white ml-6 md:ml-12 ">
                    <span className='text-2xl font-extrabold '> . </span>
                    <span className='text-2xl font-bold'> . </span>
                    <span className='text-2xl font-bold'> . </span>
                    <span className='text-2xl font-bold'> . </span>
                    <span className='text-2xl font-bold'> . </span>
                </div>
                <div className=" w-[500px] text-white flex flex-row-reverse mr-12">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Testimonials