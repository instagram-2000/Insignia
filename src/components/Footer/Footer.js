import React from 'react'
import Logo from './logo.png'
import fb from './fb.png'
import insta from './insta.png'
import twitter from './twitter.png'
import msg from './msg.png'
const Footer = () => {
    return (
        <div classname="md:max-w-screen mx-auto">
           
            <div className='flex flex-col md:flex-row px-4 w-screen md:w-[950px]  mx-auto h-auto md:h-[100px] pt-4 bg-green-900 md:bg-gray-900 pb-8 md:pb-0'>
                <div className="flex flex-col md:w-[450px] ">
                    <div className="font-bold text-2xl md:text-3xl text-blue-300 ml-2 md:ml-0">Subscribe !</div>
                    <div className="text md:mt-4 text-white text-sm ml-2 md:ml-0">Join out news letter to never miss any latest news.</div>
                </div>
                <div className="buttons md:w-[500px] pt-3 md:mt-3 flex  items-center bg-green-900 md:bg-gray-900">
                    <div className="md:rounded-full rounded-xl w-auto mx-1 md:w-[380px] md:bg-gray-800 h-[45px] md:h-[55px] flex md:flex-row   items-center shadow-inner border-1 border-black shadow-black bg-white">
                        <input type="text" placeholder='Enter Your Email' className='md:bg-gray-800 ml-2 bg-white' />
                        <span className=' w-20 mr-2 md:h-8 shadow-lg hover:shadow-white hover:border  hover:border-blue-900 cursor-pointer shadow-black md:bg-gray-900 bg-gray-800 text-white rounded-full ml-2 md:ml-16 flex justify-center items-center '>Join us</span>
                    </div>
                </div>

            </div>





            <div className=' w-screen md:w-full h-1 shadow-inner shadow-gray-800 md:mt-8 invisible md:visible'></div>
            <div className='flex flex-row justify-between w-screen md:w-[950px] md:mx-auto px-4 md:h-[100px] mt-4 md:mt-8 pb-8 md:mb-0 '>
                <div className="flex flex-col md:w-[450px] ">
                    <div className="font-bold text-2xl md:text-3xl text-blue-300 ml-3 md:ml-0">Try For Free !</div>
                    <div className="text mt-2 md:mt-4 text-white text-sm ml-3 md:ml-0">Get limited 1 week free try out feature!</div>
                </div>
                <div className="md:buttons  md:w-[500px] md:flex md:flex-row justify-center items-center md:space-x-4">
                    <div className="custom md:h-12 shadow-lg md:w-32 hover:border-blue-500  shadow-black border border-gray-900 md:justify-center md:space-x-2 md:flex hover:space-x-4 md:ml-8 items-center  md:rounded-full md:px-3 invisible md:visible">
                        <div className="item-1 md:text-sm text-white">Learn more</div>

                    </div>
                    <div className="custom md:h-12 h-10  shadow-lg  cursor-pointer shadow-black border md:border-gray-900 justify-center space-x-2 flex hover:space-x-4  items-center  rounded-full px-3 border-blue-400 ">
                        <div className="item-1 text-sm text-blue-400">Request Demo</div>
                        <div className="item-2 text-blue-800 text-2xl hover:font-extrabold ">&rarr;</div>
                    </div>


                </div>

            </div>





            <div className=' w-screen md:w-full h-1 shadow-inner shadow-gray-800 md:mt-8 md:hidden'></div>
            <div className="w-screen md:w-[1000px] mx-auto  m:h-[300px] flex flex-col md:flex-row md:items-center ">
                <div className="address md:w-[340px] pt-8  md:pt-16 pl-8 flex md:flex-col ">
                    <div>
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
                    <div className="buttons w-screen md:w-[500px] flex flex-col space-y-6 justify-center items-center md:hidden ">
                        <div className="custom h-12 shadow-md md:shadow-lg w-32 hover:border-green-500   border  justify-center space-x-2 flex hover:space-x-4 ml-8 items-center  rounded-full px-3 border-blue-500">
                            <div className="item-1 text-sm text-white">Learn more</div>

                        </div>


                    </div>

                </div>
                <div className='flex justify-center '>
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
                </div>
                <div className="socialmedia md:w-[300px]  pt-1 flex flex-col items-center md:flex-none mt-8 md:mt-0">
                    <span className="text-md md:text-sm text-blue-300  md:ml-8"> Social media</span>
                    <div className="flex flex-row space-x-4 md:ml-8 mt-4 md:mt-8">
                        <div className="hover:border hover:border-blue-900 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center  md:shadow-inner border-1 border-black shadow-black ">
                            <img src={fb} alt='Image here ' className='rounded-full h-6 w-6'></img>
                        </div>
                        <div className="hover:border hover:border-blue-900 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center  md:shadow-inner border-1 border-black shadow-black ">
                            <img src={insta} alt='Image here ' className='rounded-full h-6 w-6'></img>
                        </div>
                        <div className="hover:border hover:border-blue-900 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center  md:shadow-inner border-1 border-black shadow-black ">
                            <img src={twitter} alt='Image here ' className='rounded-full h-6 w-6'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-auto md:w-[1000px] mx-auto  flex flex-row items-center pb-2 mt-8 mb-14 md:mb-0 justify-center itmes-center">
                <div className="copyright md:ml-8">
                    <span className="text-xs text-white">@insignia <small>TM</small> ,2022. All rights reservred </span>
                </div>

            </div>
        </div>
    )
}

export default Footer


