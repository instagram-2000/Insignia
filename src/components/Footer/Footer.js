import React from 'react'
import Logo from './logo.png'
import fb from './fb.png'
import insta from './insta.png'
import twitter from './twitter.png'
import msg from './msg.png'
const Footer = () => {
    return (
        <>
            <div className='flex flex-row w-[950px]  mx-auto h-[100px]'>
                <div className="flex flex-col w-[450px] ">
                    <div className="font-bold text-3xl text-blue-300 ">Subscribe !</div>
                    <div className="text mt-4 text-white text-sm">Join out news letter to never miss any latest news.</div>
                </div>
                <div className="buttons w-[500px] flex justify-center items-center ">
                    <div className="rounded-full w-[380px] bg-gray-800 h-[55px] flex justify-center items-center shadow-inner border-1 border-black shadow-black">
                        <input type="text" placeholder='enter Your email address here' className='bg-gray-800 ml-2' />
                        <span className=' w-20 h-8 shadow-lg hover:shadow-white hover:border hover:border-blue-900 cursor-pointer shadow-black bg-gray-900 text-white rounded-full ml-16 flex justify-center items-center'>Join us</span>
                    </div>
                </div>

            </div>
            <div className=' w-full h-1 shadow-inner shadow-gray-800 mt-8'></div>
            <div className='flex flex-row w-[950px]  mx-auto h-[100px] mt-8'>
                <div className="flex flex-col w-[450px] ">
                    <div className="font-bold text-3xl text-blue-300 ">Try For Free !</div>
                    <div className="text mt-4 text-white text-sm">Get limited 1 week free try out feature!</div>
                </div>
                <div className="buttons w-[500px] flex flex-row justify-center items-center ">
                    <div className="custom h-12 shadow-lg w-32 hover:border-blue-500  shadow-black border border-gray-900 justify-center space-x-2 flex hover:space-x-4 ml-8 items-center  rounded-full px-3">
                        <div className="item-1 text-sm text-white">Learn more</div>

                    </div>
                    <div className="custom h-12 shadow-lg hover:border-blue-500  shadow-black border border-gray-900 justify-center space-x-2 flex hover:space-x-4 ml-8 items-center  rounded-full px-3">
                        <div className="item-1 text-sm text-blue-400">Request Demo</div>
                        <div className="item-2 text-blue-800 text-2xl hover:font-extrabold ">&rarr;</div>
                    </div>


                </div>

            </div>


            <div className="w-[1000px] mx-auto h-[300px] flex flex-row">
                <div className="address w-[340px]  pt-16 pl-8">
                    <div className="itme-1 flex items-center space-x-1">
                        <div className="item-1 ">
                            <img src={Logo} className='w-[35px] h-[35px]' alt="logo here"></img></div>
                        <div className="item-2 text-lg font-semibold text-blue-300">Insignia</div>

                    </div>
                    <div className="flex flex-col mt-8">
                        <span className="text-xs text-blue-300">Insigna socity, 234</span>
                        <span className="text-xs text-blue-300">Bahegea Ave Street PRBW 29281</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <span className="text-xs text-blue-300">Info@insignia.com</span>
                        <span className="text-xs text-blue-300">1-232-3434(main)</span>
                    </div>

                </div>
                <div className="w-[180px]  pt-16">
                    <ul className='flex flex-col ml-16 text-blue-300 text-xs space-y-4'>
                        <li className='text-sm'>About</li>
                        <li>profile</li>
                        <li>Features</li>
                        <li>Careers</li>
                        <li>DW News </li>
                    </ul>

                </div>
                <div className="w-[180px] pt-16">
                    <ul className='flex flex-col ml-16 text-blue-300 text-xs space-y-4'>
                        <li className='text-sm'>Help</li>
                        <li>Support </li>
                        <li>Sign Up</li>
                        <li>Guide </li>
                        <li>Reports </li>
                        <li>Q&A </li>
                    </ul>

                </div>
                <div className="socialmedia w-[300px]  pt-16">
                    <span className="text-sm text-blue-300  ml-8"> Social media</span>
                    <div className="flex flex-row space-x-4 ml-8 mt-8">
                        <div className="hover:border hover:border-blue-900 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center  shadow-inner border-1 border-black shadow-black ">
                            <img src={fb} alt='Image here ' className='rounded-full h-6 w-6'></img>
                        </div>
                        <div className="hover:border hover:border-blue-900 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center  shadow-inner border-1 border-black shadow-black ">
                            <img src={insta} alt='Image here ' className='rounded-full h-6 w-6'></img>
                        </div>
                        <div className="hover:border hover:border-blue-900 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center  shadow-inner border-1 border-black shadow-black ">
                            <img src={twitter} alt='Image here ' className='rounded-full h-6 w-6'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1000px] mx-auto  flex flex-row items-center pb-40">
                <div className="copyright ml-8">
                    <span className="text-xs text-white">@insignia<small>TM</small> ,2022. All rights reservred </span>
                </div>
                <div className="ml-[600px] hover:border hover:border-blue-900 cursor-pointer  rounded-full h-8 w-8 flex justify-center items-center shadow-inner border-1 border-black shadow-black ">
                    <img src={msg} alt='Image here ' className='invert rounded-full h-4 w-4'></img>
                </div>
            </div>
        </>
    )
}

export default Footer