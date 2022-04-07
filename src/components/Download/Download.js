import React from 'react'
import './css.css'
import mobile from './mobile.png'
const Download = () => {
    return (
        <div className='shadow-inner shadow-gray-900 border-8 md:border-4 border-gray-900  flex flex-col-reverse bg-gray-800 md:flex-row mx-auto w-screen md:w-[950px] h-auto md:h-[430px]  mt-[80px]  mb-8 rounded-3xl static '>
            <div className="text w-screen md:w-[500px] flex flex-col md:flex-col px-8">
                <span className="md:text-3xl md:font-bold md:text-blue-400 md:ml-16 md:mt-16 invisible md:visible"> Download Our App </span>
                <span className="  text-xs md:text-sm  md:ml-16  md:mt-16  text-white ">The place to store various data that you can access at any time through the internet where you can carry it. </span>
                <span className=" text-xs md:text-sm  md:ml-16 mt-2 text-white ">This is very flexible storage area has high level of secuirity . To enter into an you own data you must enter that password that you created when you regiested in this Data Warehouse.</span>
                <div className=" md:h-12 md:shadow-lg  md:shadow-black md:mb-4 md:justify-center  md:flex   md:items-center  md:rounded-full md:mt-12  md:w-[200px] md:ml-16 md:hover:border-blue-900 md:hover:border-2 invisible md:visible">
                    <div className="item-1 text-sm font-bold text-white">Download </div>

                </div>
            </div>
            <div className="image md:w-[450px]  md:h-[550px] flex flex-row ">
                <img src={mobile} alt='mobile image here' className=' md:h-[650px] md:w-[650px] md:absolute md:right-16 
                md:top-[1950px] h-[230px] mt-4 md:mt-0'></img>
                <div className='flex flex-col itmes-center  md:hidden '>
                    <span className="text-2xl font-bold text-blue-400  mt-16"> Download Our App </span>
                    <div className="hover:animate-bounce cursor-pointer  h-10 shadow-lg  shadow-black  justify-center  flex   items-center  rounded-full  w-[100px] md:w-[200px] mt-6 hover:border-green-900 hover:border-2 border-blue-900 border-2">
                        <div className="item-1 text-sm font-bold text-white">Download </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download
