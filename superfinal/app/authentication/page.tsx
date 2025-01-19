import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-[#121212]'>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <div className="bg-[#212121] p-8 rounded-lg border border-[#333] w-full max-w-md shadow-lg hover:border-[#444] transition-all duration-300">
          <div className="flex items-center justify-center mb-2">
            <h1 className="text-3xl font-bold text-center text-white">Sign Up</h1>
          </div>
          
          <p className="text-white/60 text-center mb-8">Create an account to get started</p>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="userid" className="text-white/80 font-medium">User ID</label>
              <input 
                type="text"
                id="userid"
                className="w-full px-4 py-3 bg-[#161616] border border-[#333] rounded-md focus:outline-none focus:border-white placeholder:text-white/30 text-white/80 transition-colors"
                placeholder="Choose a user ID"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-white/80 font-medium">Password</label>
              <input
                type="password"
                id="password" 
                className="w-full px-4 py-3 bg-[#161616] border border-[#333] rounded-md focus:outline-none focus:border-white placeholder:text-white/30 text-white/80 transition-colors"
                placeholder="Create a strong password"
              />
              <p className="text-xs text-white/50 mt-1">Password must be at least 8 characters long</p>
            </div>

            <button className="w-full mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:opacity-90 transition-all duration-300">
              Create Account
            </button>

            <p className="text-center text-white/60 text-sm">
              Already have an account? 
              <a href="/login" className="text-white underline hover:text-white/80 ml-1 transition-colors">
                We don't have a Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page