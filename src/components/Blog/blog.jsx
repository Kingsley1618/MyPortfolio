import React from 'react'
import BlogImage from "@/assets/Images/nextjs.webp"
import Image from 'next/image'
import Link from 'next/link'
export default function Blog() {
  return (
    <section id = "blog" className="flex flex-col  px-[40px] md:pt-[40px] md:pb-[0px] py-[50px] w-[100%] max-w-[1000px] mx-auto block">
   <h1 className='font-[900] text-[1.6rem] md:text-left text-center text-[rgb(20,126,251)]'>Blog</h1>
    
   <Link href = "https://okezekingsleydev.hashnode.dev/nextjs-installation" ><div className="flex md:flex-row flex-col gap-[20px] items-center">
    <Link href = "https://okezekingsleydev.hashnode.dev/nextjs-installation" className="block border-2 broder-gray-600 max-w-[300px] shadow-lg p-3 w-[100%] my-8  hover:scale-[1.03] "><Image src={BlogImage} className="" height = {300} width = {300} alt= "blog" loading = "lazy" /></Link>

   <p className="font-bold text-sm">In this guide, we'll walk through the process of starting a server using Next.js, a popular React framework that enables seamless server-side rendering and a great developer experience</p>
   </div>
   </Link>
   </section>
  )
}
