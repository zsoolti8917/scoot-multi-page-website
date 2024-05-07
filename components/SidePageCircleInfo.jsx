import React from 'react'
import DigitalEra from '../public/static/images/digital-era.jpg'
import BetterLiving from '../public/static/images/better-living.jpg'
import Image from 'next/image'
const SidePageCircleInfo = () => {
  return (
    <section className='overflow-hidden py-6 relative'>
              <div className="w-full">
        <div className="max-w-[1110px] mx-auto pb-28 px-6 text-center xl:px-0 xl:text-left">
          <div className="grid grid-flow-row gap-8 justify-center xl:grid-flow-col xl:justify-between">
            <div className="max-w-[550px] xl:max-w-[445px] self-center">
              <h2 className="pb-8 text-[32px] font-extrabold text-primary-800 leading-10 tracking-tight md:text-TH2 md:leading-TH2 md:tracking-TH2">
              Mobility for the digital era</h2>
              <p className="pb-8 text-THBODY leading-THBODY  text-primary-800">
              Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.
              </p>
            </div>

            <Image
              src={DigitalEra}
              alt="max-w-[445px]"
              className="rounded-full row-start-1 m-auto"
            />
          </div>
        </div>
        <span className="bg-left-upward-arrow h-full w-full absolute bg-no-repeat top-[10%] left-5 md:bg-right-top xl:top-[20%]"></span>

        <span className="hidden md:block bg-no-repeat bg-circle max-w-[445px] w-full h-full absolute top-6 -right-[350px] -z-10"></span>
      </div>

      <div className="w-full">
        <div className="max-w-[1110px] mx-auto pb-28 px-6 text-center xl:px-0 xl:text-left">
          <div className="grid grid-flow-row gap-8 justify-center xl:grid-flow-col xl:justify-between">
            <div className="max-w-[550px] xl:max-w-[445px] self-center">
              <h2 className="pb-8 text-[32px] font-extrabold text-primary-800 leading-10 tracking-tight md:text-TH2 md:leading-TH2 md:tracking-TH2">
              Better urban living</h2>
              <p className="pb-8 text-THBODY leading-THBODY  text-primary-800">
              We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.
              </p>
            </div>

            <Image
              src={BetterLiving}
              alt="max-w-[445px]"
              className="rounded-full row-start-1 m-auto xl:col-start-1"
            />
          </div>
        </div>
        <span className="bg-right-arrow h-full w-full absolute bg-no-repeat bg-left-top top-[50%] -left-[125px] z-10"></span>

        <span className="hidden md:block bg-no-repeat bg-circle max-w-[445px] w-full h-full absolute xl:top-[600px] md:top-[900px] -left-[350px] -z-10"></span>
      </div>
    </section>
  )
}

export default SidePageCircleInfo