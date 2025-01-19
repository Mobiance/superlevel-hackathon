import React from 'react'
import Navbar2 from "../Components/Navbar2";


const page = () => {
  return (
    <div>
        <Navbar2 />
        <div className="w-full h-full flex flex-col items-center px-5 py-10 gap-8">
            <h1 className="text-3xl font-semibold text-white/80">Blog Management</h1>
            
            <div className="w-full max-w-6xl">
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#212121] border-b border-[#333]">
                                <th className="text-left p-4 text-white/80">Title</th>
                                <th className="text-left p-4 text-white/80">Language</th>
                                <th className="text-left p-4 text-white/80">Language Accuracy</th>
                                <th className="text-left p-4 text-white/80">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example row - This would typically be mapped from data */}
                            <tr className="border-b border-[#333] hover:bg-[#212121]">
                                <td className="p-4 text-white/80">Sample Blog Post</td>
                                <td className="p-4 text-white/80">Hindi</td>
                                <td className="p-4 text-white/80">95%</td>
                                <td className="p-4">
                                    <div className="relative group">
                                        <select className="px-4 py-2 text-white/80 hover:text-white bg-[#212121] border border-[#333] rounded-md focus:outline-none cursor-pointer">
                                            <option value="" disabled selected>Actions</option>
                                            <option value="edit" className="px-4 py-2 text-white/80 hover:bg-[#313131] hover:text-white">Edit</option>
                                            <option value="update" className="px-4 py-2 text-white/80 hover:bg-[#313131] hover:text-white">Update</option>
                                            <option value="delete" className="px-4 py-2 text-white/80 hover:bg-[#313131] hover:text-white">Delete</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page