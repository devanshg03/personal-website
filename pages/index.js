import Head from 'next/head'
import { Inter } from '@next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Devansh G.</title>
        <meta name="description" content="This is the personal website for Devansh Gandhi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main  />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}
