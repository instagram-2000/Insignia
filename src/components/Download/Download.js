import React from 'react'
import './css.css'
import mobile from './mobile.png'
const Download = () => {
    return (
        <div className='shadow-inner shadow-gray-900 border-4 border-gray-900 rounded-[50px]  flex bg-gray-800 flex-row mx-auto w-[950px] h-[430px]  mt-[80px]  mb-8 rounded-3xl static '>
            <div className="text w-[500px] flex flex-col ">
                <span className="text-3xl font-bold text-blue-400 ml-16 mt-16">Download Our App </span>
                <span className="text-sm ml-16 mt-16  text-white">The place to store various data that you can access at any time through the internet where you can carry it. </span>
                <span className="text-sm  ml-16 mt-2 text-white">This is very flexible storage area has high level of secuirity . To enter into an you own data you must enter that password that you created when you regiested in this Data Warehouse.</span>
                <div className="custom h-12 shadow-lg  shadow-black  justify-center  flex   items-center  rounded-full mt-12 w-[200px] ml-16 hover:border-blue-900 hover:border-2">
                    <div className="item-1 text-sm font-bold text-white">Download </div>

                </div>
            </div>
            <div className="image w-[450px]  h-[550px] ">
                <img src={mobile} alt='mobile image here' className=' h-[650px] w-[650px] absolute right-16 
                top-[1950px] '></img>
            </div>
        </div>
    )
}

export default Download