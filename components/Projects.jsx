import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import nolaImg from '../public/assets/projects/nola.png'
import esoImg from '../public/assets/projects/eso.png'
import hksvImg from '../public/assets/projects/hksv.png'
import vcmemoImg from '../public/assets/projects/vcmemo.png'
import startrupImg from '../public/assets/projects/startrup.png'
import caesdImg from '../public/assets/projects/caesd.png'
import xtrailImg from '../public/assets/projects/xtrail.png'
import diecastgamingImg from '../public/assets/projects/diecastgaming.png'
import Projectitem from './Projectitem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-[#5299D3]'>Projects</p>
            <h2 className='py-4' >What I've Worked On</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <Projectitem
                    title='Nola: Granola Machine'
                    backgroundImg={nolaImg}
                    projectUrl='nola'
                    type='Startup'
                />

                <Projectitem
                    title='ESo Ventures'
                    backgroundImg={esoImg}
                    projectUrl='eso'
                    type='Student Venture Capital Club'
                />

                <Projectitem
                    title='HK Student Ventures'
                    backgroundImg={hksvImg}
                    projectUrl='hksv'
                    type='Student Consulting Firm'
                />

                <Projectitem
                    title='The VC Memo'
                    backgroundImg={vcmemoImg}
                    projectUrl='vcmemo'
                    type='Newsletter'
                />

                <Projectitem
                    title='Statr Up'
                    backgroundImg={startrupImg}
                    projectUrl='startrup'
                    type='Coding Project'
                />

                <Projectitem
                    title='CAESD: Custom Phone Cases'
                    backgroundImg={caesdImg}
                    projectUrl='caesd'
                    type='Startup'
                />

                <Projectitem
                    title='@Nissan X-Trail Official'
                    backgroundImg={xtrailImg}
                    projectUrl='#projects'
                    type='Social Media Page'
                />

                <Projectitem
                    title='Diecast Gaming / Diecast Car Collector'
                    backgroundImg={diecastgamingImg}
                    projectUrl='#projects'
                    type='Social Media Page'
                />

            </div>
        </div>
    </div>
  )
}

export default Projects