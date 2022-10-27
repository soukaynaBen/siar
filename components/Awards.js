import React, { useEffect, useRef } from 'react'

export default function Awards() {

  const ref1=useRef(0)
  const ref2=useRef(0)

  useEffect(() => {
    if(typeof window !== 'undefined' ){    
      ref1.current.scrollLeft=Math.abs(parseInt(window.getComputedStyle(document.body).width)-parseInt(window.getComputedStyle(ref2.current).width) )*0.5;
    }
  }, [])


  const itemsArray=[
    {
      title:"SIAM Student Travel Awards ",
      description:"For the participation to the SIAM Annual Meeting 2021",
      footer:"Virtual Conference, July 19-23, 2021"
  },
    {
      title:"Best Poster Award ",
      description:"DWCAA21 - 5th Dolomites Workshop on Constructive Approximation and Applications ",
      footer:"Virtual Conference, September 6-10, 2021"
  },
    {
      title:"Kovalevskaya Grant for ICM2022",
      description:"For the participation to the ICM2022",
      footer:" Virtual Conference, July 06-14, 2022"
  }
   ]
 const CardComponent=({title,description,footer})=>(
  
  <div className='z-20'>

  <h4 className='font-extrabold text-lg'>{title}</h4>
  <p className='py-1'>{description}</p>
  <p className='font-light'>{footer}</p>
</div>
 )
  return (
    <section  id="awards" className='pt-16 sm:pt-24'>
        <div className='mx-auto '>
        <h2 className='title '>Awards and Grants</h2>
        <div className=' scrollbar-thin scrollbar-thumb-[#b49db7]/20 scrollbar-track-gray-100 py-10' ref={ref1}>

  <div ref={ref2} className='sm:grid sm:grid-cols-2 md:flex justify-end md:flex-row gap-8 md:gap-0 flex flex-col items-center  md:w-fit md:py-16 md:pl-[6em] py-10 md:mx-auto sm:px-2'>


   {itemsArray.map((item,index)=>{
    const  cardStyle=`award md:-translate-x-[${index*2}em] md:hover:-translate-x-[${index*2+1}em]`
          return(

        <div  key={index} className={cardStyle} >
          <div className="background"></div>
                 <CardComponent {...item}/>
        </div>
          )
   })}
      
       
      
  </div>
        </div>



        </div>
    </section>
  )
}
