import React from 'react'
import Link from 'next/link'

const LocationsInfo = () => {
  return (
    <section className='mb-16'>
        <div className='max-w-[1110px] mx-auto flex flex-col md:mt-8 gap-8 text-center px-6 xl:px-0 items-center xl:flex-row xl:text-left'>
            <h2 className='text-TH2 leading-TH2 font-bold text-primary-800'>Your city not listed?</h2>
            <p className='max-w-[550px] xl:pl-6 text-THBODY leading-THBODY text-primary-800'>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
            <div className='xl:min-w-[180px] text-right'>
            <Link href="/locations" className='ml-auto'><button className=' font-bold px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600 '>Get Scootin</button> </Link>
            </div>
        </div>
    </section>
  )
}

export default LocationsInfo