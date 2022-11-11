import React from 'react'
import { useForm } from "react-hook-form";
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'

export default function Footer() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = formData => {
      window.location.href=`mailto:najoua.siar@gmail.com&subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`
      reset({
          name: "",
          subject: "",
          message: "",
          email: "",
        }, {
          keepErrors: true, 
          keepDirty: true,
        });
  };
  return (
    <footer className='py-24 bg-[#d7cdd8]/20 text-[#7b6f75] mt-24'>
            <div className='flex flex-col space-y-10  '>
            <h4 className='text-4xl font-semibold text-center '>
               Contact me
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#c7644e] h-7 w-7 animate-pulse'/>
                    <p className='text-lg md:text-2xl'>-------</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#c7644e] h-7 w-7 animate-pulse'/>
                    <p className='text-lg md:text-2xl'>najoua.siar@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#c7644e] h-7 w-7 animate-pulse'/>
                    <p className='text-lg md:text-2xl'>Morocco</p>
                </div>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className=' space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row'>
                        <div>

                        <input {...register("name",{required:true})}  placeholder='Name'  className='contactInput'  type="text"/>
                        <br />
                         {errors.name && <span>This field is required</span>}
                        </div>
                        <div>

                        <input {...register("email",{required:true})}  placeholder='Email'  className='contactInput' type="email"/>
                        <br />
                         {errors.email && <span>This field is required</span>}
                        </div>

                    </div>
                        <input {...register("subject",{required:true})}  placeholder='Subject' className='contactInput' type="text"/>
                              {errors.subject && <span>This field is required</span>}

                        <textarea {...register("message",{required:true})}  placeholder='Message'  className='contactInput' />
                              {errors.message && <span>This field is required</span>}

                        <button className='bg-[#8e7f86] py-5 px-10 rounded-md text-white/80 font-bold text-lg'>Submit</button>
                </form>
        </div>

    </footer>
  )
}
