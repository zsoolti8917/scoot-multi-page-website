import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <section >
        <div className='bg-home-hero-mobile md:bg-home-hero-tablet  xl:bg-home-hero-desktop bg-cover bg-no-repeat h-[650px]  mx-auto w-full text-white flex lg:justify-start items-center overflow-hidden relative '>

        <span className='lg:bg-line absolute max-w-[203px] w-full h-full bg-no-repeat xl:top-[55%] xl:-translate-x-2 z-10 hidden xl:block'></span>
        <span className='bg-right-arrow absolute xl:max-w-[40%] h-full bg-no-repeat xl:top-[55%] xl:left-[50%] xl:translate-x-0 md:top-[72%] md:-translate-x-[20%] top-[77%] -translate-x-[65%] w-[447px] bg-contain'></span>
        <span className='bg-white-circles absolute bg-contain bg-no-repeat xl:max-w-[234px] w-full h-full md:top-[83%] xl:top-[66%] xl:-right-[4%] md:-right-[4%] md:max-w-[30%] md:block hidden'></span>

            <div className='z-50 max-w-[1110px] xl:w-full mx-auto px-6 lg:px-0 -mt-10 md:mt-0 '>
            <div className='max-w-[500px] flex flex-col text-center xl:text-left'>
            <h1 className='md:text-TH1 leading-TH1 tracking-TH1 xl:pb-10 pb-6 text-5xl'>Scooter sharing made simple</h1>
            <div className='xl:pl-16'>
            <p className='text-THBODY leading-THBODY tracking-THBODY md:pb-10 pb-6'>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
            <Link href="/locations" className='z-60 self-center'><button className='z-50 px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600'>Get Scootin</button> </Link>
            </div>
            </div>
            </div>
          
            
            
        </div>
    </section>
  )
}

export default Header