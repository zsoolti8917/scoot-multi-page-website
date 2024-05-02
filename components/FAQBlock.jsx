import React from 'react'
import FAQCard from './FAQCard'

const howItWorks = [

    {
        question: 'How do I download the app?',
        answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
    },
    {
        question: 'Can I find a nearby Scoots?',
        answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
    },
    {
        question: 'Do I need a license to ride?',
        answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
    },

]

const safeDriving = [
    
        {
            question: 'Should I wear a helmet?',
            answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
        },
        {
            question: 'How about the rules & regulations?',
            answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
        },
        {
            question: 'What if I damage my Scoot?',
            answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
        },
    ]


export const FAQBlock = () => {
  return (
    <section className='mb-12'>
        <div className='max-w-[1110px] mx-auto px-6 xl:px-0'>
            <h3 className='text-center text-TH2 pb-6'>FAQs</h3>
            <div className='flex xl:justify-between pb-12 flex-col xl:flex-row'>
                <h4 className='text-TH3 text-center pb-6'>How it works</h4>
                <div className='max-w-[730px] w-full flex flex-col gap-6 mx-auto xl:mx-0'>
                    {howItWorks.map((item, index) => (
                        <FAQCard key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
            </div>

            <div className='flex xl:justify-between flex-col xl:flex-row'>
                <h4 className='text-TH3 text-center pb-6'>Safe driving</h4>
                <div className='max-w-[730px] w-full flex flex-col gap-6 mx-auto xl:mx-0'>
                    {safeDriving.map((item, index) => (
                        <FAQCard key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
