import React from 'react'
import Image from 'next/image'
import WebImage from "@/assets/Images/Web3Image.png"

import {GoShare} from "react-icons/go"
import ChatImage from "@/assets/Images/Group-Chat.png"
import Link from "next/link"
import ScityLana from "@/assets/Images/Scitylana.png"
import TicTac from "@/assets/Images/Tictac.png"
import Home from "@/assets/Images/Home.png"
import Facebook from "@/assets/Images/Social-Media.png"
import Riby from "@/assets/Images/Riby.png"
import Hackathon from "@/assets/Images/Hackthon1-0.png"
import Coindom from "@/assets/Images/CoinDom.png"
import Expense from "@/assets/Images/Expense.png"
import styles from "./portfolio.module.css"
import {Bounce} from "react-awesome-reveal"
export default function Portfolio() {
  return (
    <section id = "portfolio" className="bg-[rgb(249,249,249)] px-7 py-[29px]">
<div className="w-[100%] max-w-[1000px] mx-auto block">
<h1 className="text-[rgb(20,126,251)] font-[900]">PORTFOLIO</h1>

<div className="font-[600] text-[23px]">Each project is a unique piece of development</div>

<Bounce cascade damping={0.1} triggerOnce className="flex flex-col gap-y-[60px] mt-8 items-center">

<div className="flex items-center shadow-2xl px-2 lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1]  text-center justify-center">
<Link href = "https://kingsleyhackathon1-0.vercel.app/"><Image alt = "hackathon" src = {Hackathon}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-[900]">HACKATHON 1.0</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">
Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold   p-2" style = {{boxShadow:"1px 1px 10px black"}}>Next JS</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>

</div>
<Link href ="https://kingsleyhackathon1-0.vercel.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>



<div className="flex items-center shadow-2xl px-2 lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1]  text-center justify-center">
<Link href = "https://scitylanalimited.github.io/Official-Website/index.html"><Image alt = "hackathon" src = {ScityLana}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-[900]">ScitylanaLimited</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">
Our mission is to ensure our clients growth and business sustainability. We proffer services to both SME&apos;s and larger organizations, ensuring that their values and goals are at the core of our heart in delivering our services.</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold   p-2" style = {{boxShadow:"1px 1px 10px black"}}>Next JS</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>

</div>
<Link href ="https://scitylanalimited.github.io/Official-Website/index.html" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>







<div className="flex items-center shadow-2xl px-2 lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1]  text-center justify-center">
<Link href = "https://chatweb-full-stack.vercel.app/"><Image alt = "chatimage" src = {ChatImage}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-[900]">Kingsley Group Chat</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">
Embark on a digital communication revolution with our meticulously crafted Fullstack Chat Web Application. Designed with passion and expertise, this innovative platform seamlessly bridges the gap between users, facilitating real-time conversations with style and efficiency.</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold   p-2" style = {{boxShadow:"1px 1px 10px black"}}>Next JS</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>
<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>Firebase/Redux/Clerkauth</h1>

</div>
<Link href ="https://chatweb-full-stack.vercel.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>













<div className="flex items-center shadow-2xl lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1] lg:order-last text-center justify-center">
    <Link href = "https://social-media-frontend-one.vercel.app/"><Image alt = "linx" src = {Facebook}  className="cursor-pointer rounded-xl ml-[-10px] lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-[900]">Facebook Clone</h1>
<div className="mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">This is a facebook Clone i made, Facebook helps you connect and share with people(Fullstack).</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold   p-2" style = {{boxShadow:"1px 1px 10px black"}}>React</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css/Firebase</h1>

</div>
<Link href = "https://social-media-frontend-one.vercel.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>




<div className="flex items-center shadow-2xl lg:flex-row px-2 flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1]  text-center justify-center">
<Link href = "https://coin-dom-cryptocurrency-next-js13-p1bt.vercel.app/"><Image alt = "coindom" src = {Coindom}  className="cursor-pointer rounded-xl  lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-[900]">COINDOM</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">  
Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold   p-2" style = {{boxShadow:"1px 1px 10px black"}}>NextJS 13</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>

</div>
<Link href ="https://coin-dom-cryptocurrency-next-js13-p1bt.vercel.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>


<div className="flex items-center shadow-2xl px-2 lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1] lg:order-last text-center justify-center">
<Link href = "https://ribyinc.com/"><Image alt = "riby" src = {Riby}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-[900]">RIBINC</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">
This website is on a mission to create prosperous communities across Africa by helping small businesses, communities, trade groups and cooperatives (formal and informal) to digitize their operations and get access to financial services (savings, loans, and payment) through our digital platforms (Web/Mobile/APIs) and offline channels (Agents, USSD, PoS, NFC and QR-Codes)..</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold   p-2" style = {{boxShadow:"1px 1px 10px black"}}>React</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>

</div>
<Link href ="https://ribyinc.com/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>




<div className="flex items-center  shadow-2xl lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px] px-2 w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1] lg:order-first text-center justify-center">
<Link href = "https://web3-era-design-1.vercel.app/"><Image alt = "WEB3" src = {WebImage}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-bold">WEB3 ERA</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">Experience the future of finance with our Decentralized Finance (DeFi) Dashboard, a cutting-edge web3 project that empowers you to take control of your financial assets like never before.</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold  p-2" style= {{boxShadow:"1px 1px 10px black"}}>NextJS</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>

</div>
<Link href ="https://web3-era-design-1.vercel.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>




<div className="flex items-center shadow-2xl lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px]  w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1] lg:order-last text-center justify-center">
<Link href = "https://csb-386eqm.netlify.app/"><Image alt = "tic" src = {TicTac}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-bold">TICTACTOE</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">  The objective of Tic-Tac-Toe is clear-cut: be the first player to complete a row, column, or diagonal with your chosen symbol—either &quot;X&quot; or &quot;O.&quot; The game is played on a 3x3 grid, which offers both players an equal chance to outmaneuver their opponent.</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>React</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>Css/Firebase/JavaScript Algorithm</h1>

</div>
<Link href ="https://csb-386eqm.netlify.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>




<div className="flex items-center shadow-2xl lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px] px-2 w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1]  text-center justify-center">
<Link href = "https://frontend-design-website-2q9g.vercel.app/"><Image alt = "technology" src = {Home}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-bold">TECHNOLOGIES/INNOVATIONS</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">On this page you can learn about new emerging technologies, so you will not be left behind in the world of computing. We give you the opportunity to study the topics and we also offer you mini tests to make sure you have learned. What are you waiting for?</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold  p-2" style= {{boxShadow:"1px 1px 10px black"}}>NextJS 13</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css/Framer motion</h1>

</div>
<Link href ="https://frontend-design-website-2q9g.vercel.app/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>




<div className="flex items-center lg:order-last shadow-2xl lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:gap-x-[20px] px-2 w-[100%] lg:max-w-[1000px] max-w-[620px] bg-white px-0 py-3 rounded-3xl">
<div className="flex-[1] lg:order-last  text-center justify-center">
<Link href = "https://faithchinonso.github.io/EXPENSE-TRACKER/"><Image alt = "expensealt" src = {Expense}  className="cursor-pointer rounded-xl lg:w-[500px] lg:h-[300px] w-[100%]"/></Link>

    
</div>

<div className="flex-[1] text-center justify-center">
<h1 className="font-bold">EXPENSE TRACKER</h1>
<div className=" mt-5 text-[rgb(118,120,118)] mx-auto block font-semibold text-[17px] max-w-[300px] w-[100%]">On this page you can learn about new emerging technologies, so you will not be left behind in the world of computing. We give you the opportunity to study the topics and we also offer you mini tests to make sure you have learned. What are you waiting for?</div>

<div className="flex gap-x-5 justify-center mt-7 flex-wrap sm:flex-row flex-col gap-y-3 mx-1">
<h1 className="bg-white font-bold  p-2" style= {{boxShadow:"1px 1px 10px black"}}>React</h1>

<h1 className="bg-white font-bold  p-2" style = {{boxShadow:"1px 1px 10px black"}}>TailWind Css</h1>

</div>
<Link href ="https://faithchinonso.github.io/EXPENSE-TRACKER/" className={`${styles.demo}  text-center flex justify-center flex-wrap items-center gap-x-1 cursor-pointer mt-7`}><h1 className="text-[16px]">Live Demo</h1> <GoShare  className="font-bold text-[24px]"/></Link>
</div>
</div>




</Bounce>
</div>


    </section>
  )
}
