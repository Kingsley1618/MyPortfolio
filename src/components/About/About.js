import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import { Tooltip } from 'antd';

import HtImage from "@/assets/Images/html.svg"
import Css from "@/assets/Images/css.svg"
import Javascript from "@/assets/Images/javascript.svg"
import Tailwind from "@/assets/Images/tailwind.svg"
import ReactImage from "@/assets/Images/react.svg"
import Sass from "@/assets/Images/sass.svg"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import Wave from "@/assets/Images/wave.png"
import NextImage from "@/assets/Images/next.svg"
export default function About() {
    const text = <span>prompt text</span>
  return (
    <div className={styles.container}>
    <div className={`flex gap-x-8 md:flex-row md:order-first order-last flex-col justify-between md:mx-auto w-[100%] max-w-[1100px] items-center`}>
<div className={`flex md:items-start md:mt-0 mt-8 items-center flex-col ${styles.first}`}>

<div className= "md:text-[55px] text-[34px] text-[#2d2e32] font-bold">Front-End React</div>

<div className="flex gap-x-3 font-bold items-center md:text-[55px] text-[34px] text-[#2d2e32] relative md:top-[-20px]"><h1>Developer</h1>  <Image src = {Wave} width={50} height={50} alt="wave"  className=""/></div>



<div className="md:mt-0 mt-4 md:text-left text-center">Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade, Serbia. 📍</div>
<div className="flex gap-x-5 md:mt-4 mt-6"><BsLinkedin className="text-[30px] text-[#2d2e32]"/> <BsGithub className="text-[#2d2e32] text-[30px]"/></div>
</div>

<div className={`${styles.main} md:order-last order-first`}><div className = {styles.kings}></div></div>


    </div>
<div className="flex md:flex-row flex-col gap-x-7 mt-[60px] items-center justify-center gap-y-4 flex-wrap px-5">
<div className="font-bold text-[22px] md:border-b-0 border-b-2 border-b-[black] md:pr-3 md:border-r-2 md:border-r-[black]">Tech Stack</div>
    <div className="flex flex-row items-center flex-wrap justify-center gap-y-4 gap-x-7">
    <Tooltip placement="rightBottom" title={"HTML"}>
       <Image src = {HtImage} width={40} height = {40} alt = 'html' className="" />
      </Tooltip>

      <Tooltip placement="top" title={"CSS"}>
      <Image src = {Css} width={40} height = {40} alt = 'css' className="" />
      </Tooltip>

      <Tooltip placement="top" title={"Javascript"}>
      <Image src = {Javascript} width={40} height = {40} alt = 'javascript' className="" />
      </Tooltip>

      <Tooltip placement="bottom" title={"Tailwind"}>
      <Image src = {Tailwind} width={40} height = {40} alt = 'tailwind' className="" />
      </Tooltip>

      <Tooltip placement="top" title={"React"}>
      <Image src = {ReactImage} width={40} height = {40} alt = 'react' className="" />
      </Tooltip>

      <Tooltip placement="top" title={"Sass"}>
      <Image src = {Sass} width={40} height = {40} alt = 'html' className="" />
      </Tooltip>

      <Tooltip placement="rightBottom" title={"Next"}>
      <Image src = {NextImage} width={40} height = {40} alt = 'html' className="" />
      </Tooltip>
      </div>
      </div>
    </div>
  )
}
