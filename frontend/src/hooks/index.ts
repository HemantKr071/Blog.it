import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
   content : string,
   title : string,
   id : string,
   author : {
    name:string
   }
   createdAt: string;
}
// Fetch all Blogs
export const useBlogs = ({pageNumber,pageSize} : {pageNumber : Number,pageSize?:Number}) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalBlogs,setTotalBlogs] = useState(0);
  const [totalPages,setTotalPages] = useState(0);

  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found");
          navigate('/signin'); // Redirect to login page if token is not found
          return;
        }
        
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk?page=${pageNumber}&pageSize=${pageSize}`, {
          headers:{
            authorization:`Bearer ${token}`,
          },
        });
        
        setBlogs(response.data.blogs);
        setTotalBlogs(response.data.totalBlogs);
        setTotalPages(response.data.totalPages);
      
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [pageNumber,pageSize]);

  return { loading, blogs,totalBlogs,totalPages};
};

// Fetch a blog by id
export const useBlog = ({id} : {id : string}) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found");
          navigate('/login'); // Redirect to login page if token is not found
          return;
        }
        
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers:{
            authorization:`Bearer ${token}`,
          },
        });
        
        setBlog(response.data.blog);
      
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  return { loading, blog};
};

// Fetch all Blogs of a user
export const useMyBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found");
          navigate('/signin'); // Redirect to login page if token is not found
          return;
        }

        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/myblogs`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [navigate]);

  return { loading, blogs, setBlogs };
};
