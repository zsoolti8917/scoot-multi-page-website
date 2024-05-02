import React from 'react'
import iconCog from '../public/static/icons/icon-cog.svg'
import iconPerson from '../public/static/icons/icon-person.svg'
import icconGraph from '../public/static/icons/icon-chart.svg'
import Contact from './Contact'
import Image from 'next/image'
const ContactContent = () => {
  return (
    <section className='relative flex h-full overflow-hidden my-16'>
    <div className='xl:max-w-[1110px] h-full w-full md:max-w-[500px] mx-auto px-6 md:px-0 flex lg:flex-row flex-col gap-16 md:gap-12 lg:gap-0'>
        <div className='text-primary-100 font-livvic flex flex-col gap-4 self-center text-center lg:text-left'>
        <p className='text-xl text-primary-300'>Ask us for:</p>
        <div className='flex items-center gap-6 pt-6'>
            <Image src={iconPerson} alt="" />
            <p>Univerzálnosť našich dátových vizualizácií</p>
        </div>
        <div className='flex items-center gap-6 pt-6'>
            <Image src={iconCog} alt="" />
            <p>Ako navigovať a používať našu platformu</p>
        </div>
        <div className='flex items-center gap-6 pt-6'>
            <Image src={icconGraph} alt="" />
            <p>Rozsah dostupných dátových súborov a vhľadov</p>
        </div>
        </div>
        <div className='flex-1 lg:pl-16'>
            <Contact />
        </div>
    </div>
</section>
  )
}

export default ContactContent