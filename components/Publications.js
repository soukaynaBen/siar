import React from 'react'

export default function Publications() {
 


const itemsArray=[
  
  {
    year:"2020",
    title:"F. Dell'Accio, F. Di Tommaso, O. Nouisser, N. Siar",
    descriptions:["Rational Hermite interpolation on six-tuples and scattered data"],
    footer:" Applied Mathematics and Computation, 386: 125452, 2020 "
},
  {
    year:"2021",
    title:"F. Dell'Accio, F. Di Tommaso, N. Siar, M. Vianello",
    descriptions:["Numerical differentiation on scattered data through multivariate polynomial interpolation"],
    footer:"BIT Numerical Mathematics, https://doi.org/10.1007/s10543-021-00897-6 "
},
  {
    year:"2021",
    title:"F. Dell'Accio, F. Di Tommaso, O. Nouisser, N. Siar",
    descriptions:["Solving Poisson equation with Dirichlet conditions through multinode Shepard operators"],
    footer:" Computers and Mathematics with Applications, 98: 254–260BIT Numerical Mathematics, https://doi.org/10.1007/s10543-021-00897-6 " 
},
  {
    year:"2021",
    title:"F. Dell'Accio, F. Di Tommaso, N. Siar",
    descriptions:["On the numerical computation of bivariate Lagrange polynomials"],
    footer:" Applied Mathematics Letters, 112: 106845"
}
 ]
const CardComponent=({year,title,descriptions,footer,last,even})=>(
<div className={even ?'col-span-1':last? 'col-span-1 sm:col-span-2':'col-span-1'}> 
  <div className='h-full rounded-xl border p-5 shadow-md bg-purple-300/20 max-w-xl sm:mx-auto'>
<h4 className='font-semibold text-amber-600/80 pb-2'>{year}</h4>
<p className=' text-sm font-semibold'>{title}</p>
{descriptions.map((description,index)=>( <p key={index} className='py-1 text-sm'>{description}</p>))}

<p className=' text-xs text-slate-900/60'><span>{footer}</span></p>
</div></div>
)
  return (
    
   <section id="publications" className=' flex items-center flex-col' >
      <h2  className='title pb-16'>Publications</h2>
  
    <div  className='grid grid-cols-1 sm:grid-cols-2 px-5  gap-8 mx-2 md:mx-auto'>

    {itemsArray.map((item,index,items)=>{
                    return(
                      <CardComponent  last={items.length-1===index} key={index} even={items.length%2===0} {...item} />
                    )
            })} 
           
    </div>
   </section>
  )
}
