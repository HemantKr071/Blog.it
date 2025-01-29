import { Blog } from "../hooks"
import { Avatar } from "./BlogCard";
import ReactHtmlParser from 'react-html-parser';

export const FullBlogCard = ({blog} : {blog : Blog}) => {
  return (
    <div>
        <div className="flex justify-center">
            <div className="grid md:grid-cols-12 grid-cols-1 px-10 w-full pt-12 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="md:text-5xl text-4xl font-extrabold font-roboto">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 md:text-xl text-lg pt-6">
                        Posted on {formatDate(blog.createdAt)}
                    </div>
                    <div className="font-roboto pt-4">
                        {ReactHtmlParser(blog.content)}
                    </div>

                </div>
                <div className="pl-10 md:mt-1 mt-4 text-lg col-span-4">
                    Author
                    <div className="flex justify-center items-center">
                        <div>
                           <Avatar name={blog.author.name} size="big"/>
                        </div>
                        
                        <div>
                            <div className="text-2xl pt-2 pl-6 font-bold">
                                {blog.author.name}
                            </div>
                            
                            <div className="text-slate-500 pt-2 pl-6 ">
                                <h3 className="font-bold"> Thanks for reading! </h3>
                                I hope you enjoyed the blog. Stay connected for more exciting posts, and feel free to share your thoughts!
                            </div>
                        </div>
                    </div>
                    
                </div>
                

            </div>
        </div>
    </div>
  )
}

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
