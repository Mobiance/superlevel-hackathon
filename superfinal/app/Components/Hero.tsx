import Navbar from './Navbar'
import Image from 'next/image'
import Link from "next/link";


const Hero = () => {
  return (
    <div className='w-screen lg:h-[180vh] h-[130vh] flex flex-col items-center'>
        <Navbar />
        <div className="headings lg:mt-[80px] mt-[40px]  flex flex-col items-center">

          <div id='smheading' className="border-[#333] mb-[20px] border bg-[#212121] px-4 py-2 gap-2 rounded-lg flex items-center justify-center w-fit">
            <div className="lg:w-4 lg:h-4 w-2.5 h-2.5 rounded-full ai-button-gradient ai-button-shadow"></div>
            <p className="lg:text-base text-xs font-bold tracking-normal">Unleashing AI Power for Seamless Translation</p>
          </div>

          <div id='heading' className="flex items-center justify-center mb-[24px]">
            <div id='heading1' className="flex flex-col tracking-tight space-y-2 font-semibold items-center lg:text-[64px] text-3xl leading-[1]">
              <h1 className="">Know Your Blogs</h1>
              <div className="flex justify-center items-center lg:space-x-3 space-x-1.5 ">
                <h1 className="">In Even Better</h1>
                <h1 className="font-denton tracking-tight lg:translate-y-2 translate-y-0.5 ai-button-gradient ai-button-shadow rounded-md px-2 py-1">Languages</h1>
              </div>
            </div>
          </div>

          <div id="subheading" className="text-white/80 lg:text-2xl text-sm font-medium tracking-tight max-w-[48rem] lg:px-0 px-4 text-center mb-[24px]">
          Empower your content with AI-driven transcription, translation, and multilingual blog publishing in 10 Indian languages
          </div>

          <div id="Ctas" className=" flex gap-8  mb-[24px]">
            <Link href="/UploadBlogs" className="capitalize border flex gap-2 border-[#333] bg-[#212121] hover:bg-[#313131] transition ease-in-out duration-300 tracking-tight lg:text-base text-sm font-semibold lg:px-4 px-2.5 lg:py-2 py-1.5 ">
              <p className="">Translate Blogs</p>
              <Image src="/assets/analytics.svg" alt="Insights" width={20} height={20} />
            </Link>
            <div className="capitalize flex gap-2 tracking-tight lg:text-base text-sm font-semibold hover:border-[#313131] border border-[#161616] transition ease-in-out duration-300 cursor-pointer lg:px-4 px-2.5 lg:py-2 py-1.5 ">
              <a href='#videoo' className="">Watch Video</a>
              <Image src="/assets/rightarrow.svg" alt="Insights" width={20} height={20} />
            </div>
          </div>

          <div id="video" className="bg-[#313131]/60 lg:w-[70dvw] w-[90dvw] lg:h-[80dvh] h-[40dvh] lg:mt-[52px] mt-[36px] rounded-3xl backdrop-blur-md flex justify-center items-center">
             <iframe id='videoo' width="560" height="315" className='w-[95%] h-[90%] rounded-2xl ' src="https://www.youtube.com/embed/YtIvbDrF8zw?si=UQdN7LzSeLAxPSH1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>         
          </div>

        </div>
    </div>
  )
}

export default Hero