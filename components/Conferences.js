import React from 'react'

export default function Conferences() {

  const itemsArray=[
    {
      year:" 2021",
      title:"J2SD 2021 - Journées Scientifiques des Systèmes Dynamiques 2021",
      description:"El Jadida (Morocco), November 25-27, 2021",
      footer:"Invited Speaker"
  },
    {
      year:" 2021",
      title:"ATMA2021 - Approximation: Theory, Methods and Applications",
      description:"Reggio Calabria (Italy), November 10-12, 2021",
      footer:"Contributed Speaker"
  },
    {
      year:" 2021",
      title:"DWCAA21 - 5th Dolomites Workshop on Constructive Approximation and Applications ",
      description:"Virtual Conference, September 6-10, 2021",
      footer:"Speaker for the Poster Session"
  },
    {
      year:" SIMAI 2020+2021",
      title:"Minisymposium \"New Trends and Applications in Approximation Theory\" ",
      description:"Parma (Italy), August, 30 - September 3, 2021",
      footer:"Invited Speaker"
  },
    {
      year:" SIAM AN21 - SIAM Annual meeting",
      title:"Minisymposium \"MS5 Inverse Distance Weighting-Partition of Unity Methods and Applications\"",
      description:"Virtual Conference, July 19-23, 2021",
      footer:"Invited Speaker"
  },
    {
      year:" 2021",
      title:"RITA PhD Seminars",
      description:"Virtual Seminars, May 28, 2021",
      footer:"Speaker"
  },
   
   ]
 const CardComponent=({title,description,footer,year})=>(
  <div className='card '>
  <div className='h-[5px] bg-[#d7cdd8] absolute left-0 top-3 right-0 '/>
   <div className='flex flex-col justify-center'>
     <p className='text-lg'>{title}</p>
     <p className='text-sm text-gray-800 pt-2'>{description} </p>
     <p className='footer'>{footer}</p>
     <p className='pill'>{year}</p>
   </div>
</div>
  
 )
  
  return (
    <section id="conferences" className='my-16 '>
   <h2  className='title py-6 md:py-16'>Conferences, Workshops and Seminars</h2>
   <div className='mx-auto'>
   <div className='flex min-h-[450px] space-x-4 scrollbar-thin scrollbar-thumb-[#b49db7]/20 scrollbar-track-gray-100 items-center px-10 w-auto' >

   {itemsArray.map((item,index)=>{
          return(
                 <CardComponent key={index} {...item}/>
          )
   })}
   </div>

   </div>
    

    </section>
  )
}
