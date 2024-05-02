import React from 'react'
import Image from 'next/image'
import AppleStore from '../public/static/icons/app-store.svg'
import GooglePlay from '../public/static/icons/google-play.svg'

const HeaderFooter = () => {
  return (
    <section className='bg-primary-800 py-20 relative overflow-hidden'>
        <div className='max-w-[1110px] mx-auto flex justify-between text-white flex-col text-center px-6 xl:px-0 gap-10 items-center xl:text-left xl:flex-row xl:justify-between'>
            <h3 className='md:text-TH2 leading-TH2 text-TH3 text-bold max-w-[425px]'>Sign up and Scoot off today</h3>

            <div className='flex gap-4 items-center justify-center'>
                <a className='cursor-pointer'><Image src={AppleStore} alt='Apple store' className='w-[159px] h-[56px]' /></a>
                <a className='cursor-pointer'><Image src={GooglePlay} alt='Google play' className='w-[159px] h-[56px]'/></a>
            </div>
        </div>
        <span className='bg-semi-circles absolute xl:max-w-[1200px] w-full h-full xl:-bottom-[50px] xl:-right-[150px] z-20 bg-no-repeat -bottom-[120px] right-0  bg-[center_right_-165px] xl:bg-[center_right_0px]'></span>
    </section>
  )
}

export default HeaderFooter