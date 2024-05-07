import React from "react";
import Image from "next/image";
const Card = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <div className="relative">
        <Image
          src={props.image}
          alt="Our Tech Image"
          className="rounded-full"
        />
        <div className="absolute -bottom-8 right-[30%] max-w-[96px] max-h-[96px] w-full h-full bg-primary-600 rounded-full flex items-center justify-center">
          <p className="text-2xl text-primary-800 font-bold">{props.number}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-TH4 font-bold text-primary-800">{props.title}</h3>
        <p className="text-THBODY leading-THBODY text-primary-800">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Card;
