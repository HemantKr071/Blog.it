
import { BlogCard } from '../components/BlogCard'
import { AppBar } from '../components/AppBar'
import { BlogCardSkeleton } from '../components/Skeleton';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { useMyBlogs } from '../hooks';
import { useState } from 'react';
import DeleteModal from '../components/DeleteModal';

export const MyBlogs = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const {blogs,loading,setBlogs} = useMyBlogs();
  const navigate = useNavigate();
  
  const handleDeleteClick = (id: string) => {
    setSelectedBlogId(id);
    setIsOpen(true);
  };

  const deleteBlog = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BACKEND_URL}/api/v1/blog/delete/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      alert("Blog deleted Successfully");
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      setIsOpen(false);
      setSelectedBlogId(null);
    
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const editBlog = (id: string) => {
    const blog = blogs.find((blog) => blog.id === id);
    if (blog) {
      localStorage.setItem('title', JSON.stringify(blog.title));
      localStorage.setItem('content', JSON.stringify(blog.content));

       navigate(`/edit-blog/${id}`);
    }
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
                   showEditDelete={true}
                   onDelete={handleDeleteClick}
                   onEdit={editBlog}
                />
             ))}

           </div>}

        </div>
        {isOpen && selectedBlogId && (
        <DeleteModal setisOpen={setIsOpen} onDelete={deleteBlog} blogId={selectedBlogId} />
      )}
    </div>
  )
}
