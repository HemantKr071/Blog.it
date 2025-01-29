import { Link } from "react-router-dom"

interface FeaturedCardProps{
    date:string,
    readTime:string,
    title:string,
    content:string,
    author:string
}


export const FeaturedCard = ({date,readTime,title,content,author} : FeaturedCardProps) => {
  return (
    <Link to={'/blogs'}>
        <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 hover:shadow-slate-400 hover:duration-300">
          <span className="text-xs font-medium text-gray-500 mb-2 block">
            {date} · {readTime} read
          </span>
          <h3 className="text-xl font-semibold mb-2 hover:text-gray-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{content}</p>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
            <span className="text-sm text-gray-600">{author}</span>
          </div>
        </div>
    </Link>
  );
}
