// import GlassSlab from "./components/GlassSlab"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Mainpage from "./components/Mainpage"
import Socials from "./components/Socials"

function App() {


  return (
   <div className="bg-gradient-to-br from-[#5A01D0] to-[#E92FE9] min-h-screen flex flex-col gap-52">
   
        <Mainpage/>
        <Cards/>
        <Socials/>
        <Footer/>
   </div>
  )
}

export default App
