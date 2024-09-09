"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaJava,
  FaPhp,
  FaStripe,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "3+ years of combined professional experience in Mobile App Development, UI/UX Design, Web Development, and Test Automation. Experience using Java, Angular, JavaScript, HTML, CSS, TypeScript, React, Vue, NodeJS, NextJS, PHP, TailwindCSS, Python, Rest API, Selenium, and MySQL in a work environment. I am open to working as a Frontend Developer/ UI/UX Designer/ Web Developer/ Mobile App Developer/ Software Test Engineer/ Quality Assurance Engineer/ IT Cyber Security.", 
info: [
    {
      fieldName: "Name",
      fieldValue: "Arnob Mahmud",
    },
    {
      fieldName: "Phone",
      fieldValue: "+4915734664351",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "skype",
      fieldValue: "arnob_t78",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "arnob_t78@yahoo.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (C2), German (B1), Bengali (Native), Hindi, Urdu",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With extensive experience as both a software and mobile app developer and a software tester, I excel in creating high-quality, user-friendly applications and ensuring they perform flawlessly. I develop intuitive and robust apps for various platforms, focusing on clean code and seamless user experiences. Simultaneously, I conduct thorough testing to identify and resolve issues, optimizing performance and ensuring that every application meets rigorous quality standards. This dual expertise allows me to deliver reliable, high-performance solutions that enhance user satisfaction.",
  items: [
    {
      company: "Frankfurt University of Applied Sciences, Frankfurt, Germany",
      // location: "Frankfurt, Germany",
      position: "Student Research Assistant",
      duration: "2017 - 2023",
    },
    {
      company: "get it live GmbH, Nedderau, Germany",
      // location: "Nedderau, Germany",
      position: "Mobile Application Developer",
      duration: "November 2015 - June 2016",
    },
    {
      company: "LEADS Corporation Limited, Dhaka, Bangladesh",
      // location: "Dhaka, Bangladesh",
      position: "Software Test Engineer",
      duration: "February 2013 - November 2013",
    },
    {
      company: "Green Generation IT Ltd, Dhaka, Bangladesh",
      // location: "Dhaka, Bangladesh",
      position: "Junior Software Developer",
      duration: "June 2012 - December 2012",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Courses",
  description:
    "I’ve refined my skills in web development through a blend of formal education and practical experience. My journey has centered on mastering both front-end and back-end technologies to create well-rounded digital solutions. I hold a Bachelor's Degree in Computer Science & Engineering from Bangladesh University of Professionals and a Master’s Degree in High Integrity Systems (Informatik) from Frankfurt University of Applied Sciences in Germany.",
    items: [
    {
      institution: "Udemy Online Courses",
      degree: "Advanced NextJS/Framer-Motion Web Development Bootcamp",
      duration: "2024 - Present",
    },
    {
      institution: "Udemy Online Courses",
      degree: "Advanced RecatJS/TailwindCSS Web Development Bootcamp",
      duration: "2023 - 2024",
    },
    {
      institution: "Frankfurt University of Applied Sciences, Frankfurt, Germany",
      degree: "High Integrity Systems (M.Sc.)",
      duration: "2014 - 2024",
    },
    {
      institution: "Military Institute of Science & Technology, Dhaka, Bangladesh",
      degree: "Computer Science & Engineering (B.Sc.)",
      duration: "2008 - 2012",
    },
  ],
};

//skill data
const skills = {
  title: "My Skills",
  description:
    "My experience spans a wide range of technologies, including React (Vite), NextJS (Shadcn UI, Framer-Motion, Next-Auth), Vue, Java (Spring), Angular, JavaScript, TypeScript, and NodeJS (Express, NestJS). I have worked with Stripe, HTML, CSS, TailwindCSS, PHP (Symfony, Laravel), and Python (Flask, Django). I’m also skilled in REST API development, SQL (Firebase, Postgres, MongoDB, Prisma, Mongoose), R, AI Copilot, and various testing frameworks like Playwright, WebdriverIO, Selenium, TestNG, and Cypress. Additionally, I am familiar with deployment platforms such as Netlify, Vercel, and Render. Currently, I am further enhancing my skills through online training.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaStripe />,
      name: "Stripe",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[1000px] text-white/60 text-justify mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-6 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <h3 className=" text-accent">{item.duration}</h3>
                          <h3 className="max-w-[600px]  text-center">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 text-center">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                         {/* <span className=" text-white/60 lg:items-start lg:items-left">{item.location}</span> */}                        
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[1000px] text-white/60 text-justify mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-6 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className=" max-w-[600px] text-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 text-center">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[1000px] text-white/60 text-justify mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[1000px] text-white/60 text-justify mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-600px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
