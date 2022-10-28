import React from 'react'

export default function Fellowship({fellowship:data}) {

  
   const CardComponent=({year,title,descriptions,footer,last,even})=>(
    
    <div  className={even ?'col-span-1':last? 'col-span-1 sm:col-span-2':'col-span-1'}>   <div className='h-full rounded-xl border p-5 shadow-md  bg-slate-100/20 drop-shadow-md  max-w-xl sm:mx-auto'>
    <h4 className='font-semibold text-amber-600/80 pb-2'>{year}</h4>
    <p className=' text-sm font-semibold'>{title}</p>
    {descriptions.map((description,index)=>( <p key={index} className='py-1 text-sm'>{description}</p>))}
   
    <p className=' text-xs text-slate-900/60'><span>{footer}</span></p>
</div></div>
   )
  
  return (

     <section id="fellowship" className='pt-16 flex items-center flex-col' >
     <h2  className='title pb-16'>Research Fellowship and Funding</h2>
 
   <div  className='grid grid-cols-1 sm:grid-cols-2 px-5  gap-8 mx-2 md:mx-auto'>
            {data?.map((item,index,items)=>{
              
                    return(
                      <CardComponent  last={items.length-1===index} key={index} even={items.length%2===0} {...item} />
                    )
            })}    
          
   </div>
  </section>
  )
}
