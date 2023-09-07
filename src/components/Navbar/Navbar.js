'use client'
import React,{useState} from 'react'
import styles from "./navbar.module.css"
import { FaBars } from 'react-icons/fa';
import Link from 'next/link'
import {AiOutlineClose} from "react-icons/ai"
export default function Navbar() {
  const [open, setOpen] = useState(false)
  function openHandler() {
    setOpen(true)
  }

  function closeHandler() {
    setOpen(false)
  }
  return (
    <>
<div className={open ? styles.menu : styles.closeMenu}>
<AiOutlineClose className="absolute top-5 right-6 text-[40px] cursor-pointer" onClick = {closeHandler}/>
<ul className="flex flex-col items-center gap-y-8 text-center  justify-center w-[100%] font-bold">
<Link className={`text-[#2d2e32] cursor-pointer ${styles.links}`} href = "/" onClick = {closeHandler}><li>Home</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.links}`} href= "#about" onClick = {closeHandler}><li>About</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.links}`} href= "#portfolio" onClick = {closeHandler}><li>Projects</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.links}`}href= "#contact" onClick = {closeHandler}><li>Contact</li></Link>
</ul>
</div>

<div className={`${styles.navbar} flex  h-[5rem] items-center fixed top-0 left-0`}>
    <div className={`flex justify-between mx-auto z-50 w-[90%]`}>
<h1 className={`font-bold ${styles.title}`}>
    Kingsley
</h1>

<ul className="md:flex hidden items-center justify-center gap-x-5 font-bold">
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`} href = "/"><li>Home</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`} href= "#about"><li>About</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`} href= "#portfolio"><li>Projects</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`}href= "#contact"><li>Contact</li></Link>
</ul>
<FaBars onClick = {openHandler}  className={`${styles.bar} font-bold md:hidden flex text-[1.8rem] cursor-pointer`}/>
    </div>
    </div>
    </>
  )
}
