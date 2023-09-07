import React from 'react'
import {FiGithub} from "react-icons/fi"
import {BiLogoLinkedin} from "react-icons/bi"
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="px-[80px] flex justify-center items-center py-[60px] bg-[rgb(45,46,50)]">

<div className="max-w-[900px] w-[100%] text-white md:justify-between flex items-center md:flex-row flex-col md:gap-y-0 gap-y-8">
<div className="font-[900]">Copyright © 2023. All rights are reserved</div>

<div className="flex gap-x-4 text-white">
<Link href = "https://github.com/Kingsley1618" className=""><FiGithub className="text-[30px]"/></Link>

 <Link href = "https://www.linkedin.com/in/king-of-frontend-dev-0bb277208"><BiLogoLinkedin className="text-[30px]"/></Link>
</div>

</div>

    </div>
  )
}
