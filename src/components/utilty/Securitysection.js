import React from 'react'
import Diagram from './securityimage.png'
import './css.css'
const Securitysection = () => {
    return (
        <div className='shadow-inner shadow-gray-900 border-4 border-gray-900 rounded-[50px]  flex bg-gray-800 flex-row mx-auto w-[950px] h-[430px]  mt-[80px]  mb-8 '>
            <div className="image  w-[380px] ">
                <img src={Diagram} alt='image here ' className='mt-24 ml-16 h-[250px]' ></img>
            </div>
            <div className="w-[450px]">
                <div className="flex flex-col space-y-1 mt-24">
                    <span className="text-3xl text-blue-400 font-bold ml-16 "> We are a high-level </span>
                    <span className="text-3xl text-blue-400 font-bold ml-16 "> Data storage bank </span>
                </div>
                <div className="flex flex-col text-white  ml-16 mt-8 ">
                    <span>The place to store various data that you can access at any time through the internet and where you cna carry it.</span>
                    <span>This very flexible storage area has a high level of security . To enter into your own data you must enter the password that you created when you regeister in this data Warehouse.</span>
                </div>

            </div>
        </div>
    )
}

export default Securitysection