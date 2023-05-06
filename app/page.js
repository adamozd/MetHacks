import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500">
      {/* Simple Login page */}
      <div className="w-full max-w-md p-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Login to Your Account</h2>
        </div>
        <div className='flex flex-col gap-5'>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input type="email" id="email" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-300 focus:ring
              focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input type="password" id="password" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-300 focus:ring
                focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="flex flex-col gap-2">
            <button type="submit" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-300 focus:ring 
                    focus:ring-blue-200 focus:ring-opacity-50">Login</button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-center">Don't have an account? <a href="/register" className="text-blue-500 hover:text-blue-700">Register</a></p>
          </div>
      </div>
    </div>
    </main >
  )
}
