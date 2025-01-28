import { Link, useNavigate } from "react-router-dom";
import { htmlToText } from 'html-to-text';
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

interface BlogCardProps{
    id:string,
    authorname : string,
    title : string,
    content : string,
    publishedDate : string,
    showEditDelete?: boolean; 
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void; 
}

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const BlogCard = ({id,authorname,title,content,publishedDate,showEditDelete = false,onDelete,onEdit,} : BlogCardProps) => {
 
    const plainTextContent = htmlToText(content, {
        wordwrap: 130,
        selectors: [
          { selector: 'a', options: { ignoreHref: true } },
        ],
    });
  return (
    <>
   
            <div className=" border-b-2 border-slate-200 p-4 pb-4 w-full mb-5 cursor-pointer shadow-lg rounded-xl scroll-smooth  transform transition-all hover:scale-105 hover:shadow-slate-400 hover:duration-300">
                    <div>
                    <Link to={`/blog/${id}`}>
                        <div className=" flex gap-2 items-center">
                            <Avatar size="small" name = {authorname}/>
                            <span className="font-extralight">{authorname}</span>
                            <span className="text-xl mb-[0.65rem] text-slate-500">.</span>
                            <span className="text-slate-500 font-extralight">{formatDate(publishedDate)}</span>
                        </div>
                    
                        <div className="text-2xl font-bold">
                            {title}
                        </div>
                        <div className="font-libre text-sm mt-2">
                            {plainTextContent.slice(0,415)}  .....
                        </div>
                        </Link>
                    </div>
                    {/*<div className="text-slate-500 pt-6 text-sm ">
                            {`${Math.ceil(plainTextContent.length/300)} min read`}
                    </div>*/}
                    <div className="flex justify-between">
                        <div className="text-slate-500 pt-6 text-sm ">
                            {`${Math.ceil(plainTextContent.length/300)} min read`}
                        </div>
                        {showEditDelete && (
                            <div className="flex justify-center gap-14 pt-6 mr-8 items-center">
                               <div className="relative group">
                                    <button
                                      onClick={(e) => {
                                        onDelete && onDelete(id);
                                        e.stopPropagation();
    
                                      }}
                                      className="transition-transform transform hover:scale-125 active:scale-90"
                                    >
                                      <MdDelete  size={"2rem"} />
                                    </button>
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      Delete
                                    </span>
                                  </div>
                                  <div className="relative group">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onEdit && onEdit(id);
                                      }}
                                      className="transition-transform transform hover:scale-125 active:scale-90"
                                    >
                                      <AiFillEdit  size={"2rem"} />
                                    </button>
                                    
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      Edit
                                    </span>
                                  </div>
                            </div>
                          )}

                    </div> 
                    
            </div>
    </>
  )
}


export const Avatar = ({ name, size = "small" }: { name: string; size: "small" | "big" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative cursor-pointer">
      <div
        className={`relative font-extrabold inline-flex items-center justify-center overflow-hidden bg-black rounded-full ${size === "small" ? "w-6 h-6" : "w-11 h-11"}`}
        onClick={toggleDropdown}
      >
        <span className={`font-medium text-white  ${size === "small" ? "text-xs" : "text-2xl"}`}>
          {name[0]}
        </span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-500 border border-black-500 rounded-lg shadow-lg">
          <ul className="list-none p-2">
            <li>
              <button
                onClick={() => {
    
                  navigate('/signin');
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  alert("Logged out!");
                  setIsOpen(false); 
                }}
                className="w-full text-white font-bold px-4 py-2 hover:bg-gray-600  bg-gray-500 rounded-md  hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Log Out
              </button>
              
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

