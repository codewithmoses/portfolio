import { FaArrowRight } from 'react-icons/fa';
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoMailUnread, IoCall } from "react-icons/io5";
import React, { forwardRef } from 'react';
 const Contact = forwardRef((props, ref) =>{
  return (
    <section ref={ref} id="contact" className="mt-16">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-zinc-200">
          <HiChatBubbleLeftRight className="inline-block mr-2 text-black" />
          Let's Connect
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
          Ready to Take Your Project to the Next Level?
        </h2>
        <p className="text-base text-black md:text-lg">
          Whether you're looking to start a new project or elevate an existing one, I'm here to help. Follow these simple steps to get in touch with me!
        </p>
      </div>
      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-200 sm:w-20 sm:h-20">
            <IoMailUnread className="w-12 h-12 text-black sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-black">Step 1: <span>Email Me</span></h6>
          <p className="max-w-md mb-3 text-sm text-black sm:mx-auto">
            Drop me a line at my email address. Share your project details, goals, and any questions you might have.
          </p>
          <a href="mailto:your-email@example.com" aria-label="Email Me" className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-700">
            Send Email
            <FaArrowRight className="ml-2 text-black" />
          </a>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <TbPlayerTrackNextFilled className="w-8 text-black transform rotate-90 lg:rotate-0" />
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-200 sm:w-20 sm:h-20">
            <IoCall className="w-12 h-12 text-black sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-black">Step 2: <span>Call Me</span></h6>
          <p className="max-w-md mb-3 text-sm text-black sm:mx-auto">
            Prefer a direct conversation? Give me a call. I'm available for a chat about your project's needs and vision.
          </p>
          <a href="tel:+1234567890" aria-label="Call Me" className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-700">
            Call Now
            <FaArrowRight className="ml-2 text-black" />
          </a>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <TbPlayerTrackNextFilled className="w-8 text-black transform rotate-90 lg:rotate-0" />
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-200 sm:w-20 sm:h-20">
            <HiChatBubbleLeftRight className="w-12 h-12 text-black sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-black">Step 3: <span>Let's Collaborate</span></h6>
          <p className="max-w-md mb-3 text-sm text-black sm:mx-auto">
            Ready to dive in? Let’s discuss your project’s specifics and explore how we can achieve your goals together.
          </p>
          <a href="/" aria-label="Start a Project" className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-700">
            Start a Project
            <FaArrowRight className="ml-2 text-black" />
          </a>
        </div>
      </div>
    </div></section>
  );
});
export { Contact };
