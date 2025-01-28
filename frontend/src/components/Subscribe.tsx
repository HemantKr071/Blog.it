

export const Subscribe = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col justify-center items-center gap-7 py-20">
        <h3 className="text-3xl font-bold"> Stay Inspired </h3>
        <div className="text-slate-600 font-light ">
            Get weekly writing tips and inspiration delivered to your inbox.
        </div>
        
        <div className="flex justify-center w-full max-w-lg px-6 gap-3">
          <form className="flex flex-col sm:flex-row gap-4 w-full h-11  max-w-lg mx-auto border border-slate-400 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm p-2 flex-grow border border-slate-300 rounded-md focus:border-black  focus:outline-none"
            />
            </form>
            
            <button className="bg-black w-32 text-white hover:bg-gray-900 text-sm flex justify-center items-center p-2 border rounded-md">
              Subscribe
            </button>
        </div>

    </div>
  )
}
