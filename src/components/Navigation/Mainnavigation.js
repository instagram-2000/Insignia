import React from 'react'
import Logo from './logo.png'
import './Mainnavigation'
const Mainnavigation = () => {
    return (
        <div className='md:w-[1200px] w-auto h-[45px] px-2 md:px-0 flex justify-between  items-center mx-auto text-white '>

            <div className="itme-1 flex items-center space-x-1">
                <div className="item-1 ml-2">
                    <img src={Logo} className='md:w-[35px] md:h-[35px] h-[30px] w-[30px] animate-spin' alt="logo here"></img></div>
                <div className="item-2 text-xl font-semibold ">Insignia</div>

            </div>
            <div className='flex items-center space-x-2 justify-center '>
                <div className="md:flex flex font-bold  justify-center left-0  items-center md:space-x-4  fixed md:static md:mr-8 md:w-auto w-screen bottom-2   md:bg-none h-auto bg-blue-500 md:bg-gray-900 rounded-full ">
                    <div className="w-1/5 flex flex-col  justify-center items-center py-2 md:py-0   md:border-none md:flex-none">
                        <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg></div>
                        <span className="  text-sm text-yellow-400 cursor-pointer md:text-blue-400">Home</span>
                    </div>
                    <div className="w-1/5 flex flex-col  justify-center items-center py-2 md:py-0   md:border-none md:flex-none">
                        <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></div>
                        <span className="  text-sm  cursor-pointer ">About</span>
                    </div>
                    <div className="w-1/5 flex flex-col  justify-center items-center py-2 md:py-0   md:border-none md:flex-none">
                        <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></div>
                        <span className=" text-white text-sm cursor-pointer ">Help</span>
                    </div>
                    <div className="w-1/5 flex flex-col  justify-center items-center py-2 md:py-0   md:border-none md:flex-none">
                        <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg></div>
                        <span className=" text-white text-sm cursor-pointer ">Feature</span>
                    </div>
                    <div className="w-1/5 flex flex-col  justify-center items-center py-2 md:py-0   md:border-none md:flex-none">
                        <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg></div>
                        <span className=" text-white text-sm cursor-pointer ">Signup</span>
                    </div>
                </div>
                <div className="custom md:h-12 h-10  shadow-md  cursor-pointer shadow-black border border-gray-900 justify-center space-x-2 flex hover:space-x-4  items-center  rounded-full px-3  ">
                    <div className="item-1 text-sm text-blue-400">Request Demo</div>
                    <div className="item-2 text-blue-800 text-2xl hover:font-extrabold ">&rarr;</div>
                </div>
            </div>
        </div>
    );
}

export default Mainnavigation;