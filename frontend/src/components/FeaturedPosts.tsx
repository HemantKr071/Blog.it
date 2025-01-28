import { FeaturedCard } from "./FeaturedCard";
const posts = [
    {
      title: "The Art of Minimalist Writing",
      content: "Discover how simplicity in writing can lead to more impactful communication and better engagement with your readers.",
      author: "Sarah Chen",
      date: "Mar 15, 2024",
      readTime: "5 min",
    },
    {
      title: "Finding Your Voice",
      content: "Every writer has a unique voice. Learn how to discover and develop yours through consistent practice and self-reflection.",
      author: "Hemant",
      date: "Mar 14, 2024",
      readTime: "4 min",
    },
    {
      title: "Writing in the Digital Age",
      content: "Explore how technology has transformed the way we write and share our stories with the world.",
      author: "Alex Rivera",
      date: "Mar 13, 2024",
      readTime: "6 min",
    },
  ];

export const FeaturedPosts = () => {
  return (
    <div className="mt-48 px-28 py-20">
        <h1 className="flex justify-center mb-12 text-3xl font-bold">
            Featured Stories
        </h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FeaturedCard key={index} {...post} />
          ))}
        </div>
    </div>
  )
}
