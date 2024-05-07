'use client';

import React from 'react'
import Link from 'next/link'

const JobCard = (props) => {
  return (
    <div className='px-10 py-8 bg-secondary-200 text-primary-800 flex justify-between flex-col gap-8 text-center md:flex-row md:text-left'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-TH4 font-bold'>{props.title}</h2>
            <p>{props.location}</p>
        </div>
        <div className='self-center'>
        
        <Link href={`/contact?jobTitle=${encodeURIComponent(props.title)}`} className='ml-auto'><button className='font-bold px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600 hidden md:block'>Get Scootin</button> </Link>
        
        </div>
        
    </div>
  )
}

export default JobCard