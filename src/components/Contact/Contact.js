import React from 'react'
import {BiCurrentLocation} from "react-icons/bi"
import {BiLogoGmail} from "react-icons/bi"
export default function Contact() {
  return (
    <div className="flex flex-col  px-[40px] md:py-[80px] py-[50px]">
<div className="max-w-[1000px] w-[100%] block mx-auto gap-y-[60px] flex md:items-start items-center flex-col">
<div>
    <h1 className="font-[900] md:text-left text-center text-[rgb(20,126,251)]">CONTACT</h1>
    <div className="text-[22px] md:text-left text-center font-[900] mt-4">Don't be shy! Hit me up! 👇</div>
</div>


<div className="flex md:flex-row flex-col items-center gap-y-[50px] md:gap-x-[69px]">
<div className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 md:gap-x-4">
    <BiCurrentLocation className="text-[rgb(20,126,251)] text-[50px] bg-white rounded-full p-2" style = {{boxShadow:"0px 1px 5px grey"}}/>
    <div>
        <h1 className="font-[900] md:text-left text-center">Location</h1>
        <div className="text-[rgb(118,118,140)]">Lagos,Nigeria</div>
    </div>
</div>


<div className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 md:gap-x-4">
   <BiLogoGmail className="text-[rgb(20,126,251)] text-[50px] bg-white rounded-full p-2" style = {{boxShadow:"0px 1px 5px grey"}}/>
    <div className="">
        <h1 className="font-[900] md:text-left text-center">Mail</h1>
        <div className="text-[rgb(118,118,140)]">Okezekingsley18@gmail.com</div>
    </div>
</div>


</div>

</div>
    </div>
  )
}
