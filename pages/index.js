import Header from "../components/Header"
import Curriculum  from "../components/Curriculum"
import Research  from "../components/Research"
import Publications  from "../components/Publications"
import Conferences  from "../components/Conferences"
import Awards  from "../components/Awards"
import Footer  from "../components/Footer"
import Fellowship  from "../components/Fellowship"
import Home  from "../components/Home"
import { useEffect, useState } from "react"


export default function App({data}) {


  return (
     <div className="">
            <Header/>
            <Home/>  
             {data?
              <>
            <Curriculum  curriculum={data?.curriculum}/>
            <Research research={data?.research}/>
            <Publications publications={data?.publications}/>
            <Conferences conferences={data?.conferences} />
            <Awards awards={data?.awards}/>
            <Fellowship fellowship={data?.fellowship} />
              </>:(<div class="relative  ">
    <div class="border-t-transparent border-solid animate-spin mx-auto rounded-full border-[#7a5969]/20 border-4 sm:border-[6px] sm:h-24 sm:w-24 h-16 w-16">
    </div>
        <h6 className=" mx-auto w-fit m-3 text-amber-900/60">Loading...</h6>
</div>)
             }
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