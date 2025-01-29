import React, { useState, useEffect } from 'react';
import { AppBar } from '../components/AppBar';
import { PublishButton } from '../components/Button';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ProgressLoader } from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Publish = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // If user is on edit page id of the blog is in params
  const { id } = useParams<{ id: string }>() || null; 
  const navigate = useNavigate();
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{'font':[]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'code-block'],
      [{ 'color': [] }],
      [{ 'align': ['right','center','justify'] }], 
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'align',
    'link', 'image', 'code-block', 'color' 
  ];

  // Load the saved title and content from localStorage when the component mounts
  useEffect(() => {
    const savedTitle = localStorage.getItem('title');
    const savedContent = localStorage.getItem('content');
    if (savedTitle) {
      setTitle(savedTitle);
    }
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save the title to localStorage whenever it changes
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setTitle(value);
    localStorage.setItem('title', value);
  };

  // Save the content to localStorage whenever it changes
  const handleContentChange = (value: string) => {
    setContent(value);
    localStorage.setItem('content', value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }

      const blogData = { title, content };
      if (id) {
        // Update the blog if editing
        const response = await axios.put(`${BACKEND_URL}/api/v1/blog/update/${id}`, blogData, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        alert("Blog Updated !!");
        navigate(`/blog/${id}`)
        console.log('Blog published:', response.data);
      
      } else {
        // Create a new blog if not editing
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, blogData, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        alert("Blog Published !!");
        navigate(`/blog/${response.data.id}`)
        console.log('Blog published:', response.data);
      }
     
      // Clear localStorage after successful submission
      localStorage.removeItem('title');
      localStorage.removeItem('content');

    } catch (error) {
      console.error('Error publishing blog:', error);
      setError('Error publishing blog');
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div>
      <AppBar />
      <div className="mx-auto mt-8 flex flex-col gap-20 justify-center items-center">
      <textarea
          className="py-3 font-libre  px-4 md:text-xl text-sm block w-3/4 bg-slate-100 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-blue-500"
          placeholder="Title : Write the Name of the Topic You Want to Talk About..."
          value={title}
          onChange={handleTitleChange}
        ></textarea>
        
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={handleContentChange}
          placeholder="Write your Blog ..."
          className="h-[25rem] w-[80%] md:my-4 my-5"
        />

        {error && <div className="text-red-500">{error}</div>}
        <PublishButton type={id ? "Update" : "Publish"} onClick={handleSubmit} />
        {loading && <ProgressLoader />}
      </div>
    </div>
  );
};
