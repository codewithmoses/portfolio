import { FaGlobe, FaRocket, FaInfinity } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Replacing SVG with React icons
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCode, FaDesktop, FaTools } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import React, { forwardRef } from 'react';
 const Features = forwardRef((props, ref) =>{
  return (
    <section ref={ref} id="features" className="mt-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none xl:max-w-lg">
              Elevate Your Digital Presence with Innovation
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-zinc-900 md:text-lg">
              Our cutting-edge solutions transform your ideas into reality.
              Embrace the future with technology that adapts and scales with
              your ambitions.
            </p>
          </div>
        </div>

        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-100">
              <FaCode className="w-7 h-7 text-black" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black">
              Cutting-Edge Development
            </h6>
            <p className="mb-3 text-sm text-black">
              Our team crafts innovative solutions using the latest technologies
              to ensure your project is ahead of the curve.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Modern Technologies
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Scalable Solutions
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Agile Methodologies
              </li>
            </ul>
            <a
              href="/services"
              aria-label="Learn more about our development services"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
            >
              Learn more
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-100">
              <FaDesktop className="w-7 h-7 text-black" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black">
              Stunning Design
            </h6>
            <p className="mb-3 text-sm text-black">
              Experience design excellence with user interfaces that are both
              visually appealing and intuitive to navigate.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                UX/UI Design
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Responsive Layouts
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                User-Centric Interfaces
              </li>
            </ul>
            <a
              href="/design"
              aria-label="Explore our design services"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
            >
              Learn more
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-100">
              <FaTools className="w-7 h-7 text-black" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black">
              Maintenance & Support
            </h6>
            <p className="mb-3 text-sm text-black">
              We provide ongoing support to keep your digital solutions running
              smoothly and efficiently, with prompt responses to any issues.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                24/7 Support
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Regular Updates
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Security Monitoring
              </li>
            </ul>
            <a
              href="/support"
              aria-label="Find out more about our maintenance and support services"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
            >
              Learn more
            </a>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-100">
              <IoMdAnalytics className="w-7 h-7 text-black" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black">
              Data & Analytics
            </h6>
            <p className="mb-3 text-sm text-black">
              Unlock insights from your data with our advanced analytics
              services, helping you make informed decisions and drive growth.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Data Visualization
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Performance Tracking
              </li>
              <li className="flex items-start">
                <IoCheckmarkDoneCircle className="w-5 h-5 mt-px text-black mr-1" />
                Strategic Insights
              </li>
            </ul>
            <a
              href="/analytics"
              aria-label="Discover our data and analytics services"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="flex max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
              <span className="relative">Affordable</span> Excellence
              <GiReceiveMoney className="ml-2 text-black" />
            </h2>
            <p className="text-base text-zinc-700 md:text-lg">
              Quality service doesn’t have to break the bank. Our flexible
              pricing plans cater to a variety of needs and budgets.
            </p>
          </div>
          <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
            <div>
              <div className="p-8 bg-black rounded">
                <div className="mb-4 text-center">
                  <p className="text-xl font-medium tracking-wide text-white">
                    Starter Plan
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      $39
                    </p>
                    <p className="text-lg text-zinc-500">/ month</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <AiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-medium text-zinc-300">
                      10 deploys per day
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <AiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-medium text-zinc-300">Basic analytics</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <AiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-medium text-zinc-300">Email support</p>
                  </li>
                </ul>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-white transition-colors duration-200 bg-zinc-700 rounded-lg hover:bg-zinc-600"
                >
                  Choose Plan
                </a>
              </div>
            </div>
            <div>
              <div className="p-8 bg-zinc-100 rounded">
                <div className="mb-4 text-center">
                  <p className="text-xl font-medium tracking-wide text-black">
                    Premium Plan
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                      $99
                    </p>
                    <p className="text-lg text-zinc-500">/ month</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <AiOutlineCheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <p className="font-medium text-black">Unlimited deploys</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <AiOutlineCheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <p className="font-medium text-black">Advanced analytics</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <AiOutlineCheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <p className="font-medium text-black">24/7 support</p>
                  </li>
                </ul>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-black transition-colors duration-200 bg-white rounded-lg hover:bg-gray-100"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export { Features };
