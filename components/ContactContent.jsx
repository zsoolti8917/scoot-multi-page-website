import React from 'react'
import iconCog from '../public/static/icons/icon-cog.svg'
import iconPerson from '../public/static/icons/icon-person.svg'
import icconGraph from '../public/static/icons/icon-chart.svg'
import Contact from './Contact'
import Image from 'next/image'
const ContactContent = () => {
  return (
    <section className='relative flex h-full overflow-hidden my-16'>
    <div className='xl:max-w-[1110px] h-full my-10 w-full  justify-between mx-auto px-6 md:px-0 flex xl:flex-row flex-col gap-16 md:gap-12 xl:gap-0'>
        <div className=' bg-primary-800  px-10 py-8 rounded-2xl shadow-2xl text-primary-100 font-livvic flex flex-col gap-4 self-center text-center lg:text-left max-w-[600px]'>
        <h2 className='text-TH3 text-primary-300 font-bold text-white'>Ask us for:</h2>
        <div className='flex items-center gap-6 pt-6'>
            <Image src={iconPerson} alt="" className=''  />
            <p className='text-white text-THBODY leading-THBODY'>Contact us to learn more about how our scooters can transform your daily commute. Ask about trial rides, availability in your area, and user experiences!</p>
        </div>
        <div className='flex items-center gap-6 pt-6 text-white text-THBODY leading-THBODY'>
            <Image src={iconCog} alt="" />
            <p>Need assistance with our scooters or the Scoot app? Get in touch for help with troubleshooting, app features, or any tech-related queries.</p>
        </div>
        <div className='flex items-center gap-6 pt-6 text-white text-THBODY leading-THBODY'>
            <Image src={icconGraph} alt="" />
            <p>Inquire about your riding telemetry, including average speeds, distances traveled, and more. Understand your riding patterns better with detailed analytics from our app.</p>
        </div>
        </div>
        <div className='flex-1 xl:pl-16'>
            <Contact />
        </div>
    </div>
</section>
  )
}

export default ContactContent