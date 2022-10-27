import Header from "../components/Header"
import Curriculum  from "../components/Curriculum"
import Research  from "../components/Research"
import Publications  from "../components/Publications"
import Conferences  from "../components/Conferences"
import Awards  from "../components/Awards"
import Footer  from "../components/Footer"
import Fellowship  from "../components/Fellowship"
import Home  from "../components/Home"


export default function App({data}) {

   
  return (
     <div className="scroll-smooth ">
            <Header/>
            <Home/>
            <Curriculum  data={data.curriculum}/>
            <Research data={data.research}/>
            <Publications data={data.publications}/>
            <Conferences data={data.conferences} />
            <Awards data={data.awards}/>
            <Fellowship data={data.fellowship} />
            <Footer/>
     </div>
  )
}
export async function getStaticProps() {
 const res= await fetch(process.env.BASE_URL+"/api/data")
 const data=await res.json()
  return {
    props: data, 
  }
}