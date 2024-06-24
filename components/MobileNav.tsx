"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet"
import { CiMenuFries } from "react-icons/ci";

const Links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]


const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent "/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1>Guido<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {Links.map((link, index)=> (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}></Link>
                ))}
            </nav>
        </SheetContent>
        </Sheet>
    )    
}

export default MobileNav