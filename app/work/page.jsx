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
    category: "Fullstack",
    title: "AI-Rag-ChatBot-NextJS",
    description:
      "AI-Rag-ChatBot is a complete project example with RAGChat and Next.js 14, using Upstash Vector Database, Upstash Qstash, Upstash Redis, Dynamic Webpage Folder, Middleware, Typescript, Vercel AI SDK for the Client side Hook, Lucide-React for Icon, Shadcn-UI, Next-UI Library Plugin to modify TailwindCSS and deploy on Vercel. It is not just an AI, but also a pattern convension and provides reply super fast and it also can memorize all previous chat history from the Vector Storage so it doesn't have to reload the page again once its already indexed.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Upstash Vector" },
      { name: "Shadcn-UI" },
    ],
    image: "/assets/work/project02.png",
    live: "https://ai-rag-chatbot-arnob.vercel.app/https:/www.wikipedia.org",
    github: "https://github.com/arnobt78/AI-Rag-ChatBot-NextJS",
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
    image: "/assets/work/project05.png",
    live: "https://cinemate-arnob.netlify.app",
    github: "https://github.com/arnobt78/Cinemate-ReactWebsite",
  },
  {
    num: "06",
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
    image: "/assets/work/project06.png",
    live: "https://github.com/arnobt78/Woozzle-Wood-Puzzle-Game-AndriodApp",
    github: "https://github.com/arnobt78/Woozzle-Wood-Puzzle-Game-AndriodApp",
  },
  {
    num: "07",
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
    image: "/assets/work/project07.png",
    live: "https://github.com/arnobt78/Facebook-StatusTapper-AndriodApp",
    github: "https://github.com/arnobt78/Facebook-StatusTapper-AndriodApp",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "FreeScribe-ML-ReactVite-WebApp",
    description:
    "FreeScribe is a Machine Learning (ML) React Vite TailwindCSS Web Based Transcription and Translation App that uses Web Workers to run ML models in the browser. This app allows you to record your voice or upload an audio file (mp3/wav), transcribe it to text, translate it into any language, and download or copy the freshly converted text that has been transcribed and deployed on Vercel. This kind of app is essential and expensive in the IT manufacturing field, but it's integrated here smoothly, shared, and at no cost.",
    stack: [
      { name: "React.js Vite" },
      { name: "Tailwind.css" },
      { name: "Machine Learning" },
    ],
    image: "/assets/work/project08.png",
    live: "https://free-scribe-arnob.vercel.app/",
    github: "https://github.com/arnobt78/FreeScribe-ML-ReactVite-WebApp",
  },
  {
    num: "09",
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
    image: "/assets/work/project09.png",
    live: "https://github.com/arnobt78/VRPTW-Solver-Comparison-pyApp",
    github: "https://github.com/arnobt78/VRPTW-Solver-Comparison-pyApp",
  },
  {
    num: "10",
    category: "Fullstack",
    title: "SwoleNormous-GymFit-ReactVite-WebApp",
    description:
      "SwoleNormous is an ultimate gym training app built with React Vite, Web Worker, TailwindCSS and deployed on Netfily.",
    stack: [
      { name: "React.js Vite" },
      { name: "Tailwind.css" },
      { name: "Web Worker" },
      { name: "Shadcn-UI" },
    ],
    image: "/assets/work/project10.png",
    live: "https://swolenormous-arnob.netlify.app",
    github: "https://github.com/arnobt78/SwoleNormous-GymFit-ReactVite-WebApp",
  },
  {
    num: "11",
    category: "Fullstack",
    title: "Gesture-Recognition-Control-Powerpoint-Presentation",
    description:
      "Gesture Recognition is an R&D project to control Microsoft Powerpoint while presenting on a large screen, using the Microsoft Kinect Sensor, C# and Kinect SDK. Using their right or left hand, the presenter can slide to the next or previous page. They can also zoom in or out by fisting their hand, and they can play or pause the presentation by displaying all or none of their fingers.",
    stack: [
      { name: "C#" },
      { name: "Microsoft Kinect Sensor" },
      { name: "Kinect SDK" },
    ],
    image: "/assets/work/project11.png",
    live: "https://github.com/arnobt78/Gesture-Recognition-Control-Powerpoint-Presentation",
    github: "https://github.com/arnobt78/Gesture-Recognition-Control-Powerpoint-Presentation",
  },
  {
    num: "12",
    category: "Fullstack",
    title: "BlogWriting-Firebase-ReactWebpage",
    description:
      "BlogWriting is a simple Firebase React Web Application that mainly focuses on Firebase Setup, Configuration, Authentication, Provider, and Firestore Database to retrieve the data from the database and then display, create, and delete the data, using React-Loading-Skeleton, TailwindCSS, JavaScript, HTML and deploy on Netfily.",
    stack: [
      { name: "React.js" },
      { name: "Firebase" },
      { name: "Auth" },
      { name: "React-Loading-Skeleton" },
    ],
    image: "/assets/work/project12.png",
    live: "https://blogwriting-arnob.netlify.app",
    github: "https://github.com/arnobt78/BlogWriting-Firebase-ReactWebpage",
  },
  {
    num: "13",
    category: "Frontend",
    title: "Javascript-HTML-CSS-Web-Template",
    description:
      "Created a simple website template with navbar header, body, user sign-up, sign-in, footer, responsive screen for any device using HTML, CSS and Javascript.",
    stack: [
      { name: "Javascript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    image: "/assets/work/project13.png",
    live: "https://github.com/arnobt78/Javascript-HTML-CSS-Web-Template",
    github: "https://github.com/arnobt78/Javascript-HTML-CSS-Web-Template",
  },
  {
    num: "14",
    category: "Frontend",
    title: "Shopmate-React-Redux-Webpage",
    description:
      "Shopmate is a demo React Redux E-Commerce Web Application (Global Level State Application), using Redux and Redux-Toolkit features. React Core, Hooks, Routing, HTML, CSS, Responsive Screen, Redux, and Redux-Toolkit functionalities have been used in this project and deployed on Netlify. Note: Redux and Redux-Toolkit have been employed in this React project; useContext and useReducers have not been used here.",
    stack: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "Redux-Toolkit" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    image: "/assets/work/project14.png",
    live: "https://shopmate-redux-arnob.netlify.app",
    github: "https://github.com/arnobt78/Shopmate-React-Redux-Webpage",
  },
  {
    num: "15",
    category: "Frontend",
    title: "Taskmate-ReactPage",
    description:
      "Taskmate is a simple React project where you can add a todo list, edit it, delete it, and also change the theme of the page using a local database.",
    stack: [
      { name: "React.js" },
      { name: "Local-Storage" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    image: "/assets/work/project15.png",
    live: "https://taskmate-arnob.netlify.app/",
    github: "https://github.com/arnobt78/Taskmate-ReactPage",
  },
  {
    num: "16",
    category: "Fullstack",
    title: "MyPortfolio-NextJS-Webpage",
    description:
      "My Portfolio Webpage is a Mordern NextJS-v14 Framer-Motion React TailwindCSS Portfolio Webpage. Every component of this project uses the most recent Shadcn UI, Framer-Motion, Animation, Nodemailer capabilities, and deployed on Vercel.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
      { name: "Shadcn-UI" },
    ],
    image: "/assets/work/project16.png",
    live: "https://arnob-mahmud.vercel.app/",
    github: "https://github.com/arnobt78/MyPortfolio-NextJS-Webpage",
  },
  {
    num: "17",
    category: "Fullstack",
    title: "Blog-PyFlaskWebApp",
    description:
      "The website is a basic blog application where users may authenticate, log in, and post content. Other users can then like and comment on the article, or the user can delete the post and comments. (this application is still on going project to extend my knowledge)",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Auth" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    image: "/assets/work/project17.png",
    live: "https://github.com/arnobt78/Blog-PyFlaskWebApp",
    github: "https://github.com/arnobt78/Blog-PyFlaskWebApp",
  },
  {
    num: "18",
    category: "Frontend",
    title: "Shopmate-React-Context-Reducer-Webpage",
    description:
      "Shopmate is a demo React E-Commerce Web Application (Global Level State Application), using React useContext and useReducer features. React Core, Hooks, Routing, HTML, CSS, Responsive Screen, Context, and Reducers functionalities have been used in this project and deployed on Netlify. Note: useContext and useReducer have been employed in this React project; Redux and Redux-Toolkit have not been used here.",  
    stack: [
      { name: "React.js" },
      { name: "React-Context" },
      { name: "React-Reducers" },
      { name: "Routing" },
    ],
    image: "/assets/work/project18.png",
    live: "https://shopmate-cr-arnob.netlify.app",
    github: "https://github.com/arnobt78/Shopmate-React-Context-Reducer-Webpage",
  },
  {
    num: "19",
    category: "Frontend",
    title: "SoundMate-TailwindCSS-Templet",
    description:
      "TailwindCSS-SoundMate-WebPage is a demo single webpage with header logo, navbar, body with info, button, cards, footer and responsive screen for any device where using only TailwindCSS, Tailwind class extension JS and HTML.",
    stack: [
      { name: "React.js" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project19.png",
    live: "https://github.com/arnobt78/SoundMate-TailwindCSS-Templet",
    github: "https://github.com/arnobt78/SoundMate-TailwindCSS-Templet",
  },
  {
    num: "20",
    category: "Frontend",
    title: "HotelBooking-ReactVite-Website",
    description:
      "Hotel-Booking is a Static React-Vite Frontend Website, using React.js, React-Compotents, React-context API, Hooks, TailwindCSS, React Date Picker, Responsive Mobile Menu, Swiper Slider, Data Loading Spinner Effect, Scroll To Top Component, when page or location changes and deploy on Netlify.",
    stack: [
      { name: "React.js" },
      { name: "TailwindCSS" },
      { name: "Swiper Slider" },
    ],
    image: "/assets/work/project20.png",
    live: "https://hotel-booking-arnob.netlify.app",
    github: "https://github.com/arnobt78/HotelBooking-ReactVite-Website",
  },
  {
    num: "21",
    category: "Frontend",
    title: "CoffeeShop-NextJS-Webpage",
    description:
      "Coffee-Shop is a NextJS 14 Static Frontend Webpage, using React.js, Typescript, TailwindCSS, Framer-Motion, Locomotive-Scroll, Gsap, React-Icons, Split-Type, Swiper, Mobile NavBar features and deploy on Vercel.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/work/project21.png",
    live: "https://coffeeshop-arnob.vercel.app/",
    github: "https://github.com/arnobt78/CoffeeShop-NextJS-Webpage",
  },
  {
    num: "22",
    category: "Frontend",
    title: "SkinCare-Salon-NextJS-Website",
    description:
      "SkinCare-Salon is a NextJS 14 Static Frontend Website, using React.js, Typescript, TailwindCSS, Framer-Motion, Shadcn-UI, tailwindCSS-Animate, Lucide-React, React-Icons, React-Player, React-Reponsive, React-Countup features and deploy on Vercel.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/work/project22.png",
    live: "https://skincare-salon-arnob.vercel.app/",
    github: "https://github.com/arnobt78/SkinCare-Salon-NextJS-Website",
  },
  {
    num: "23",
    category: "Frontend",
    title: "RestaurantJS-NextJS-Website",
    description:
      "RestaurantJS App is a NextJS 14 Static Frontend Website, using React.js, Javascript, TailwindCSS, Framer-Motion, TailwindCSS-Animate, Date-fns, React-Leaflet, Lucide-React, React-Day-Picker, React-Scroll, React-Icons, React-Responsive features and deploy on Vercel. Note: This static website is built using Javascript, I have developed the same static website using Typescript.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Javascript" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/work/project23.png",
    live: "https://restaurant-js-arnob.vercel.app/",
    github: "https://github.com/arnobt78/RestaurantJS-NextJS-Website",
  },
  {
    num: "24",
    category: "Frontend",
    title: "RestaurantTS-NextJS-Website",
    description:
      "RestaurantTS App is a NextJS 14 Static Restaurant Landing Page, using React.js, Typescript, Webpack, TailwindCSS, Framer-Motion, TailwindCSS-Animate, Radix-UI, Date-fns, React-Leaflet, Lucide-React, React-Day-Picker, React-Scroll, React-Icons, React-Responsive features and deploy on Vercel. Note: This static webpage is built using Typescript, I have developed the same static webpage using Javascript.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/work/project24.png",
    live: "https://restaurant-ts-arnob.vercel.app/",
    github: "https://github.com/arnobt78/RestaurantTS-NextJS-Website",
  },
  {
    num: "25",
    category: "Frontend",
    title: "AnimeVault-NextJS-Webpage",
    description:
      "Anime-Vault is a NextJS 14 Server Side App with Server Actions, Infinite Scroll, and Framer-Motion Animations, which displays the lists of all anime from Server Side API. This project aims to define, understand, separate, and implement Server Side Actions and Clint Side Actions in NextJS and deploy on Vercel.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/work/project25.png",
    live: "https://anime-vault-arnob.vercel.app/",
    github: "https://github.com/arnobt78/AnimeVault-NextJS-Webpage",
  },
  {
    num: "26",
    category: "Fullstack",
    title: "AI-Chat-Bot-ReactVite-Webpage",
    description:
      "AI-Chat-Bot is a complete project example with OpenAI ChatGPT and React-Vite, using OpenAI API, Emoji-Mart, UUID, and having a Chat History and New Chat Creation features, and deployed on Vercel.",
    stack: [
      { name: "React-Vite" },
      { name: "OpenAI API" },
      { name: "Javascript" },
    ],
    image: "/assets/work/project26.png",
    live: "https://ai-chat-bot-arnob.vercel.app/",
    github: "https://github.com/arnobt78/AI-Chat-Bot-ReactVite-Webpage",
  },
  {
    num: "27",
    category: "Fullstack",
    title: "Weather-ReactVite-Webpage",
    description:
      "Weather App is a React-Vite Weather Project, using OpenWeather API, displays the Weather Status, Temperature, Humidity, Wind of any city in the world, and deployed on Vercel.",  
    stack: [
      { name: "React-Vite" },
      { name: "OpenWeather API" },
      { name: "Javascript" },
    ],
    image: "/assets/work/project27.png",
    live: "https://weather-arnob.vercel.app/",
    github: "https://github.com/arnobt78/Weather-ReactVite-Webpage",
  },
  {
    num: "28",
    category: "Fullstack",
    title: "Quotes-ReactVite-Webpage",
    description:
      "Quotes App is a React-Vite Random Quotes Generator Project, using TheQuote API, displays the random quotes by famous Authors, Philosphers, Artists, or Movies, and saves them in a list as Favorites with delete options and deployed on Vercel.",
    stack: [
      { name: "React-Vite" },
      { name: "TheQuote API" },
      { name: "Javascript" },
    ],
    image: "/assets/work/project28.png",
    live: "https://quotes-arnob.vercel.app/",
    github: "https://github.com/arnobt78/Quotes-ReactVite-Webpage",
  },
  {
    num: "29",
    category: "Fullstack",
    title: "Calendar-ReactVite-Webpage",
    description:
      "Calendar App is a React-Vite Calendar To-Do Event Project, using Calendar, select any day of the month of the year and set the clock hour for the day to remember the event. Also, events can be changed and edited with delete options and deployed on Vercel.",  
    stack: [
      { name: "React-Vite" },
      { name: "Calendar To-Do Clock Event" },
      { name: "Javascript" },
    ],
    image: "/assets/work/project29.png",
    live: "https://calendar-arnob.vercel.app/",
    github: "https://github.com/arnobt78/Calendar-ReactVite-Webpage",
  },
  {
    num: "30",
    category: "Fullstack",
    title: "News-ReactVite-Webpage",
    description:
      "News App is a React-Vite Random Current World Related Live News Project, using GNews API, Axios for the HTTP Client Request, to display the news in different categories in Navbar, display the details in a popup page, read more as a source link, and deploy on Vercel.",    
    stack: [
      { name: "React-Vite" },
      { name: "GNews API" },
      { name: "Javascript" },
    ],
    image: "/assets/work/project30.png",
    live: "https://news-arnob.vercel.app/",
    github: "https://github.com/arnobt78/News-ReactVite-Webpage",
  },
  {
    num: "31",
    category: "Fullstack",
    title: "Translator-ReactVite-Webpage",
    description:
      "Translator App is a React-Vite Language Translator Project, using TailwindCSS, MyMemory API. Select various languages to translate from one another and in reverse order and deploy on Vercel.",
    stack: [
      { name: "React-Vite" },
      { name: "MyMemory API" },
      { name: "Javascript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project31.png",
    live: "https://translator-arnob.vercel.app/",
    github: "https://github.com/arnobt78/Translator-ReactVite-Webpage",
  },
  {
    num: "32",
    category: "Frontend",
    title: "Marketing-TailwindCSS-Templet",
    description:
      "Marketing-TailwindCSS-Templet is a Static React-Vite Frontend Landing Page, using React-Vite, TailwindCSS, Framer-Motion, React-Animate, React-Icons, and deployed on Netlify.",
    stack: [
      { name: "React-Vite" },
      { name: "Framer-Motion" },
      { name: "Javascript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/project32.png",
    live: "https://marketing-arnob.netlify.app",
    github: "https://github.com/arnobt78/Marketing-TailwindCSS-Templet",
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
