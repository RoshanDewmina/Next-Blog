import React from 'react'
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='neo bg-gray-600 text-white py-12 px-4 rounded-lg mt-2 mb-2 mx-2'><div className='flex container justify-between'>
      <div className='flex flex-row items-center'>
        <div>
          <div className='text-2xl mb-3'>Neo Blog</div>
          <div className='text-sm'>©  2023 Neo Blog</div>
        </div>
      </div>
      <div className='flex'>
        <a href='https://github.com' target="_blank" className='mr-3'>
          <GitHubLogoIcon className='w-6 h-6'/>
        </a>
        <a href='https://twitter.com' target="_blank" className='mr-3'>
         <TwitterLogoIcon className='w-6 h-6'/>
        </a>
        <a href='https://instagram.com' target="_blank" className='mr-3'>
         <InstagramLogoIcon className='w-6 h-6'/>
        </a>
      </div>
    </div></div>
  )
}

export default Footer