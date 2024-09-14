"use client"; // Make sure to include this directive
import Image from "next/image";
import React, { forwardRef } from 'react';

import { IoCloudDownload } from "react-icons/io5";
import { MdOutlineLabelImportant } from "react-icons/md";
import Button from "./Button";
import { FaGithub, FaTwitter,  FaBolt, FaLaptopCode } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaRedditAlien, FaCode } from "react-icons/fa";
import { GiPlasmaBolt } from "react-icons/gi";
import DownloadButton from "./DownloadButton";

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="hero" className="mt-12">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white text-black">
  <div className="grid gap-10 lg:grid-cols-2">
    <div className="lg:pr-10">
      <a
        href="/"
        aria-label="Go Home"
        title="Logo"
        className="inline-block mb-5"
      >
        <div className="flex items-center justify-center p-4 rounded-full bg-zinc-100">
          <FaBolt className="w-10 h-10 text-black" />
        </div>
      </a>
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-zinc-200">
          Freshly Crafted
        </p>
      </div>
      <h5 className="mb-4 text-4xl font-extrabold leading-none text-black">
        Building sleek, fast, and
        <br className="hidden md:block" />
        <span className="inline-block text-black">innovative web experiences.</span>
      </h5>
      <p className="mb-6 text-black">
        Crafting code to bring ideas to life pixel-perfect designs, designs, seamless animations, and dynamic user experiences. Let's turn your digital vision into reality, one line of code at a time.
      </p>
      <div className="flex items-center my-4 space-x-4">
        <DownloadButton/>
        <Button type="icon" icon={<FaGithub />} />
        <Button type="icon" icon={<IoLogoDiscord />} />
        <Button type="icon" icon={<FaTwitter />} />
        <Button type="icon" icon={<FaRedditAlien />} />
      </div>
      <hr className="mb-5 border-zinc-300" />

      <div className="grid gap-8 row-gap-8 sm:grid-cols-2 mb-6">
        <div>
          <div className="flex items-center justify-center w-14 h-14 p-3 mb-4 rounded-full bg-zinc-100">
            <FaCode className="w-10 h-10 text-black" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-black">
            Clean, Efficient Code
          </h6>
          <p className="text-sm text-black">
            Writing modular, reusable code to ensure maintainability and performance.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-14 h-14 p-3 mb-4 rounded-full bg-zinc-100">
            <FaLaptopCode className="w-10 h-10 text-black" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-black">
            Responsive Designs
          </h6>
          <p className="text-sm text-black">
            Crafting user interfaces that look stunning on any device.
          </p>
        </div>
      </div>

      <hr className="mb-5 border-zinc-300" />
      <p className="mb-4 text-sm font-bold tracking-widest uppercase flex text-center text-black">
        <MdOutlineLabelImportant className="w-5 h-5 mt-px text-black mr-1" /> Skills & Expertise
      </p>
      
      <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
        <ul className="space-y-3 text-black">
          <li className="flex">
            <span className="mr-1">
              <GiPlasmaBolt className="w-5 h-5 mt-px text-black" />
            </span>
            HTML5 & CSS3
          </li>
          <li className="flex">
            <span className="mr-1">
              <GiPlasmaBolt className="w-5 h-5 mt-px text-black" />
            </span>
            JavaScript & React.js
          </li>
          <li className="flex">
            <span className="mr-1">
              <GiPlasmaBolt className="w-5 h-5 mt-px text-black" />
            </span>
            Responsive Web Design
          </li>
        </ul>
        <ul className="space-y-3 text-black">
          <li className="flex">
            <span className="mr-1">
              <GiPlasmaBolt className="w-5 h-5 mt-px text-black" />
            </span>
            Frontend Architecture
          </li>
          <li className="flex">
            <span className="mr-1">
              <GiPlasmaBolt className="w-5 h-5 mt-px text-black" />
            </span>
            Web Animations & Interactivity
          </li>
          <li className="flex">
            <span className="mr-1">
              <GiPlasmaBolt className="w-5 h-5 mt-px text-black" />
            </span>
            Performance Optimization
          </li>
        </ul>
      </div>
    </div>
    <div>
      <img
        className="object-cover w-full h-106 rounded shadow-lg"
        src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Thumbnail"
        width={600}
        height={400}
      />
    </div>
  </div>
</div>
</section>



  );
});

export { Hero };