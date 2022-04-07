import React from 'react'
import Diagram from './securityimage.png'
import './css.css'
const Securitysection = () => {
    return (
        <div className='shadow-inner shadow-gray-900 md:border-4 border-8 border-gray-900 rounded-[50px]  flex bg-gray-800 flex-col md:flex-row mx-auto w-screen md:w-[950px] h-auto md:h-[430px]  md: mt-[80px]  mb-8 py-8 '>
            <div className="  md:w-[380px] w-auto">
                <img src={Diagram} alt='image here ' className='mt-8 md:mt-24 mx-auto  h-[165px] md:h-[250px]' ></img>
            </div>
            <div className="md:w-[450px]">
                <div className="flex flex-col space-y-1 md:mt-24 mt-6">
                    <span className="text-xl md:text-3xl text-blue-400 font-bold ml-6 md:ml-16 "> We are a high-level </span>
                    <span className="text-xl md:text-3xl text-blue-400 font-bold ml-6 md:ml-16 "> Data storage bank </span>
                </div>
                <div className="flex flex-col text-xs md:text-base text-white  px-2 md:ml-16 mt-6 w-screen md:w-auto">
                    <span className="mx-4 md:mx-0">The place to store various data that you can access at any time through the internet and where you cna carry it.</span>
                    <span className="mx-4 md:mx-0">This very flexible storage area has a high level of security . To enter into your own data you must enter the password that you created when you regeister in this data Warehouse.</span>
                </div>

            </div>
        </div>
    )
}

export default Securitysection