import Mainnavigation from "./components/Navigation/Mainnavigation";
import Learnmore from "./components/utilty/Learnmore";

function App() {
  return (
    <>
      <div className="md:bg-gray-900 md:h-auto pt-[60px]">

        {/*Adding navigation through components*/}
        <Mainnavigation />

        {/*Addinng learn more page from components folder */}
        <Learnmore/>


      </div>
    </>
  );
}

export default App;
