import Download from "./components/Download/Download";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Mainnavigation from "./components/Navigation/Mainnavigation";
import Testimonials from "./components/Testimonials/Testimonials";
import Learnmore from "./components/utilty/Learnmore";
import Securitysection from "./components/utilty/Securitysection";

function App() {
  return (
    <>
      <div className="bg-gray-900  h-full w-screen md:h-auto pt-[20px] md:pt-[60px] overflow-hidden">

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
    </>
  );
}

export default App;
