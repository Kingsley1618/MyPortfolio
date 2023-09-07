'use client'
import Image from 'next/image'
import About from "@/components/About/About"
import Myself from "@/components/Myself/Myself"
import Portfolio from "@/components/Portfolio/Portfolio"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import Udemy from "@/components/Udemy/Udemy"
import FormPage from '@/components/Form/Form'
export default function Home() {
 
  
  return (
    <main className="w-[100%] z-[-1]">

     <About />
 <Myself />
 <Portfolio />
 <Contact />
 <Udemy />
 <FormPage />
 <Footer />
    </main>
  )
}
