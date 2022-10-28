import React from 'react'

export default function Conferences({conferences:data}) {

 
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

   {data?.map((item,index)=>{
          return(
                 <CardComponent key={index} {...item}/>
          )
   })}
   </div>

   </div>
    

    </section>
  )
}
