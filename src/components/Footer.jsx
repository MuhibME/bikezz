import React from 'react'
import Link from 'next/link';
import {Input} from './ui/input'
import {RiYoutubeFill,RiFacebookBoxFill, RiInstagramFill,RiTwitterFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='pt-12 xl:pt-24 bg-primary text-white text-center '>
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className='leading-tight mb-2'>Subscribe to our newsletter</h2>
            <p className='text-white/60'>Be the first to get the latest news about trends,promotion, and much more!</p>
          </div>
          {/* form */}
          <form className='flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5'>
            <Input placeholder='your email address'/>
            <button className='btn w-full xl:max-w-[150px] h-[60px] btn-accent'>join now</button>
          </form>
          {/* socials */}
          <div className='flex gap-8 mx-auto text-[20px] text-white/60 mb-20'>
            <Link href='' ><RiFacebookBoxFill/></Link>
            <Link href='' ><RiInstagramFill/></Link>
            <Link href='' ><RiTwitterFill/></Link>
            <Link href='' ><RiYoutubeFill/></Link>
          </div>
        </div>
        {/* copyright */}
        <div className="py-6 border-t border-white/5 text-white/60">
          Copyright &copy; 2024 Bikezz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;