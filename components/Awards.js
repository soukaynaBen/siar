import React, { useEffect, useRef } from 'react'

export default function Awards({data}) {

  const ref1=useRef(0)
  const ref2=useRef(0)
  const ref= useRef("")
  useEffect(() => {
    if(typeof window !== 'undefined' ){    
      ref1.current.scrollLeft=Math.abs(parseInt(window.getComputedStyle(document.body).width)-parseInt(window.getComputedStyle(ref2.current).width) )*0.5;
    }
  }, [])


 
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


   {data.map((item,index)=>{
      ref.current=`award md:-translate-x-[${index*2}em] md:hover:-translate-x-[${index*2+1}em]`
          return(

        <div  key={index} className={ref.current} >
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
