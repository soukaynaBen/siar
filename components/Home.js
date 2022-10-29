import Image from 'next/image'
import React from 'react'

export default function Home() {
    const myLoader = ({ src, quality }) => {
        return `/${src}?q=${quality || 75}`
      }

      const MyImage = ({src,alt,...props}) => {
        return (
          <Image {...props}
            loader={myLoader}
            src={src}
          />
        )
      }
    const heroImageStyle={
        backgroundImage:'url("./hero-image.jpg") ',
        backgroundSize:"cover",
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        
    }
  return (
    <section id="home" className=''>
        <div className='h-48 relative flex justify-around item-center' style={heroImageStyle}>
            <div className='absolute top-0 h-full w-full  left-0 bg-gradient bg-gradient-to-t from-white'/>
        </div>
            <div className='md:w-3/4  mx-8 max-w-[2000px] xl:mx-auto  justify-between flex relative md:mx-auto -translate-y-1/4  md:-translate-y-1/3 md:p-10 p-4 bg-white/50  rounded-md shadow-md flex-col items-center sm:flex-row'>

                <div className=' p-4'>
        
            <h2 className='text-[#766279]/90 font-semibold text-3xl py-4'>Najoua Siar</h2>
            <p className='text-lg text-slate-900/80' >Department of Mathematics and Computer Science - University of Calabria</p>
            <p className='text-lg text-slate-900/80' >Via Pietro Bucci, cubo 30/A</p>
            <p className='text-lg text-slate-900/80' >87036 Rende (CS) - Italy</p>
            <p className='text-lg text-slate-900/80 ' >Phone: -----</p>
            <p className='text-lg  text-slate-900/80' >Fax: ------</p>
            <p className='text-lg  text-slate-900/80' >Email: najoua.siar@uit.ac.ma</p>
                </div>
                <div className='w-60 h-60 sm:w-72 sm:h-72 shrink-0 relative  border-8 rounded-md   border-white shadow-inner drop-shadow-2xl ' >
                  <div className='absolute left-0 top-0 h-full w-full bg-[#774648]/10 blur-sm  '></div>
                    <MyImage src="/siar.jpg" className='absolute overflow-hidden ' objectFit='cover'    layout='fill' alt="najoua siar" /> 
                </div>
            </div>
     
    </section>
  )
}
