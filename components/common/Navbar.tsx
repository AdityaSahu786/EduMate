import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Sparkles } from 'lucide-react'
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
        <MaxWidthWrapper>
            <div className='flex justify-between items-center h-16'>
                <Link href="/" className='flex items-center space-x-2'>
                   <Sparkles className='w-8 h-8 text-primary' />
                   <span className='text-xl font-bold text-primary'>
                      Generate Lesson Plans
                   </span>
                </Link>
            </div>
        </MaxWidthWrapper>
    </header>
  )
}

export default Navbar