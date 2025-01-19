import Link from "next/link";


const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center lg:px-[140px] px-4 py-4 lg:pt-20 pt-12">
            <div className="bg-clip-text h-[3.3rem]  tracking-tight font-denton lg:text-5xl text-2xl text-transparent bg-[linear-gradient(-145deg,_#fcfcfc_0%,_#999999_43%,_#fcfcfc_100%)] colorshadow ">
                B for Blogs
            </div>
            <Link href="/UploadBlogs" className="capitalize border border-[#333] bg-[#212121] hover:bg-[#313131] button transition ease-in-out duration-300 tracking-tight lg:text-xl text-sm font-semibold lg:px-6 lg:py-3 px-3 py-1">
                <Link href="/UploadBlogs">
                    translate Blogs
                </Link>
            </Link>
        </div>
    )
}

export default Navbar;
