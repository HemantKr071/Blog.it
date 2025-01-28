import { FaRegPenToSquare } from "react-icons/fa6";
import { Avatar } from './BlogCard'
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { MdOutlineArticle } from "react-icons/md";

export const AppBar = () => {
  const {user} = useUserContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/myblogs');
  }
  return (
    <div className='border-b-2 border-slate-200 flex justify-between px-10 py-3 shadow-lg'>
      <Link to={'/'}>
          <div className='font-bold text-2xl pt-2 flex items-center justify-center font-libre'>
              Blog it.
          </div>
        </Link>
        <div className='flex items-center gap-14'>
          
           <button onClick={handleClick} className=" flex justify-center gap-1 items-center h-10  p-4 font-medium   hover:bg-slate-100 border-0 rounded-md">
             <MdOutlineArticle size="1.7rem" /> My Blogs
           </button>
          <Link to={`/publish`}>
            <div className="flex items-center justify-center p-3 gap-3 group hover:text-black hover:bg-slate-100 rounded-md">
                <FaRegPenToSquare className="font-light  group-hover:text-black" size="1.7rem"/>
                <p className="text-xl  font-extralight group-hover:text-black">Write</p>
            </div>
          </Link>
            <Avatar size="big" name={user?.name[0] || ''}/>
        </div>
    
    </div>
  )
}
