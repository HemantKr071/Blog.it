
import { BlogCard } from '../components/BlogCard'
import { AppBar } from '../components/AppBar'
import {useBlogs} from '../hooks'
import { BlogCardSkeleton } from '../components/Skeleton';
import { useState } from 'react';
import CircularPagination from '../components/Pagination';

export const Blogs = () => {
  const [pageNumber,setPageNumber] = useState(1);
  const pageSize = 5; 

  const {blogs,loading,totalBlogs,totalPages} = useBlogs({pageNumber,pageSize});

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div>
        <AppBar/>
        <div className='flex justify-center w-full items-center min-h-screen'>
           {loading ? (
                <div className='flex flex-col justify-center items-center w-full max-w-4xl'>
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
              </div>
           ) : 
           
           <div className='w-full max-w-4xl'>
             {blogs.map((blog) => (
                <BlogCard
                   key={blog.id}
                   id={blog.id}
                   authorname={blog.author.name}
                   title={blog.title}
                   content={blog.content}
                   publishedDate={blog.createdAt}
                />
             ))}
             <div className="flex justify-center mt-8">
              <CircularPagination
                totalBlogs={totalBlogs}
                totalPages={totalPages}
                currentPage={pageNumber}
                onPageChange={handlePageChange}
              />
            </div>

           </div>}

        </div>
    </div>
  )
}
