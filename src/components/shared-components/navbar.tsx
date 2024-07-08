import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { IoCartSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
        <nav className='flex items-center justify-between gap-10 py-4 px-20 border-b'>
    <section className='text-2xl fond-bold'>
        Logo
    </section>

    <ul className='flex items-center gap-10 text-lg'>
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/'}>Products</Link>
        </li>
        <li>
            <Link href={'/'}>Contact</Link>
        </li>
    </ul>

    <section className='flex gap-20'>
        <section>
        <Input placeholder='search items here'/>
        </section>

        <section className='flex items-center gap'>
        <Button variant="outline">Button</Button>
        <Button variant="outline"><IoCartSharp size={24} /></Button>
       
        
        </section>
    </section>
</nav>
</div>
  )
}

export default Navbar