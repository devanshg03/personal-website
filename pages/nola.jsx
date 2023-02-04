import Image from 'next/image'
import React from 'react'
import nolaImg from '../public/assets/projects/nola.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const nola = () => {
  return (
    <div className='w-full'>
        <div className='relative w-screen h-[30vh] lg:h-[40vh]'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image 
            className='absolute z-1'
            src={nolaImg} alt='/'
            fill
            style={{objectFit:"cover"}}
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2 '>Nola: Granola Machine</h2>
                <h3>Foodtech  / Consumertech</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Nola is an upcoming food-tech / consumer-tech startup that aims to make fresh, and healthy snacks convinent. We will make a machine that makes fresh-granola snacks at the click of a button. Our food ecosystem will make snacking more sustainable by utilizing unused nutrition and reducing packaging waste. I work mainly on the machine and overall ecosystem product development.</p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2' >Skills</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Project management</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Product design</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>3D rendering</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Prototyping</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Arduino</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Research</p>
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

export default nola