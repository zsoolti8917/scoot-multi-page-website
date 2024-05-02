"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/static/logo.svg";
import MenuOpen from "../public/static/icons/hamburger.svg";
import MenuClose from "../public/static/icons/close.svg";

let Links = [
  { name: "About", link: "/about" },
  { name: "Careers", link: "/careers" },
  { name: "Locations", link: "/locations" },
  { name: "Contact", link: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <section className="z-[1000]">
<div
  className={`${open ? "inset-0 bg-black block fixed top-0 bottom-0 right-0  left-0 bg-opacity-50 backdrop-blur-sm -z-[5]" : "hidden"}`}
  onClick={() => setOpen(false)}
></div>
      <div className="max-w-[1440px] mx-auto flex items-center px-6 xl:px-0 z-[1005]">
        <nav className=" max-w-[1110px] md:mx-auto w-full flex-grow px-2 md:px-0  flex py-6 text-THBODY justify-center  relative  md:justify-start ">
          <Link href="/" className="flex z-[1005] " onClick={handleCloseMenu}>
            <Image
              src={Logo}
              alt=""
              width={110}
              height={28.5}
              className="my-auto"
            />
          </Link>

          <button
            className="absolute left-3 top-[26px] md:hidden z-[1005]"
            onClick={() => setOpen(!open)}
          >
            <Image
              src={open ? MenuOpen : MenuClose}
              alt=""
              width={30}
              height={24}
            />
          </button>

          <ul
            className={`md:flex flex-grow md:gap-8 bg-secondary-100 md:ml-12  md:items-center md:justify-start z-[1001] pt-16 md:pt-0 md:flex-row md:pb-0 pb-12 fixed md:static md:z-auto  h-full md:h-auto top-0 ${
              open ? "left-0" : "-left-full"
            } w-[75%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:my-0 my-7 pb-6 md:pb-0">
                <Link
                  href={link.link}
                  className=" hover:text-primary-600 duration-500"
                  onClick={handleCloseMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link href="/locations" className="hidden md:block ml-auto">
              <button className=" px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600 ">
                Get Scootin
              </button>{" "}
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
