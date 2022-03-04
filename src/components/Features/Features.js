import React from 'react'
import './css.css'
import notepad from './notepad.png'
import printer from './printer.png'
import shield from './shield.png'
const Securitysection = () => {
    return (
        <div className='shadow-inner shadow-gray-900 border-4 border-gray-900 rounded-[50px]  pl-8 pt-8 flex bg-gray-800 flex-col mx-auto w-[950px] h-[730px]  mt-[80px]  mb-8 rounded-3xl'>
            <div className="text mt-8 ml-16 ">
                <span className='font-bold text-3xl text-blue-300 '>Features</span>
            </div>
            <div className="flex flex-row  static">
                <div className=" shadow-xl  shadow-black rounded-3xl hover:shadow-red-900  bg-black w-[300px] h-[450px] mt-16 ml-16 flex flex-col pt-8" >
                    <div className="image  mx-auto">
                        <img src={notepad} alt="Image here" className='h-40 w-40 '></img>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-blue-300 text-xl mx-8">Search Data</span>
                        <span className="text-white text-xs mx-8 mt-8">Dont worry if your data is very large , insignia provides a search engine, which is useful for making it easier to find data effectivery saving time.</span>
                        <span className="text-white text-sm ml-8 flex flex-row items-center mt-12"> Learn more
                            <div className="item-2 text-blue-800 text-2xl ">&rarr;</div></span>
                    </div>
                </div>
                <div className=" shadow-xl shadow-black rounded-3xl  hover:shadow-red-900 bg-black w-[300px] h-[450px] mt-16 ml-24 flex flex-col pt-8" >
                    <div className="image  mx-auto">
                        <img src={printer} alt="Image here" className='h-40 w-40 '></img>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-blue-300 text-xl mx-8">Print out</span>
                        <span className="text-white text-xs mx-8 mt-8">Print out serviece gives you convienience if somebody you need print data , just edit it all and just print it.</span>
                        <span className="text-white text-sm ml-8 flex flex-row items-center mt-12"> Learn more
                            <div className="item-2 text-blue-800 text-2xl ">&rarr;</div></span>
                    </div>
                </div>
                <div className=" shadow-xl absolute right-0 shadow-black rounded-l-3xl hover:shadow-red-900 bg-black w-[270px] h-[450px] mt-16 ml-16 flex flex-col pt-8" >
                    <div className="image  mx-auto">
                        <img src={shield} alt="Image here" className='h-40 w-40 '></img>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-blue-300 text-xl mx-8">Security Code</span>
                        <span className="text-white text-xs mx-8 mt-8">Data security is one of out best facilites. Allows for you file to be safer . The file can be secured with a code or password that you created , so only you can open the file.</span>
                        <span className="text-white text-sm ml-8 flex flex-row items-center mt-12"> Learn more
                            <div className="item-2 text-blue-800 text-2xl ">&rarr;</div></span>
                    </div>
                </div>

            </div>

            <div className="buttons flex flex-row mt-8">
                <div className=" w-[500px] text-white ml-12">
                    <span className='text-2xl font-extrabold '> . </span>
                    <span className='text-2xl font-bold'> . </span>
                </div>
                <div className=" w-[500px] text-white flex flex-row-reverse mr-12">
                    
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