import React from 'react'
import Diagram from './diagram.png'
import { motion } from 'framer-motion';
const Learnmore = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}} className='flex md:flex-row mt-8 flex-col-reverse  mx-auto w-auto md:w-[950px] md:h-[430px] h-auto md:mt-[100px] '>
            <div className="flex flex-col  md:h-[500px] md:w-[500px]">
                <span className=" text-xl  md:text-6xl flex flex-wrap font-bold text-blue-400 mt-8 pl-8">
                    <motion.h2 initial={{y:-200}} animate={{ y:0}} drag> Save your data </motion.h2>  </span>
                <span className="text-xl  md:text-6xl flex flex-wrap font-bold text-blue-400 pl-8 animate-pulse">  <motion.h2 initial={{y:-600}} animate={{ y:0}} transition={{duration:0.7,type:'spring',stiffness:500}}> Storage Here. </motion.h2> </span>
                <div className="flex flex-col mt-8">
                <span className="text-xs md:text-sm text-white pl-8">Insignia is a data storage area that has been tested for </span>
                <span className="text-xs md:text-sm text-white pl-8"> security ,so you can store your data here safely but not be </span>
                <span className="text-xs md:text-sm text-white pl-8"> afraid of being stolen by others.</span>
                </div>



                <div className=" md:h-12 h-10 shadow-md  shadow-black border cursor-pointer md:border-gray-900 justify-center  flex   items-center  rounded-full mt-6 md:mt-12 w-[120px] md:w-[200px] ml-6 hover:border-blue-900 hover:border-2 border-blue-900">
                    <div className="item-1 text-sm font-bold text-white">Learn More</div>

                </div>
            </div>
            <motion.div whileHover={{y:150,scale:2}} transition={{duration:1}} className=" max-w-[700px] ">
                <img src={Diagram} alt='image here ' className='mx-auto md:ml-[110px] h-[200px] max-h-[350px]' ></img>
            </motion.div>
        </motion.div>
    )
}

export default Learnmore