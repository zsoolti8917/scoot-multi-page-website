import React from 'react'
import Image from 'next/image'
import OurTech from '../public/static/images/our-tech.jpg'
import Integrity from '../public/static/images/our-integrity.jpg'
import Community from '../public/static/images/our-community.jpg'
import Card from './Card'

const content = [
    {
        image: OurTech,
        number: '01',
        title: 'Our tech',
        content: 'We’re usingcutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!'
    },
    {
        image: Integrity,
        number: '02',
        title: 'Our integrity',
        content: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.'
    },
    {
        image: Community,
        number: '03',
        title: 'Our community',
        content: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.'
    }
]

const OurValues = (props) => {
  return (
    <section className='max-w-[1440px] mx-auto mb-14'>
        <div className='max-w-[1110px] mx-auto'>
        <h3 className='text-center text-TH2 pb-8'>{props.title}</h3>
        <div className='flex flex-col text-center px-6 gap-14 max-w-[450px] mx-auto xl:flex-row xl:max-w-[1110px] xl:px-0'>

            {content.map((item, index) => (
                <Card key={index} image={item.image} number={item.number} title={item.title} content={item.content}/>
            ))}            
            
        </div>
        </div>
        
    </section>
  )
}

export default OurValues

/**
 * 
 *                 <div className='relative'>
                <Image src={OurTech} alt='Our Tech Image' className='rounded-full'/>
                <div className='absolute -bottom-8 right-[30%] max-w-[96px] max-h-[96px] w-full h-full bg-primary-600 rounded-full flex items-center justify-center' >
                    <p className='text-2xl'>01</p>
                </div>
                </div>
                
                
                <div className='flex flex-col gap-6'>
                <h4 className='text-TH4'>Our tech</h4>
                <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </div>
                
            </div>


            <div className='flex flex-col justify-center items-center gap-12'>
                <div className='relative'>
                <Image src={Integrity} alt='Integrity Image' className='rounded-full'/>
                <div className='absolute -bottom-8 right-[30%] max-w-[96px] max-h-[96px] w-full h-full bg-primary-600 rounded-full flex items-center justify-center' >
                    <p className='text-2xl'>02</p>
                </div>
                </div>
                
                
                <div className='flex flex-col gap-6'>
                <h4 className='text-TH4'>Our integrity</h4>
                <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </div>
                
            </div>


            <div className='flex flex-col justify-center items-center gap-12'>
                <div className='relative'>
                <Image src={Community} alt='Community' className='rounded-full'/>
                <div className='absolute -bottom-8 right-[30%] max-w-[96px] max-h-[96px] w-full h-full bg-primary-600 rounded-full flex items-center justify-center' >
                    <p className='text-2xl'>03</p>
                </div>
                </div>
                
                
                <div className='flex flex-col gap-6'>
                <h4 className='text-TH4'>Our community</h4>
                <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </div>
 */