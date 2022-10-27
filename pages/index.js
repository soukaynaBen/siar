import { useEffect } from "react"
import Header from "../components/Header"
import Curriculum  from "../components/Curriculum"
import Research  from "../components/Research"
import Publications  from "../components/Publications"
import Conferences  from "../components/Conferences"
import Awards  from "../components/Awards"
import Footer  from "../components/Footer"
import Fellowship  from "../components/Fellowship"
import Home  from "../components/Home"


export default function App() {
   
  //  bg-orange-300/10
  return (
     <div className="scroll-smooth ">
            <Header/>
            <Home/>
            <Curriculum />
            <Research />
            <Publications />
            <Conferences />
            <Awards />
            <Fellowship />
            <Footer/>
     </div>
  )
}
