'use client';

import React, {useState} from 'react'
import Image from 'next/image'
import Chevron from '../public/static/icons/chevron.svg'



const FAQCard = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

  return (

    <div className='px-8 py-6 bg-secondary-200 relative ' onClick={toggleVisibility}>
        <h4 className='text-TH4 pr-6'>{props.question}</h4>
        {isVisible && <p className='pt-6'>{props.answer}</p>}
        <siv className='absolute top-8 right-10' >
            <Image src={Chevron} alt='Chevron' className={`width-[16px] height-[8px] w-full h-full ${isVisible ? 'rotate-180' : ''}`}/>
        </siv>

    </div>
  )
}

export default FAQCard