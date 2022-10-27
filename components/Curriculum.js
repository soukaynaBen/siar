
import { WorkIcon,SchoolIcon,StarIcon } from '@heroicons/react/24/solid'

export default function Curriculum() {

  const itemsArray=[
    {
     year:"2018-Present",
     title:"Ph.D. Student",
     description:"Cotutelle between the University Ibn Tofail, Kenitra, Morocco and the University Della Calabria, Rende, Italy."
  },
    {
     year:"2016-2018",
     title:"Master’s Degree of of Applied Mathematics",
     description:"University Sidi Mohamed Ben Abdellah, Faculty Dhar Mahraz (Fez - Morocco)."
  },
    {
     year:"2013-2016",
     title:"Bachelor’s of Science in Mathematics and Applications (MA)",
     description:"University Sidi Mohamed Ben Abdellah, Faculty of Sicence and Technology (Fez - Morocco)."
  },
]
   
  return (
    <section className='' id="curriculum">
        <div className='flex justify-center  flex-col items-center mx-auto text-2xl'>
        <h2  className='title pb-10'>Curriculum Vitae </h2>
        <div className="container  mx-auto w-full">
  <div className="relative wrap overflow-hidden  h-full px-1 sm:px-2 pt-10">
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: "50%"}}></div>
   
         {itemsArray.map(({year,title,description},index)=>{
             return(
              <div key={index} className={`${index%2===0 && "flex-row-reverse "} mb-8 flex justify-between items-center w-full`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#c7644e]/80 shadow-xl   rounded-md p-2 mx-2">
                <h1 className="mx-auto text-white font-semibold text-sm sm:text-lg whitespace-nowrap ">{year}</h1>
              </div>
              <div className="order-1 bg-[#b49db7] rounded-lg shadow-xl w-5/12 p-2 sm:px-6 sm:py-4">
                <h3 className="mb-3 font-bold text-white text-lg sm:text-xl">{title}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{description}</p>
              </div>
            </div>
             )
         })}
  </div>
</div>

        </div>
    </section>
  )
}
