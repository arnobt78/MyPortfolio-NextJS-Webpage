"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web / Mobile Development",
    description:
      "Experienced web developer with a focus on crafting responsive, user-friendly websites and scalable web applications. Dedicated to delivering clean code and innovative solutions that are customized to meet your business needs.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI / UX Design",
    description:
      "Creative UI/UX designer dedicated to crafting intuitive and visually appealing digital experiences. I translate user insights into seamless, engaging designs that enhance interaction and satisfaction.",
    href: "/contact",
  },
  // {
  //   num: "03",
  //   title: "Mobile App Development",
  //   description:
  //     "Skilled mobile app developer specializing in iOS and Android, I deliver high-performance mobile and web apps tailored to your needs. I transform ideas into fully functional, user-centric applications with sleek interfaces and strong backend solutions.",
  //     href: "/contact",
  // },
  {
    num: "03",
    title: "QA Test Automation",
    description:
      "Detail-oriented Software Testing (QA) Engineer with expertise in ensuring high-quality software through rigorous testing. I specialize in identifying defects, optimizing performance, and ensuring that applications meet user requirements. I’m committed to delivering reliable, bug-free solutions that enhance user satisfaction and drive business success.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Cyber Security",
    description:
      "Focused on safeguarding digital assets and systems from cyber threats. I excel in implementing robust security measures, monitoring vulnerabilities, and developing strategies to protect sensitive information. My commitment is to ensure the integrity, confidentiality, and availability of your data, providing peace of mind and robust protection against evolving cyber threats.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top  */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description  */}
                <p className="text-white/60 text-justify">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
