'use client'
import React from 'react'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const CardsSection = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <div id="heading" className="w-full h-fit space-y-2 lg:px-[140px] px-4 my-20 flex flex-col">
            <h1 className="tracking-tight font-semibold items-center lg:text-[64px] whitespace-nowrap text-3xl leading-[1]">Features that Simplify Blogging</h1>
            <h1 className="font-denton w-fit tracking-tight lg:translate-y-2 translate-y-1 ai-button-gradient ai-button-shadow rounded-md px-2 py-2.5 font-semibold items-center lg:text-[64px] text-3xl leading-[1]">Across Languages</h1>
            <p className="text-white/80 tracking-tight lg:text-2xl text-base lg:pt-5 pt-3">Empowering Your Blogs with AI</p>
        </div>
        <div id="cards" className="w-full h-screen lg:pl-[140px] pl-4 ">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={20}
                slidesPerView="auto"
                className="w-full h-[70%] "
            >
                <SwiperSlide className="lg:!w-[400px] !w-[300px] ">
                    <div id='card1' className="z-[2] overflow-hidden w-full h-full border-2 border-[#333] bg-gradient-to-r from-[#010101] via-[#131313] to-[#010101] flex flex-col px-6 pl-9 pt-10">
                        <div id="iconhead" className="capitalize flex gap-2 text-base font-semibold  py-2 items-center">
                            <Image src="/assets/insight.svg" alt="Insights" width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] ' />
                            <p className=" font-denton text-white/80 lg:text-2xl text-lg lg:h-8 h-6 ">Input Options</p>
                        </div>
                        <div id="title" className=" z-[1]  lg:text-4xl text-2xl font-bold tracking-tight leading-[1.25] mt-5">Direct text input or file uploads</div>
                        <div className=" z-[1] capitalize flex gap-2 w-fit tracking-tight border border-[#333] bg-black/30 backdrop-blur-md font-semibold lg:px-6 px-4 lg:py-4 py-3 mt-5 ">
                            <p className="uppercase tracking-wider lg:text-base text-xs lg:translate-y-0 translate-y-0.5 ">Know More</p>
                            <Image src="/assets/rightarrow.svg" alt="Insights" width={20} height={20} />
                        </div>
                        <div className="w-full h-1/2 absolute  bottom-0 left-0 ">
                            <Image src="/assets/card01.svg" alt="Insights" width={0} height={0} className='w-full overflow-visible h-full object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="lg:!w-[400px] !w-[300px]">
                    <div id='card2' className="z-[2] overflow-hidden w-full h-full border-2 border-[#333] bg-gradient-to-r from-[#010101] via-[#131313] to-[#010101] flex flex-col px-6 pl-9 pt-10">
                        <div id="iconhead" className="capitalize flex gap-2 text-base font-semibold  py-2 items-center">
                            <Image src="/assets/bolt.svg" alt="Insights" width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' />
                            <p className=" font-denton text-white/80 lg:text-2xl text-lg lg:h-8 h-6 ">AI-Powered Transcription</p>
                        </div>
                        <div id="title" className=" z-[1]  lg:text-4xl text-2xl font-bold tracking-tight leading-[1.25] mt-5">Convert Videos to English text. </div>
                        <div className=" z-[1] capitalize flex gap-2 w-fit tracking-tight border border-[#333] bg-black/30 backdrop-blur-md font-semibold lg:px-6 px-4 lg:py-4 py-3 mt-5 ">
                            <p className="uppercase tracking-wider lg:text-base text-xs lg:translate-y-0 translate-y-0.5 ">Know More</p>
                            <Image src="/assets/rightarrow.svg" alt="Insights" width={20} height={20} />
                        </div>
                        <div className="w-full h-1/2 absolute  bottom-0 left-0 ">
                            <Image src="/assets/card02.svg" alt="Insights" width={0} height={0} className='w-full overflow-visible h-full object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="lg:!w-[400px] !w-[300px]">
                    <div id='card3' className="z-[2] overflow-hidden w-full h-full border-2 border-[#333] bg-gradient-to-r from-[#010101] via-[#131313] to-[#010101] flex flex-col px-6 pl-9 pt-10">
                        <div id="iconhead" className="capitalize flex gap-2 text-base font-semibold  py-2 items-center">
                            <Image src="/assets/robo.svg" alt="Insights" width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' />
                            <p className=" font-denton text-white/80 lg:text-2xl text-lg lg:h-8 h-6 ">Multilingual Translation</p>
                        </div>
                        <div id="title" className=" z-[1]  lg:text-4xl text-2xl font-bold tracking-tight leading-[1.25] mt-5">Translate blogs into Indian Languages</div>
                        <div className=" z-[1] capitalize flex gap-2 w-fit tracking-tight border border-[#333] bg-black/30 backdrop-blur-md font-semibold lg:px-6 px-4 lg:py-4 py-3 mt-5 ">
                            <p className="uppercase tracking-wider lg:text-base text-xs lg:translate-y-0 translate-y-0.5 ">Know More</p>
                            <Image src="/assets/rightarrow.svg" alt="Insights" width={20} height={20} />
                        </div>
                        <div className="w-full h-1/2 absolute  bottom-0 left-0 ">
                            <Image src="/assets/card03.svg" alt="Insights" width={0} height={0} className='w-full overflow-visible h-full object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="lg:!w-[400px] !w-[300px]">
                    <div id='card4' className="z-[2] overflow-hidden w-full h-full border-2 border-[#333] bg-gradient-to-r from-[#010101] via-[#131313] to-[#010101] flex flex-col px-6 pl-9 pt-10">
                        <div id="iconhead" className="capitalize flex gap-2 text-base font-semibold  py-2 items-center">
                            <Image src="/assets/workflow.svg" alt="Insights" width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' />
                            <p className=" font-denton text-white/80 lg:text-2xl text-lg lg:h-8 h-6 ">SEO-Optimized Blog</p>
                        </div>
                        <div id="title" className=" z-[1]  lg:text-4xl text-2xl font-bold tracking-tight leading-[1.25] mt-5">Dynamic URLs for each language</div>
                        <div className=" z-[1] capitalize flex gap-2 w-fit tracking-tight border border-[#333] bg-black/30 backdrop-blur-md font-semibold lg:px-6 px-4 lg:py-4 py-3 mt-5 ">
                            <p className="uppercase tracking-wider lg:text-base text-xs lg:translate-y-0 translate-y-0.5 ">Know More</p>
                            <Image src="/assets/rightarrow.svg" alt="Insights" width={20} height={20} />
                        </div>
                        <div className="w-full h-1/2 absolute bottom-0 left-0 ">
                            <Image src="/assets/card04.svg" alt="Insights" width={0} height={0} className='w-full overflow-visible h-full object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default CardsSection
