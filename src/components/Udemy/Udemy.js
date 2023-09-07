import React from 'react'
import styles from "./udemy.module.css"
import { Image } from 'antd';
import {AiOutlineArrowDown} from "react-icons/ai"
export default function Udemy() {
  return (
    <div className="px-8">
    <div className={`w-[100%] gap-y-6 p-5 my-8 justify-center flex flex-col items-center max-w-[900px] mx-auto ${styles.udemy}`}>
        
        <h1 className="font-[900] text-center text-[25px]">My Udemy Certificate</h1>
        <div className="font-bold">Click to Preview</div>
        <AiOutlineArrowDown className={styles.arrow}/>
       
  <Image
  
    alt="udemy"
    src="/Udemy.jpg"
   className="border-2 border-[grey] shadow-2xl w-[100%]"
  />

    </div>
    </div>
  )
}
