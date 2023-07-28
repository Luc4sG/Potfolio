import Image from "next/image";



export default function AboutPage() {
  return (
    <>

    <div className=" z-50 mx-auto my-20 flex w-10/12 max-w-maxMobileWidth flex-col gap-12 md:my-16 lg:max-w-maxDesktopWidth lg:flex-row-reverse">
      <div className=" flex basis-1/2 items-center justify-center overflow-hidden rounded-full">
      
      </div>
      <div className=" flex basis-1/2 flex-col justify-center gap-8 lg:items-start">
        <h1 className="animate-fade-down text-center  text-4xl font-bold text-darkBlue animate-delay-0 animate-normal animate-duration-[600ms] animate-once animate-ease-linear dark:text-whiteText lg:text-left lg:leading-tight lg:tracking-tighter xl:text-5xl">
        Hola, Mi nombre es Lucas Gauna. <br/> 
       <span className="inline bg-gradient-to-r from-[#FDB935] from-15% via-[#5127b1] to-[#6427B1]  bg-clip-text text-transparent">Fullstack Developer</span>
        </h1>
        <p className="mx-auto w-11/12 animate-fade-right text-center font-overpass text-sm font-semibold tracking-tighter text-darkBlue animate-delay-0 animate-normal animate-duration-[600ms] animate-once animate-ease-linear dark:text-whiteText lg:w-full lg:text-left lg:text-base lg:tracking-tight">
        descripcion 
        <span className="text-emerald-400">skils</span>
        descripcion
        </p>
        {/* <div className="flex animate-jump-in justify-center gap-6 animate-delay-0 animate-normal animate-duration-[600ms] animate-once animate-ease-linear xl:gap-4">
     <a download="" target="_blank" className="group relative z-20 flex h-max w-max items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 from-20% via-sky-400 via-50% to-indigo-400 to-90% before:absolute before:inset-[2px] before:rounded-[6px] before:bg-white after:absolute after:inset-0 after:bg-gradient-to-br after:from-emerald-400 after:from-20% after:via-sky-400 after:via-50% after:to-indigo-400 after:to-90% after:opacity-0 after:blur-md hover:before:opacity-80 hover:before:duration-300 hover:after:opacity-100 hover:after:duration-300 before:dark:bg-slate-700" href="https://drive.google.com/uc?export=download&amp;id=1kkErTrIP2BHT1E6nKflhUAkdEz4gqjDM">
     <span className="relative z-20 px-3 py-2 text-center font-hindvadodara text-sm font-bold tracking-wide text-darkBlue duration-300 group-hover:text-whiteText dark:text-whiteText">
    Download CV
    </span>
    </a>
    <a className="group relative flex h-max w-max items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 from-20% via-sky-400 via-50% to-indigo-400 to-90% before:absolute before:inset-[2px] before:rounded-[6px] before:bg-white after:absolute after:inset-0 after:bg-gradient-to-br after:from-emerald-400 after:from-20% after:via-sky-400 after:via-50% after:to-indigo-400 after:to-90% after:opacity-0 after:blur-md hover:before:opacity-80 hover:before:duration-300 hover:after:opacity-100 hover:after:duration-300 before:dark:bg-slate-700" href="/">
    <span className="relative z-20 px-3 py-2 font-hindvadodara text-sm font-bold tracking-wide text-darkBlue duration-300 group-hover:text-whiteText dark:text-whiteText">
    Online CV
    </span>
    </a> */}
        </div>
      </div>

    </>
  )
}