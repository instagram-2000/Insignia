import React from 'react'
import Diagram from './diagram.png'
const Learnmore = () => {
    return (
        <div className='flex flex-row mx-auto w-[950px] h-[430px]  mt-[100px]'>
            <div className="flex flex-col  h-500px w-[500px]">
                <span className="text-6xl flex flex-wrap font-bold text-blue-400 mt-8 pl-8"> Save your data  </span>
                <span className="text-6xl flex flex-wrap font-bold text-blue-400 pl-8">  storage here. </span>
                <div className="flex flex-col mt-8">
                <span className="text-sm text-white pl-8">Insignia is a data storage area that has been tested for </span>
                <span className="text-sm text-white pl-8"> security ,so you can store your data here safely but not be </span>
                <span className="text-sm text-white pl-8"> afraid of being stolen by others.</span>
                </div>



                <div className="custom h-12 shadow-md  shadow-black border cursor-pointer border-gray-900 justify-center  flex   items-center  rounded-full mt-12 w-[200px] ml-6 hover:border-blue-900 hover:border-2">
                    <div className="item-1 text-sm font-bold text-white">Learn More</div>

                </div>
            </div>
            <div className="image  w-[500px] ">
                <img src={Diagram} alt='image here ' className='ml-[110px] h-[350px]' ></img>
            </div>
        </div>
    )
}

export default Learnmore