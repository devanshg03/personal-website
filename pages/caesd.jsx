import Image from 'next/image'
import React from 'react'
import caesdImg from '../public/assets/projects/caesd.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const vcmemo = () => {
  return (
    <div className='w-full'>
        <div className='relative w-screen h-[30vh] lg:h-[40vh]'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image 
            className='absolute z-1'
            src={caesdImg} alt='/'
            fill
            style={{objectFit:"cover"}}
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2 '>CAESD</h2>
                <h3>Design / Ecommerce</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>This is a my first startup, an e-commerce store that allows people to have customized phone cases. I designed and sources phone cases on demand for customers, and achieved a revenue of 4 digits in 6 months. Ultimately I realized this was not something I would like to pursue as it did not have a technological or much of a competitive advantage over other phone cases.</p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2' >Skills</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Shopify</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Affinity Suite</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Social Media</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Product Sourcing</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Instagram Ads</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Customer research</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>

    </div>
  )
}

export default vcmemo