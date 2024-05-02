import React from 'react'
import PhoneImage from '../public/static/icons/locate.svg'
import ScooterImage from '../public/static/icons/scooter.svg'
import ScooterAltImage from '../public/static/icons/ride.svg'
import Image from 'next/image'

const InfoSections = () => {
  return (
    <section className='py-24 xl:py-32 relative overflow-hidden'>
        <span className='bg-line-white hidden md:block max-h-[20px] w-full h-full absolute rotate-90 -translate-x-56 z-10 translate-y-14 lg:rotate-0 lg:-translate-x-[30%] lg:translate-y-10'></span>
        
        <div className='max-w-[1110px] m-auto flex flex-col md:text-left text-center gap-12 lg:flex-row lg:gap-8 px-6 xl:px-0'>
            <div className='flex flex-col px-6 gap-6 max-w-[600px] mx-auto md:flex-row md:gap-24 lg:flex-col lg:gap-10 xl:px-0'>
                <Image src={PhoneImage} alt='Phone icon' className='self-center z-20 lg:self-start' />
                <div>
                <h2 className='text-TH4 leading-TH4 tracking-TH4 pb-6'>Locate with app</h2>
                <p className='text-THBODY leading-THBODY tracking-THBODY'>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                </div>
            </div>

            <div className='flex flex-col px-6 gap-6 max-w-[600px] mx-auto md:flex-row md:gap-24 lg:flex-col lg:gap-10 lg:px-0'>
            <Image src={ScooterImage} alt='Scooter icon' className='self-center z-20 lg:self-start'/>
            <div>
            <h2 className='text-TH4 leading-TH4 tracking-TH4 pb-6'>Pick your scooter</h2>
                <p className='text-THBODY leading-THBODY tracking-THBODY'>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                </div>
            </div>
                

            <div className='flex flex-col px-6 gap-6 max-w-[600px] mx-auto md:flex-row md:gap-24 lg:flex-col lg:gap-10 lg:px-0'>
                <Image src={ScooterAltImage} alt='Riding scooter icon' className='self-center z-20 lg:self-start'/>
                <div>
                <h2 className='text-TH4 leading-TH4 tracking-TH4 pb-6'>Enjoy the ride</h2>
                <p className='text-THBODY leading-THBODY tracking-THBODY'>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSections