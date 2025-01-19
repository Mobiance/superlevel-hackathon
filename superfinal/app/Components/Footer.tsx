import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full lg:h-screen h-fit flex flex-col items-center justify-end mt-14 lg:mt-0'>
        <div className="border-b-0 border-2 rounded-t-[52px] bg-[#212121] border-[#333] lg:w-[80vw] lg:h-[80vh] w-[90%] h-[90%] flex flex-col justify-end items-center gap-10  ">
            <div id="meettheteam" className=" w-full lg:h-[35%] h-fit pt-12 flex flex-col lg:px-14  space-y-4">
                <div className="flex lg:gap-4 gap-2 pl-6 lg:pl-0 w-fit h-fit items-center lg:text-xl text-white/80 font-denton">
                    <Image
                        src="/assets/team.svg"
                        alt="Beam Middle"
                        width={40}
                        height={40}
                        className="opacity-80 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] "
                    />
                    Meet the Team
                </div>
                <div className=" w-full h-full grid lg:grid-cols-2 grid-cols-1">
                    <div className="border-t border-l w-full h-full border-[#313131] flex px-10 gap-x-4 items-center">
                        <div className="lg:h-[64px] lg:w-[64px] w-[52px] h-[52px] my-1  rounded-full">
                            <Image
                                src="/assets/sahil.jpg"
                                alt="Sahil's profile picture"
                                width={64}
                                height={64}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='text-lg font-semibold'>Sahil Kshirsagar</h1>
                            <h1 className='text-sm text-white/80'>Full stack developer</h1>
                        </div>
                    </div>
                    <div className="border border-b-0 w-full h-full border-[#313131] flex px-10 gap-x-4 items-center">
                        <div className="lg:h-[64px] lg:w-[64px] w-[52px] h-[52px] my-1 lg:my-0 rounded-full transition ease-in-out duration-500 hover:scale-[5] hover:rotate-[2520deg] ">
                        <Image
                                src="/assets/sharma2.jpg"
                                alt="Sahil's profile picture"
                                width={64}
                                height={64}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='text-lg font-semibold'>Shubham Sharma</h1>
                            <h1 className='text-sm text-white/80'>Backend developer</h1>
                        </div>
                    </div>
                    <div className="border border-r-0 w-full h-full border-[#313131] flex px-10 gap-x-4 items-center">
                        <div className="lg:h-[64px] lg:w-[64px] w-[52px] h-[52px] my-1 lg:my-0 rounded-full">
                        <Image
                                src="/assets/prithvi.jpg"
                                alt="Sahil's profile picture"
                                width={64}
                                height={64}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='text-lg font-semibold'>Prithviraj Daud</h1>
                            <h1 className='text-sm text-white/80'>UI/UX designer</h1>
                        </div>
                    </div>
                    <div className="border w-full h-full border-[#313131] flex px-10 gap-x-4 items-center">
                        <div className="lg:h-[64px] lg:w-[64px] w-[52px] h-[52px] my-1 lg:my-0 rounded-full">
                        <Image
                              src="/assets/varad.png"
                              alt="Sahil's profile picture"
                              width={64}
                              height={64}
                              className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='text-lg font-semibold'>Varad Puranik</h1>
                            <h1 className='text-sm text-white/80'>Frontend Developer</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-1/2 overflow-hidden">
            <Image
                src="/assets/Team name.svg"
                alt="Beam Middle"
                width={0}
                height={0}
                className="lg:w-full lg:h-full w-full h-1/2 "
            />
            </div>
        </div>
    </div>
  )
}

export default Footer
