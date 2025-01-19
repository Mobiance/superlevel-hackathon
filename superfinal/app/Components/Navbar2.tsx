import React from 'react'
import Link from "next/link"


const Navbar2 = () => {
  return (
    <div className="relative w-full flex justify-between items-center px-5 py-6 bg-[#121212] ">
            <Link href="/" className="text-white/80 hover:text-white hover:bg-white/10 px-4 rounded-md py-2 cursor-pointer transition-colors duration-200 lg:block hidden">Back</Link>
        <div className="flex gap-4 p-2 items-center justify-center w-fit border border-zinc-700 rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/UploadBlogs" className="text-white/80 hover:text-white hover:bg-white/10 px-4 rounded-md py-2 cursor-pointer transition-colors duration-200">Translate Text</Link>
            <Link href="/UploadVideo" className="text-white/80 hover:text-white hover:bg-white/10 px-4 rounded-md py-2 cursor-pointer transition-colors duration-200">Upload Video</Link>
            <Link href="/ManageBlogs" className="text-white/80 hover:text-white hover:bg-white/10 px-4 rounded-md py-2 cursor-pointer transition-colors duration-200">Manage Blogs</Link>
            <Link href="#" className="text-white/80 hover:text-white hover:bg-white/10 px-4 rounded-md py-2 cursor-pointer transition-colors duration-200">All Blogs</Link>
        </div>
    </div>
  )
}

export default Navbar2