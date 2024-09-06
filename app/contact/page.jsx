// "use client";

// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "+4915734664351",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "arnob_t78@yahoo.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Address",
//     description: "Riedstr. 2, 60388 Frankfurt am Main, Germany",
//   },
// ];

// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2, duration: 0.4, ease: "easeIn" },
//       }}
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">

//           {/* form */}
//           <div className="xl:w-[60%] order-2 xl:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
//               <p className="text-white/60 text-justify">
//               Having recently completed my master’s degree, I am excited to begin my career in Germany or elsewhere in Europe and am open to Intern, Part-Time, or Full-Time opportunities. I am also willing to relocate as needed. I am enthusiastic about the chance to apply my skills and grow within your company. I am open to discussing a starting salary at minimum wage, with my primary focus being on gaining valuable experience and further developing my expertise.
//               </p>

//               {/* input */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="Firstname" />
//                 <Input type="lastname" placeholder="Lastname" />
//                 <Input type="email" placeholder="Email address" />
//                 <Input type="phone" placeholder="Phone number" />
//               </div>

//               {/* select */}
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a Service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Select a Service</SelectLabel>
//                     <SelectItem value="est">Web Developement</SelectItem>
//                     <SelectItem value="cst">UI/UX Design</SelectItem>
//                     <SelectItem value="mst">Bug Fixing</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               {/* textarea */}
//               <Textarea
//                 className="h-[200px]"
//                 placeholder="Type your message here."
//               />

//               {/* btn */}
//               <Button size="md" className="max-w-40">
//                 Send Message
//               </Button>
//             </form>
//           </div>

//           {/* info */}
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:[72px] xl:[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                       <div className="text-[28px] ">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60">{item.title}</p>
//                       <h3 className="text-xl">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

"use client";

import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+4915734664351",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arnobt78@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Riedstr. 2, 60388 Frankfurt am Main, Germany",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    // lastname: '',
    email: '',
    // phone: '',
    // service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  // const handleSelectChange = (value) => {
  //   console.log('Selected value:', value); // Debugging line
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     service: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
    setFormData({fullname: '', email: '', message: ''});
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit} 
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
              Having recently completed my master’s degree, I am excited to begin my career in Germany or elsewhere in Europe and am open to Intern, Part-Time, or Full-Time opportunities. I am also willing to relocate as needed. I am enthusiastic about the chance to apply my skills and grow within your company. I am open to discussing a starting salary at minimum wage, with my primary focus being on gaining valuable experience and further developing my expertise.
              </p>
              <div className="grid  gap-6">
                <Input
                  type="text"
                  name="fullname"
                  placeholder="First & Last Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  
                />
                {/* <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                /> */}
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {/* <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                /> */}
              </div>
              {/* <Select
                name="service"
                onValueChange={handleSelectChange}
                defaultValue={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Apk Development">Apk Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type Your Message Here."
                value={formData.message}
                onChange={handleChange}
              />
              
              <Button size="md" className="max-w-40" type="submit">
                Send Message
                
              </Button>
            </form>
          </div>
          
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
