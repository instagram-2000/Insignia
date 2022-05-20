import React from 'react'
import Download from "./Download/Download";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Mainnavigation from "./Navigation/Mainnavigation";
import Testimonials from "./Testimonials/Testimonials";
import Learnmore from "./utilty/Learnmore";
import Securitysection from "./utilty/Securitysection";

const Homepage = () => {
  return (
    <div className="bg-gray-900  h-full md:max-w-screen mx-auto md:h-auto pt-[20px] md:pt-[60px] overflow-hidden">
       
        {/*Adding navigation through components*/}
        <Mainnavigation />

        {/*Addinng learn more page from components folder */}
        <Learnmore/>

         {/*Addinng Security page more page from components folder */}
         <Securitysection></Securitysection>

         {/*Addinng Security page more page from components folder */}
         <Features></Features>

          {/*Addinng Download page more page from components folder */}
          <Download></Download>

           {/*Addinng Testimonials page more page from components folder */}
           <Testimonials></Testimonials>

           {/*Addinng Footer page more page from components folder */}
           <Footer></Footer>


        


      </div>
  )
}

export default Homepage