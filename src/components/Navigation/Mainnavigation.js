import React from 'react'
import Logo from './logo.png'
import './Mainnavigation'
const Mainnavigation = () => {
    return (
        <div className='w-[1200px] h-[45px] flex  items-center mx-auto text-white'>

            <div className="itme-1 flex items-center space-x-1">
                <div className="item-1 ml-2">
                    <img src={Logo} className='w-[35px] h-[35px]' alt="logo here"></img></div>
                <div className="item-2 text-lg font-semibold">Insignia</div>

            </div>
            <div className="item-2 flex space-x-8 ml-[650px] ">

                <div className="item-1">
                    <span className=" text-sm text-blue-400 cursor-pointer">About</span>
                </div>
                <div className="item-2">
                    <span className="text-white text-sm cursor-pointer">Help</span>
                </div>
                <div className="item-3">
                    <span className="text-white text-sm cursor-pointer">Feature</span>
                </div>
                <div className="item-4">
                    <span className="text-white text-sm cursor-pointer">Signup</span>
                </div>
            </div>
            <div className="custom h-12 shadow-md  cursor-pointer shadow-black border border-gray-900 justify-center space-x-2 flex hover:space-x-4 ml-8 items-center  rounded-full px-3">
                <div className="item-1 text-sm text-blue-400">Request Demo</div>
                <div className="item-2 text-blue-800 text-2xl hover:font-extrabold ">&rarr;</div>
            </div>
        </div>
    );
}

export default Mainnavigation;