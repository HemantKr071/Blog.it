import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext"


export const Hero = () => {
    const navigate = useNavigate();
    const {user} = useUserContext();
    const handleClick = ()=> {
        if(user){
            navigate('/blogs')
        }
        else{
            navigate('/signup');
        }
    }
  return (
    <div className="flex flex-col gap-7 mt-48 items-center justify-center max-w-3xl">
        <div className="bg-black text-sm flex justify-center items-center text-white p-4 w-40 h-5 border rounded-l-2xl rounded-r-2xl">
            Welcome to Blog it.

        </div>
       
        <div className="md:text-6xl text-4xl whitespace-nowrap font-bold">
            Write. Share. Inspire
        </div>
        <div className="text-slate-600 text-xl font-light text-center ">
            Your thoughts deserve a beautiful space. Start writing your story today with our minimalist blogging platform.
        </div>
        <button onClick={handleClick} className="bg-black w-36 h-11 text-white text-sm flex justify-center items-center p-5 border rounded-md hover:shadow-lg hover:shadow-slate-500">
            Start Writing
        </button>
       

    </div>
  )
}
