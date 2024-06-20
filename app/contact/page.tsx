"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+54 9 223 5185924"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "guidocontartese90@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "guidocontartese90@gmail.com"
  },
]


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Let&apos;s Work Togheter </h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ipsam similique eius perferendis distinctio incidunt veritatis, aut suscipit porro consequatur ut numquam?
                Odio facere totam, nihil quos exercitationem ipsum doloribus!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UX/UI Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Typre your message here."
              />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                 return (
                  <li key={index} className="flex items-center gap-6">
                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                     </div>
                     <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                     </div>
                  </li>
                 )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact