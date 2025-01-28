import '../App.css';

export const FullBlogCardSkeleton = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
          <div className="col-span-8">
            <div className="h-10 w-3/4 mb-4 bg-gray-200 shimmer"></div>
            <div className="h-4 w-1/2 mb-2 bg-gray-200 shimmer"></div>
            <div className="h-96 w-full mb-4 bg-gray-200 shimmer"></div>
          </div>
          <div className="pl-10 text-lg col-span-4">
            <h2 className="h-6 w-1/2 mb-4 bg-gray-200 shimmer"></h2>
            <div className="flex items-center mt-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 shimmer"></div>
              <div className="h-10 ml-4 w-3/4 mb-2 bg-gray-200 shimmer"></div>
              
              <div className="ml-4">
                <div className="h-10 w-3/4 mb-2 bg-gray-200 shimmer"></div>
                <div className="h-4 w-1/2 bg-gray-200 shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogCardSkeleton = () => {
    return (
      <div className="border-b-2 border-slate-200 p-4 pb-4 w-full cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 shimmer"></div>
          <div className="h-4 w-1/4 bg-gray-200 shimmer"></div>
          <span className="text-xl mb-[0.65rem] text-slate-500">.</span>
          <div className="h-4 w-1/4 bg-gray-200 shimmer"></div>
        </div>
        <div className="text-2xl font-bold mt-4 h-6 w-3/4 bg-gray-200 shimmer"></div>
        <div className="font-libre text-sm mt-2 h-28 w-full bg-gray-200 shimmer"></div>
       
      </div>
    );
  };