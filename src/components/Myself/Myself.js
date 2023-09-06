import React from 'react'
import Image from 'next/image'
import Work from "@/assets/Images/work.png"
import Rotate from "@/assets/Images/rotate.svg"
import Laptop from "@/assets/Images/myself.jpg"
function Myself() {
  return (
    <div className = "bg-[white] flex justify-center items-center md:px-[70px] px-[20px] lg:py-[100px] py-[40px]">
    <div className = "flex max-w-[1000px] w-[100%] justify-center mx-auto items-center  lg:gap-x-[40px] lg:flex-row flex-col">
        <div className="flex-[1] items-center">
<div className="relative w-[100%] max-w-[420px] h-[420px] items-center flex">
<Image src = {Laptop}  className="rounded-3xl w-[100%]"/> <Image width={160} height={160} src = {Work}  className="absolute bg-white p-[50px] right-[-10px] rounded-full bottom-[0px]"/>
 <Image width={150} height={150} src = {Rotate}  className="animate-spin-rotate font-bold object-cover absolute  right-[-4px]  bottom-[6px]"/>
</div>

</div>


<div className="flex-[1]">
<h1 className="font-[900] text-[rgb(20,126,251)] lg:text-left text-center">ABOUT ME</h1>
<div className="font-bold text-[24px] text-[rgb(45,46,50)] my-5 lg:text-left text-center"> A dedicated Front-end Developer
based in Belgrade, Serbia 📍</div>

<div className="lg:text-left text-center text-[rgb(118,120,153)]"> As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</div>
</div>
    </div>
    </div>
  )
}

export default Myself