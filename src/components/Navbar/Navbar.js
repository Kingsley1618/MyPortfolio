import React from 'react'
import styles from "./navbar.module.css"
import { FaBars } from 'react-icons/fa';
import Link from 'next/link'
export default function Navbar() {
  return (
    <>


<div className={`${styles.navbar} flex  h-[5rem] items-center fixed top-0 left-0`}>
    <div className={`flex justify-between mx-auto z-50 w-[90%]`}>
<h1 className={`font-bold ${styles.title}`}>
    Kingsley
</h1>

<ul className="md:flex hidden items-center justify-center gap-x-5 font-bold">
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`} href = "#"><li>Home</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`} href= "#"><li>About</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`} href= "#"><li>Projects</li></Link>
<Link className={`text-[#2d2e32] cursor-pointer ${styles.link}`}href= "#"><li>Contact</li></Link>
</ul>
<FaBars  className={`${styles.bar} font-bold md:hidden flex text-[1.8rem] cursor-pointer`}/>
    </div>
    </div>
    </>
  )
}
