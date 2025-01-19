import React from 'react'

const QuoteSection = () => {
  return (
    <div className='relative w-full h-[80vh] flex flex-col items-center justify-center lg:gap-y-20 gap-y-14'>
        <div className='absolute inset-0 bg-[url("/assets/pathbg.svg")] bg-cover bg-center opacity-10 z-0'></div>
        <h1 className="z-10 lg:text-8xl text-4xl tracking-tight capitalize font-semibold lg:max-w-[46rem] max-w-80 text-center mix-blend-difference ">Master the odds, make it happen</h1>
        <p className="z-10 lg:text-xl lg:px-0 px-4 text-center max-w-[46rem] font-semibold text-white/80 tracking-tight mix-blend-difference ">with every challenge conquered and every possibility explored, take control of your journey and create the future you envision.</p>
    </div>
  )
}

export default QuoteSection