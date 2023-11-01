import React from 'react'
import Image from "next/image";
import NewsletterSubscribe from './NewsletterSubscribe';

const CalloutSection = () => {
  return (
    <div className='neo mx-2 border-t-2 border-b-2 bg-indigo-400 mt-4 p-8'><div className='grid grid-cols-12 container'>
      <div className='col-span-8 flex flex-col place-self-center'>
        <h2 className='semi-bold text-4xl mb-5'>Stay in the Know </h2>
        <p className='max-w-2xl mb-10'>Stay up-to-date with the latest tech news and announcements by reading our curated articles, ranging from bite-sized pieces to in-depth features. Perfect for busy users who want to stay informed on the go and for those who prefer to dive deep into a topic.</p>

        <NewsletterSubscribe />
      </div>
      <div className='neo col-span-4 rounded-full border-2 w-[100px] h-[100px] md:w-[300px] md:h-[300px] relative self-center'>
        <Image src={'./Podcast.svg'} alt='image of a persono n there phone' width={300} height={300} className='hover:-translate-y-1 absolute transform-all' />
      </div>
    </div></div>
  )
}

export default CalloutSection