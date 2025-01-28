/*import  { useState } from 'react';
import useBlogs from '../hooks';

interface Blog {
  id: number;
  title: string;
  content: string;
}

const BlogList = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { loading, blogs, totalPages }: { loading: boolean; blogs: Blog[]; totalPages: number } = useBlogs(page, pageSize);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li key={blog.id} className="p-4 border rounded shadow">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p>{blog.content}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;*/