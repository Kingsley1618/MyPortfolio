import Image from 'next/image'
import About from "@/components/About/About"
import Myself from "@/components/Myself/Myself"
import Portfolio from "@/components/Portfolio/Portfolio"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
export default function Home() {
  return (
    <main className="w-[100%] z-[-1]">

     <About />
 <Myself />
 <Portfolio />
 <Contact />
 <Footer />
    </main>
  )
}
