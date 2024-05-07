import React from 'react'

const SidepageHeader = (props) => {
  return (
    <section className='bg-about-hero-mobile md:bg-about-hero-tablet xl:bg-about-hero-desktop w-full bg-no-repeat h-full py-10  mx-auto relative overflow-hidden text-center md:text-left bg-cover px-6 xl:px-0 md:py-14'>
       
        <h1 className='text-TH2 text-white font-bold max-w-[1110px] mx-auto md:pl-8 xl:pl-0'>{props.title}</h1>

        <span className='bg-white-circles max-w-[235px] w-full max-h-[64px] h-full absolute bg-no-repeat -right-8 top-[30%] hidden md:block'></span>
    </section>
  )
}

export default SidepageHeader