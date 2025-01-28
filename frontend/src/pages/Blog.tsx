import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { AppBar } from "../components/AppBar";
import { FullBlogCard } from "../components/FullBlogCard";
import { FullBlogCardSkeleton } from "../components/Skeleton";



export const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const { blog, loading } = useBlog({
    id: id || ""
  });
  return (
    <div>
        <AppBar/>
  
        <div>
          {loading ? (
              <div><FullBlogCardSkeleton/></div>
          ) : blog ? (
              <FullBlogCard blog={blog}/>
          ) : (
              <div className="flex mt-40  justify-center text-4xl font-extrabold">Blog not found !!</div>
          )}
        </div>
    </div>
  )
}
