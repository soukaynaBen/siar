import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'


const headerItems=[
{title:"Home",itemStyle:"nav-menu-item",href:"#home" },
{title:"Curriculum Vitae",itemStyle:"nav-menu-item",href:"#curriculum" },
{title:"Research",itemStyle:"nav-menu-item hidden lg:inline-block",href:"#research" },
{title:"Publications",itemStyle:"nav-menu-item",href:"#publications" },
{title:"Conferences",itemStyle:"hidden sm:inline-block lg:hidden",href:"#conferences" },
{title:"Conferences and Workshops",itemStyle:"nav-menu-item inline-block  sm:hidden lg:inline-block",href:"#conferences" },
{title:"Awards ",itemStyle:"hidden sm:inline-block lg:hidden",href:"#awards" },
{title:"Awards and Grants",itemStyle:"nav-menu-item inline-block  sm:hidden lg:inline-block",href:"#awards" },
{title:"Funding",itemStyle:"hidden sm:inline-block lg:hidden",href:"#fellowship" },
{title:"Research Fellowship and Funding",itemStyle:"nav-menu-item inline-block  sm:hidden lg:inline-block",href:"#fellowship" }
]
export default function Header() {
  const header=useRef()
    
  const LinkComponent=({item:{title, itemStyle, href}}) =>{
      return ( <li className={itemStyle} >
      <Link href={href}>{title}</Link> 
    </li>)
  }

  const removeActive=()=>{

     header.current.classList.remove("active")
  }

  const addActive=()=>{

     header.current.classList.add("active")
  }
  
  
  return (
    <header className='sticky h-20 top-0   z-50 shadow-lg bg-[#fffefc]' ref={header}>
      <Head> <title>Najoua Siar</title></Head> 
      <div className='flex items-center   min-h-full mx-auto max-w-[2000px]'>

       <button onClick={addActive}  className='button p-4 '><Bars4Icon className='h-5 w-5 '/></button>  
       <ul className='menu'>
                    {headerItems.map((item,index )=><LinkComponent item={item} key={index}/>)}
        </ul> 
        <button onClick={removeActive} className='close absolute top-5 right-5 font-semibold text-xl '><XMarkIcon className='h-5 w-5 m-2 '/> </button>
      </div>
    </header>
  )
}
