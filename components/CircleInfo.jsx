import React from "react";
import Image from "next/image";
import CircleImage1 from "../public/static/images/telemetry.jpg";
import CircleImage2 from "../public/static/images/near-you.jpg";
import CircleImage3 from "../public/static/images/payments.jpg";
import Link from 'next/link'

const CircleInfo = () => {
  return (
    <section className="overflow-hidden py-6 relative">
      <div className="w-full">
        <div className="max-w-[1110px] mx-auto pb-28 px-6 text-center xl:px-0 xl:text-left  ">
          <div className="grid grid-flow-row gap-8 justify-center xl:grid-flow-col xl:justify-between">
            <div className="max-w-[550px] xl:max-w-[445px] self-center z-50">
              <h2 className="pb-8 text-[32px] font-extrabold leading-10 tracking-tight md:text-TH2 md:leading-TH2 md:tracking-TH2 text-primary-800">
                Easy to use riding telemetry
              </h2>
              <p className="pb-8 text-THBODY leading-THBODY  text-primary-800">
                The Scoot app is available with riding telemetry. This means it
                can show you your average speed, how long you have been using
                the scooter, your traveling distance, and many more things all
                in an easy to use app.
              </p>
              <Link href="/locations" className='ml-auto z-50'><button className='z-50 px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600 font-bold'>Get Scootin</button> </Link>
            </div>

            <Image
              src={CircleImage1}
              alt="max-w-[445px]"
              className="rounded-full row-start-1 m-auto"
            />
          </div>
        </div>
        <span className="z-10 bg-left-downward-arrow h-full w-full absolute bg-no-repeat top-[10%] left-5 md:bg-right-top xl:top-[20%]"></span>

        <span className="hidden md:block bg-no-repeat bg-circle max-w-[445px] w-full h-full absolute top-6 -right-[350px] -z-10"></span>
      </div>

      <div className="w-full">
        <div className="max-w-[1110px] mx-auto pb-28 px-6 text-center xl:px-0 xl:text-left">
          <div className="grid grid-flow-row gap-8 justify-center xl:grid-flow-col xl:justify-between">
            <div className="max-w-[550px] xl:max-w-[445px] self-center z-50">
              <h2 className="pb-8 text-[32px] font-extrabold leading-10 tracking-tight md:text-TH2 md:leading-TH2 md:tracking-TH2 text-primary-800">
              Coming to a city near you              </h2>
              <p className="pb-8 text-THBODY leading-THBODY  text-primary-800">
              Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.
              </p>
              <Link href="/locations" className='ml-auto  z-50'><button className=' z-50 px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600 font-bold'>Get Scootin</button> </Link>
            </div>

            <Image
              src={CircleImage2}
              alt="max-w-[445px]"
              className="rounded-full row-start-1 m-auto xl:col-start-1"
            />
          </div>
        </div>
        <span className=" z-10 bg-right-arrow h-full w-full absolute bg-no-repeat top-[35%] -left-[125px] "></span>

        <span className="hidden md:block bg-no-repeat bg-circle max-w-[445px] w-full h-full absolute xl:top-[600px] md:top-[900px] -left-[350px] -z-10"></span>
      </div>

      <div className="w-full">
        <div className="max-w-[1110px] mx-auto pb-28 px-6 text-center xl:px-0 xl:text-left">
          <div className="grid grid-flow-row gap-8 justify-center xl:grid-flow-col xl:justify-between">
            <div className="max-w-[550px] xl:max-w-[445px] self-center z-50">
              <h2 className="pb-8 text-[32px] font-extrabold leading-10 tracking-tight md:text-TH2 md:leading-TH2 md:tracking-TH2 text-primary-800">
              Zero hassle payments              </h2>
              <p className="pb-8 text-THBODY leading-THBODY  text-primary-800">
              Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.
              </p>
              <Link href="/locations" className='ml-auto z-50'><button className=' z-50 px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600 font-bold'>Get Scootin</button> </Link>
            </div>

            <Image
              src={CircleImage3}
              alt="max-w-[445px]"
              className="rounded-full row-start-1 m-auto"
            />
          </div>
        </div>
        <span className=" z-10 bg-left-downward-arrow h-full w-full absolute bg-no-repeat top-[70%] left-[180px] md:bg-right-top md:left-[375px] "></span>

        <span className="hidden md:block bg-no-repeat bg-circle max-w-[445px] w-full h-full absolute top-[1750px] xl:top-[1150px] -right-[350px] -z-10"></span>
      </div>
    </section>
  );
};

export default CircleInfo;
