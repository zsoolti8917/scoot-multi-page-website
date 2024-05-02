import React from 'react'
import Image from 'next/image'
import CircleImage1 from '../public/static/images/join-us.jpg'
import Link from 'next/link'

const CareersCircleInfo = () => {
  return (
    <section className='overflow-hidden py-6 relative'>
      <div className="w-full">
        <div className="max-w-[1110px] mx-auto pb-28 px-6 text-center xl:px-0 xl:text-left">
          <div className="grid grid-flow-row gap-8 justify-center xl:grid-flow-col xl:justify-between">
            <div className="max-w-[550px] xl:max-w-[445px] self-center z-50">
              <h3 className="pb-8 text-[32px] font-extrabold leading-10 tracking-tight md:text-TH2 md:leading-TH2 md:tracking-TH2">
                Easy to use riding telemetry
              </h3>
              <p className="pb-8">
                The Scoot app is available with riding telemetry. This means it
                can show you your average speed, how long you have been using
                the scooter, your traveling distance, and many more things all
                in an easy to use app.
              </p>
              <Link href="/locations" className='ml-auto z-50'><button className='z-50 px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600'>Get Scootin</button> </Link>
            </div>

            <Image
              src={CircleImage1}
              alt="max-w-[445px]"
              className="rounded-full row-start-1 m-auto"
            />
          </div>
        </div>
        <span className="bg-left-downward-arrow h-full w-full absolute bg-no-repeat top-[30%] left-5 md:bg-right-top xl:top-[35%]"></span>

        <span className="hidden md:block bg-no-repeat bg-circle max-w-[445px] w-full h-full absolute top-6 -right-[350px] -z-10"></span>
      </div>
</section>
  )
}

export default CareersCircleInfo