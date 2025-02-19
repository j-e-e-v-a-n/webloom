import React from 'react'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import { ArrowRightIcon,InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';


const Landing = () => {
  return (
    <div className="flex justify-center ">
        <div className=" text-white justify-center flex flex-col">
          <div className="mx-auto my-auto  border border-gray-900 bg-[#0d0d0d] rounded-3xl px-3 py-1 flex items-center w-fit">
            <Avatar className="w-5 h-5">
              <AvatarImage src="https://framerusercontent.com/images/SyIz5hIRFh60MmeXi2QL4ogIww.png" />
              <AvatarFallback>WC</AvatarFallback>
            </Avatar>
            <Avatar className="w-5 h-5 ml-[-5px]">
              <AvatarImage src="https://framerusercontent.com/images/2JqS1V57M74bl8BPN2l4Hs2j0k.png" />
              <AvatarFallback>WC</AvatarFallback>
            </Avatar>
            <Avatar className="w-5 h-5 ml-[-5px]">
              <AvatarImage src="https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg?scale-down-to=1024" />
              <AvatarFallback>WC</AvatarFallback>
            </Avatar>
            <span className="text-gray-300 text-sm ml-3 tracking-widest">500+ Satisfied Clients</span>
          </div>
          <h1 className="mt-5 text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold main-heading lg:max-w-[20ch]">
            Empower Your Startup with <br className="hidden sm:block" />
            WebLoom's Tailored Web Solutions!
          </h1>

          <div className="text-gray-600 text-xs  lg:text-base max-w-[40ch] sm:max-w-[50ch] mx-auto text-center mt-5">
          <span className="text-gray-400">Unlock your startup's potential with us!</span> with customized web solutions designed to fit your <span className="text-gray-400">unique needs.</span> Let's build your <span className="text-gray-400">digital presence</span> together with webloom!
          </div>
          <div className="mx-auto flex gap-5 mt-5 flex-wrap  justify-center text-gray-500">
            <div className="border border-gray-900 bg-[#0d0d0d] rounded-3xl px-3 py-1 w-fit text-xs md:text-base">SEO Optimization</div>
            <div className="border border-gray-900 bg-[#0d0d0d] rounded-3xl px-3 py-1 w-fit text-xs md:text-base">Responsive Design</div>
            <div className="border border-gray-900 bg-[#0d0d0d] rounded-3xl px-3 py-1 w-fit text-xs md:text-base">Animated Interfaces</div>
            <div className="border border-gray-900 bg-[#0d0d0d] rounded-3xl px-3 py-1 w-fit text-xs md:text-base">Dynamic Content</div>
          </div>
          {/* <div className="w-fit mx-auto mt-5 flex flex-col ">
            <InfoCircledIcon className="h-5 w-5 mx-auto " />
            <span className="mt-2 text-sm text-gray-500 max-w-[40ch] text-center ">
              Highly affordable web development services as part of our startup launch. Enjoy top quality—order now for unbeatable price <span className="text-gray-300 text-basr">$29/₹2399 !!</span>
            </span>
          </div>
          <Link href="/create" className="glow-btn group flex mx-auto mt-5 items-center justify-center bg-light_green text-black rounded-full px-8 py-5 text-lg transition-transform duration-300">
            Let's Create with <span className="font-bold ml-1">$29 !</span>
            <ArrowRightIcon className="h-5 w-5 ml-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </Link> */}
          <div className="w-fit mx-auto mt-5 flex flex-col">
            <InfoCircledIcon className="h-5 w-5 mx-auto" />
            <span className="mt-2 text-sm  text-gray-500 sm:max-w-[70ch] max-w-[60ch] text-center">
              <span className="font-bold text-gray-400">Are you a startup owner struggling with generating leads?</span> Join our <span className="font-bold text-gray-400">free online meeting</span> to discover essential <span className="font-bold text-gray-400">digital marketing strategies</span> and learn about the <span className="font-bold text-gray-400">importance of web development</span> and <span className="font-bold text-gray-400">SEO practices</span>. 
              At WebLoom, we provide <span className="font-bold text-gray-400">comprehensive technical support</span>, content management, and updates tailored to your needs. 
              Let’s connect and unlock your startup's potential! <br />
              hurry up! Limited seat only!!
            </span>
          </div>
          <Link href="/meet" className="glow-btn group flex mx-auto mt-5 items-center justify-center bg-light_green text-black rounded-full px-8 py-5 text-lg transition-transform duration-300">
            Book a slote
            <ArrowRightIcon className="h-5 w-5 ml-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </Link>
        </div>
      </div>
  )
}

export default Landing
