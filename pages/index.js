import Header from "../components/Header"
import Curriculum  from "../components/Curriculum"
import Research  from "../components/Research"
import Publications  from "../components/Publications"
import Conferences  from "../components/Conferences"
import Awards  from "../components/Awards"
import Footer  from "../components/Footer"
import Fellowship  from "../components/Fellowship"
import Home  from "../components/Home"
import client from "../sanity"

export default function App({data}) {
    const [curriculum, publications, research, conferences, awards, fellowship]=data
    
      const Loader =()=>(
      <div className="relative  my-24">
        <div className="border-t-transparent border-solid animate-spin mx-auto rounded-full border-[#7a5969]/20 border-4 sm:border-[6px] sm:h-24 sm:w-24 h-16 w-16">
        </div>
          <h6 className=" mx-auto w-fit m-3 text-amber-900/60">Loading...</h6>
        </div>)

  return (
     <div className="">
            <Header/>
            <Home/>  
          
         {!curriculum?<Loader/> :<Curriculum  curriculum={curriculum}/>}   
         {!research?<Loader/> : <Research research={research[0]?.research}/>}  
         {!publications?<Loader/> :<Publications publications={publications}/>}   
         {!conferences?<Loader/> : <Conferences conferences={conferences} />}  
         {!awards?<Loader/> : <Awards awards={awards}/>}  
         {!fellowship?<Loader/> :<Fellowship fellowship={fellowship} />}   
            
            <Footer/>
     </div>
  )
}
export async function getStaticProps() {
  const curriculum = await client.fetch(`*[_type=="curriculum" ] | order(order asc){ ... }`,{}) 
  const publications = await client.fetch(`*[_type=="publications"] | order(order asc){ ... }`,{}) 
  const research = await client.fetch(`*[_type=="research"]{ ... }`,{}) 
  const conferences = await client.fetch(`*[_type=="conferences"] | order(order asc){ ... }`,{}) 
  const awards = await client.fetch(`*[_type=="awards"] | order(order asc){ ... }`,{}) 
  const fellowship = await client.fetch(`*[_type=="fellowship"] | order(order asc){ ... }`,{})
 
  return {
    props:{data:[curriculum, publications, research, conferences, awards, fellowship] } , 
    revalidate: 60, 
  }
}