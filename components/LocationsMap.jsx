import React from 'react'

const LocationsMap = () => {
  return (
    <section className='max-w-[1440px] mx-auto'>
        <div className=''>
            <div className='mx-6 mt-16 mb-10 relative'>
            <div className='bg-world-map-mobile md:bg-world-map-desktop w-full bg-no-repeat bg-contain aspect-[2/1]'></div>
            <div className='flex flex-col gap-4 px-6 '>


<div className='bg-orange-200 text-center py-4 px-6 md:absolute mt-8  md:top-[7%] md:left-[14%] lg:top-[10%] lg:left-[19%] xl:top-[15.5%] xl:left-[17.25%] relative'>
<p className='z-40 relative'>New York</p>
    <span className='bg-orange-200 w-10 h-10 absolute rotate-45 z-10 -bottom-2 left-10 hidden md:block'></span>
           
        </div>


        <div className='bg-orange-200 text-center py-4 px-6 md:absolute  md:-top-[2%] md:left-[37%] relative lg:top-[4%] lg:left-[39%] xl:top-[8.5%] xl:left-[40.5%]'>
<p className='z-40 relative'>London</p>
    <span className='bg-orange-200 w-10 h-10 absolute rotate-45 z-10 -bottom-2 left-8 hidden md:block'></span>
           
        </div>


        <div className='bg-orange-200 text-center py-4 px-6 md:absolute  md:top-[10%] md:right-[5%] relative lg:top-[16%] lg:right-[8%] xl:top-[20%] xl:lg:right-[9.5%]'>
<p className='z-40 relative'>Yokahoma</p>
    <span className='bg-orange-200 w-10 h-10 absolute rotate-45 z-10 -bottom-2 left-9 hidden md:block'></span>
           
        </div>

        <div className='bg-orange-200 text-center py-4 px-6 md:absolute  md:bottom-[43%] md:right-[14%] relative lg:bottom-[43%] lg:right-[16%] xl:bottom-[41%] xl:right-[17.5%]'>
<p className='z-40 relative'>Jakarta</p>
    <span className='bg-orange-200 w-10 h-10 absolute rotate-45 z-10 -bottom-2 left-9 hidden md:block'></span>
           
        </div>


        </div>
            </div>
        


</div>


    </section>
  )
}

export default LocationsMap