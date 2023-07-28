'use client';
import Image from "next/image";
import { useTheme } from "next-themes"
import Link from "next/link"
import {FaMoon} from "react-icons/fa"
import {HiSun} from "react-icons/hi"
import logo from "../../public/Logo.svg"

const links = [{
  label: 'Inicio',
  ref: '/'
},{
  label: 'Sobre mi',
  ref: '/about'
},{ 
  label: 'Contacto',
  ref: '/contact'
},{ 
  label: 'Proyectos',
  ref: '/projects'
}]


  

export default function HeaderComp() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
    <header className="h-14 flex-column drop-shadow-xl bg-slate-50 dark:bg-slate-950 z-50">
        <ul className="relative flex flex-nowrap flex-row justify-end mx-32 min-h-full">
        <span className="absolute bottom-1 left-0 z-10 grid h-12 w-12 cursor-pointer place-content-center " >
          <Link href={'/'}><Image alt="Inicio" src={logo}/></Link>
        </span>
          {links.map(({label,ref}) => (
            <li key={label} className="my-auto ml-4">
              <Link href={ref}>{label}</Link>
            </li>
          ))}
        </ul>
        <span className="group absolute -bottom-6 left-1/2 z-10 grid h-12 w-12 -translate-x-1/2 cursor-pointer place-content-center rounded-full bg-slate-50 dark:bg-slate-950 " onClick={handleThemeChange}>
          <span className="text-2xl text-darkBlue duration-300 group-hover:scale-125 group-hover:text-yellow-500 dark:text-whiteText">{theme === "light" ? <HiSun/> : <FaMoon/> }</span>
        </span>
        
    </header>
    </>
)}
