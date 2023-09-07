import React from 'react'
import Image from 'next/image'
import Work from "@/assets/Images/work.png"
import Rotate from "@/assets/Images/rotate.svg"
import Laptop from "@/assets/Images/myself.jpg"
function Myself() {
  return (
    <section id ="about" className = "bg-[white] flex justify-center items-center md:px-[70px] px-[20px] lg:py-[100px] py-[40px]">
    <div className = "flex max-w-[1000px] w-[100%] justify-center mx-auto items-center  lg:gap-x-[40px] lg:flex-row flex-col">
        <div className="flex-[1] items-center">
<div className="relative w-[100%] max-w-[420px] h-[420px] items-center flex">
<Image src = {Laptop}  className="rounded-3xl w-[100%]"/> <Image width={140} height={140} src = {Work}  className="absolute bg-white p-[50px] right-[2px]  rounded-full bottom-[0px]"/>
 <Image width={130} height={130} src = {Rotate}  className="animate-spin-rotate font-bold object-cover absolute  right-[8px]  bottom-[6px]"/>
</div>

</div>


<div className="flex-[1]">
<h1 className="font-[900] text-[rgb(20,126,251)] lg:text-left text-center">ABOUT ME</h1>
<div className="font-bold text-[24px] text-[rgb(45,46,50)] my-5 lg:text-left text-center"> A dedicated Front-end Developer
based in Lagos, Nigeria 📍</div>

<div className="lg:text-left text-center text-[rgb(118,120,153)]">I&apos;m a versatile frontend developer with a dash of backend expertise, seasoned in crafting exceptional web experiences. My skill set is a dynamic blend of Next.js, Firebase, React, ClerkAuth, Tailwind CSS, Ant Design, Sanity.io, and Redux.

With a passion for pixel-perfect design and a knack for creating seamless user interfaces, I&apos;ve honed my skills to deliver top-notch, responsive web applications. My proficiency in Next.js ensures blazing-fast load times and SEO optimization, while Firebase empowers me to build real-time, serverless applications with ease.

I&apos;m no stranger to authentication systems, having seamlessly integrated ClerkAuth to enhance user onboarding and security. Tailwind CSS and Ant Design are my go-to tools for crafting visually appealing, user-friendly interfaces, while Sanity.io keeps my content management streamlined and efficient.

When it comes to state management, I turn to Redux, ensuring a clean, predictable data flow throughout the application. But I don't just stop at the frontend. I&apos;m well-versed in handling the backend intricacies too, ensuring a holistic approach to web development.

My passion for creating polished, performant, and user-focused websites extends beyond just code. I bring a strong sense of collaboration, problem-solving, and a commitment to delivering projects on time and within scope.

In sum, my expertise in Next.js, Firebase, React, ClerkAuth, Tailwind CSS, Ant Design, Sanity.io, and Redux, combined with my holistic approach to development, make me a valuable addition to any frontend team. I&apos;m excited to contribute my skills and passion to create exceptional web experiences that delight users and drive business success</div>
</div>
    </div>
    </section>
  )
}

export default Myself