"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "eBookStore-ReactWebsite",
    description:
      "eBookStore is a full-fledged React E-Commerce Web Application (Global Level State Application) where you can place an order for codebooks. Frontend (deployed on Netlify) and Backend (deployed on Render) are separately developed here. Filter Properties, Search Option, JSON-Server, JSON-Server-Auth (User Login, Logout), JSON Web Tokens (JWT), Protected Routes, React-Toastify, Session Storage, Dark Mode Option, JSON API - Auth Service and Data Service, Log in as Guest, React Core, Hooks, TailwindCSS, Responsive Screen, Context, and Reducers have been used in this project.",
    stack: [{ name: "React.js" }, { name: "AuthJSON" }, { name: "JWT" }, { name: "API" }, { name: "Tailwind.css" }, { name: "Node.js" }, { name: "HTML" }, ],
    image: "/assets/work/project01.png",
    live: "https://ebookstore-arnob.netlify.app",
    github: "https://github.com/arnobt78/eBookStore-ReactWebsite",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Cinemate-ReactWebsite",
    description:
      "Cinemate is a full-fledged React Movie Information Web Application (Component Level State Application), using TailwindCSS and the help of Flowbite TailwindCSS framework. React Core, Hooks, APIs (TMDB), Routing, HTML, TailwindCSS, Responsive Screen, Dark/Light Mode, and Search functionalities have been used in this project and deployed on Netlify.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "API" },
      { name: "HTML 5" },
    ],
    image: "/assets/work/project02.png",
    live: "https://cinemate-arnob.netlify.app",
    github: "https://github.com/arnobt78/Cinemate-ReactWebsite",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "DataCenter-Manager-AngularApp",
    description:
      "Designed the DataCenter as remote access like creating server, storage, taking snapshots or retrieve the snapshots of HDD, connect/ disconnect to server or datacenter, turn on/off the server. Implemented the front-end and back-end mobile app using their RESTful API by using Ionic Cordova AngularJS, HTML, CSS, SQLCipher, JavaScript, Push Notification Server, and OTP generator. Created a secured line Proxy Secured Server Connection.",
    stack: [
      { name: "Angular.js" },
      { name: "SQLCipher" },
      { name: "RESTfulAPI" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "OTP" },
      { name: "Encryption" },
    ],
    image: "/assets/work/project03.png",
    live: "https://gil.gmbh/en/projects/project_02/",
    github: "https://github.com/arnobt78/DataCenter-Manager-AngularApp",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Transaction-Payment-AngularApp",
    description:
      "xTan is a commercial mobile app that fetches the Credit Card details from the server and showed the expenses, graphs, reports, push notifications, transactions and used the OTP system to keep the app more secure for the client, with encryption and biometric feature. From real-time reports about their spending behavior to the visibility of a single transaction. They can use self-service features to manage address and bank details. The app is based on our unique security architecture and allows biometric authentication, strong encryption, certificate pinning, and many other security features.",
    stack: [
      { name: "Angular.js" },
      { name: "SQLCipher" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "OTP" },
      { name: "Encryption" },
      { name: "RESTfulAPI" },
    ],
    image: "/assets/work/project04.png",
    live: "https://gil.gmbh/en/projects/project_06/",
    github: "https://github.com/arnobt78/Transaction-Payment-AngularApp",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "Woozzlle-Game-AndriodApp",
    description:
      "Woozzelle is an educational android game that helps kids improve their memory and observation skills by having them solve puzzles made of randomly placed photo parts. Available in the App Store.",
    stack: [
      { name: "Java" },
      { name: "Andriod SDK" },
      { name: "XML" },
      { name: "Adobe Photoshop" },
    ],
    image: "/assets/work/project05.png",
    live: "https://github.com/arnobt78/Woozzle-Wood-Puzzle-Game-AndriodApp",
    github: "https://github.com/arnobt78/Woozzle-Wood-Puzzle-Game-AndriodApp",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "Facebook-StatusTapper-AndriodApp",
    description:
    "StatusTapper is an R&D mobile app for a client, where one can update their status on Facebook by uploading a photo in character mode that includes editable text.",
    stack: [
      { name: "Java" },
      { name: "Andriod SDK" },
      { name: "XML" },
      { name: "Adobe Photoshop" },
    ],
    image: "/assets/work/project06.png",
    live: "https://github.com/arnobt78/Facebook-StatusTapper-AndriodApp",
    github: "https://github.com/arnobt78/Facebook-StatusTapper-AndriodApp",
  },
  {
    num: "07",
    category: "Fullstack",
    title: "VRPTW-Solver-Comparison-pyApp",
    description:
      "Solving Vehicle Routing Problems with Time Windows (VRPTW) using multiple Classic Heuristic and metaheuristic algorithms (Hybrid Genetic Search (HGS), Guided Local Search (GLS), Ant Colony Optimization (ACO), Simulated Annealing (SA)), then comparing results with each one's results and present it in the graph.",
    stack: [
      { name: "Python" },
      { name: "Jupiter Notebook" },
      { name: "pyGraph" },
      { name: "NP" },
      { name: "Big Data" },
    ],
    image: "/assets/work/project07.png",
    live: "https://github.com/arnobt78/VRPTW-Solver-Comparison-pyApp",
    github: "https://github.com/arnobt78/VRPTW-Solver-Comparison-pyApp",
  },
];

const Work = () => {
  const [project, setPorject] = useState(projects[0]);
  const handleSlidechange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setPorject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              
            <div className="flex justify-between xl:flex-row xl:gap-[30px] xl:justify-between"> 
              {/* outline num */}
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

              {/* projects category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project description */}
              <p className="text-white/60 text-justify">{project.description}</p>

              {/* stack */}
             <div className="w-full text-justify"> 
              <ul className="flex flex-col gap-2 xl:flex-row">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-l text-accent">
                      {item.name}
                      {/* removing the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
            </div>

              {/* border */}
              <div className="border border-white/20"></div>
              
            </div>
          </div>
          
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlidechange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full bg-black/10 
                      z-10 "
                      ></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
