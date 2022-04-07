import React from 'react'
import './css.css'
import notepad from './notepad.png'
import printer from './printer.png'
import shield from './shield.png'
const Securitysection = () => {
    return (
        <div className='shadow-inner shadow-gray-900 md:border-4 border-8 border-gray-900 pl-4 pt-4  md:pl-8 md:pt-8 flex bg-gray-800 flex-col mx-auto w-screen md:w-[950px] md:h-[730px]  mt-[80px]   rounded-3xl'>
            <div className="text md:mt-8 md:ml-16 mt-4 ml-8">
                <span className='font-bold text-3xl text-blue-300 '>Features</span>
            </div>
            <div className="flex md:flex-row  overflow-auto space-x-8 md:space-x-16 w-[550px] md:w-auto ">
               
               
                <div className=" shadow-xl   rounded-3xl hover:shadow-red-900  bg-black w-[170px]  md:w-[300px] md:h-[450px] mt-16 md:ml-16 flex flex-col pt-8 " >
                    <div className="image  mx-auto">
                        <img src={notepad} alt="Image here" className='md:h-40 md:w-40 h-20 w-20 '></img>
                    </div>
                    <div className="flex flex-col  ">
                        <span className="text-blue-300 text-md mx-auto md:text-xl  md:mx-8">Search Data</span>
                        <span className="text-white text-xs mx-3 md:mx-8 md:mt-8 mt-2 ">Dont worry if your data is very large , insignia provides a search engine, which is useful for making it easier to find data effectivery saving time.</span>
                        <span className="text-white text-sm mx-2 ml-4 md:ml-8 flex flex-row items-center mt-3 justify-center md:mt-12"> Learn more
                            <div className="item-2 text-blue-800 text-2xl ml-2">&rarr;</div></span>
                    </div>
                </div>


                <div className=" shadow-xl   rounded-3xl hover:shadow-red-900  bg-black w-[170px]  md:w-[300px] md:h-[450px] mt-16 md:ml-16 flex flex-col pt-8 " >
                    <div className="image  mx-auto">
                        <img src={printer} alt="Image here" className='md:h-40 md:w-40 h-20 w-20 '></img>
                    </div>
                    <div className="flex flex-col justify-between">
                        <span className="text-blue-300 text-md  md:text-xl mx-auto md:mx-8">Print out</span>
                        <span className="text-white text-xs mx-3 md:mx-8 md:mt-8 mt-2 ">Print out serviece gives you convienience if somebody you need print data , just edit it all and just print it.</span>
                        <span className="text-white text-sm mx-2 ml-4 md:ml-8 flex flex-row items-center mt-10 justify-center md:mt-12"> Learn more
                            <div className="item-2 text-blue-800 text-2xl ml-2">&rarr;</div></span>
                    </div>
                </div>


                <div className=" shadow-xl md:absolute md:right-0   rounded-3xl hover:shadow-red-900  bg-black w-[170px]  md:w-[300px] md:h-[450px] mt-16 md:ml-16 flex flex-col pt-8 " >
                    <div className="image  mx-auto">
                        <img src={shield} alt="Image here" className='md:h-40 md:w-40 h-20 w-20 '></img>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-blue-300 text-md  md:text-xl mx-6 md:mx-8">Security Code</span>
                        <span className="text-white text-xs mx-2 md:mx-8 md:mt-8 mt-2 ">Data security is one of out best facilites. Allows for you file to be safer . The file can be secured with a code or password that you created , so only you can open the file.</span>
                        <span className="text-white text-sm mx-2 ml-4 md:ml-8 flex flex-row items-center mt-3 md:mt-12"> Learn more
                            <div className="item-2 text-blue-800 text-2xl ml-2">&rarr;</div></span>
                    </div>
                </div>
                
                
                

            </div>

            <div className=" flex flex-row mt-3 mb-2 md:mt-8 items-center justify-between ">
                <div className="  md:w-[500px] text-white ml-12">
                    <span className='text-2xl font-extrabold '> . </span>
                    <span className='text-2xl font-bold'> . </span>
                </div>
                <div className=" md:w-[500px] text-white flex flex-row-reverse mr-12">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Securitysection