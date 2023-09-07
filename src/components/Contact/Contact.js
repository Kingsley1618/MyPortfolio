import React from 'react'
import {FaLocationArrow} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineVerticalLeft} from "react-icons/ai"
export default function Contact() {
  return (
    <section id = "contact" className="flex flex-col  px-[40px] md:py-[80px] py-[50px]">
<div className="max-w-[1000px] w-[100%] block mx-auto gap-y-[60px] flex md:items-start items-center flex-col">
<div>
    <h1 className="font-[900] md:text-left text-center text-[rgb(20,126,251)]">CONTACT</h1>
    <div className="text-[22px] md:text-left text-center font-[900] mt-4">Don&apos;t be shy! Hit me up! 👇</div>
</div>


<div className="flex md:flex-row flex-col items-center gap-y-[50px] md:gap-x-[69px]">
<div className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 md:gap-x-4">
    <FaLocationArrow className="text-[rgb(20,126,251)] text-[50px] bg-white rounded-full p-2" style = {{boxShadow:"0px 1px 5px grey"}}/>
    <div>
        <h1 className="font-[900] md:text-left text-center">Location</h1>
        <div className="text-[rgb(118,118,140)]">Lagos,Nigeria</div>
    </div>
</div>


<div className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 md:gap-x-4">
   <AiOutlineMail className="text-[rgb(20,126,251)] text-[50px] bg-white rounded-full p-2" style = {{boxShadow:"0px 1px 5px grey"}}/>
    <div className="">
        <h1 className="font-[900] md:text-left text-center">Mail</h1>
        <div className="text-[rgb(118,118,140)]">Okezekingsley18@gmail.com</div>
    </div>
</div>

<div className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 md:gap-x-4">
   <AiOutlineVerticalLeft className="text-[rgb(20,126,251)] text-[50px] bg-white rounded-full p-2" style = {{boxShadow:"0px 1px 5px grey"}}/>
    <div className="">
        <h1 className="font-[900] md:text-left text-center">Phone Number</h1>
        <div className="text-[rgb(118,118,140)]">+23490-366-46-336</div>
    </div>
</div>


</div>

</div>
    </section>
  )
}
