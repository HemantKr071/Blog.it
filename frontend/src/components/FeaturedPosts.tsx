import { FeaturedCard } from "./FeaturedCard";
import { Marquee } from "./magicui/marquee";
const posts = [
  {
    title: "The Power of Perseverance",
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    date: "Jan 10, 2025",
    readTime: "2 min",
  },
  {
    title: "Living on Your Own Terms",
    content: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    date: "Feb 22, 2025",
    readTime: "3 min",
  },
  {
    title: "Creating Your Own Opportunities",
    content: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
    date: "Mar 18, 2025",
    readTime: "1 min",
  },
  {
    title: "The Key to Action",
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    date: "Apr 5, 2025",
    readTime: "2 min",
  },
  {
    title: "Striving for Greatness",
    content: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    date: "May 14, 2025",
    readTime: "2 min",
  },
  {
    title: "Choices Define Us",
    content: "It is our choices that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
    date: "Jun 30, 2025",
    readTime: "2 min",
  },
  {
    title: "Hard Work and Luck",
    content: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    date: "Jul 19, 2025",
    readTime: "2 min",
  },
  {
    title: "Busy Minds Find Success",
    content: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    date: "Aug 7, 2025",
    readTime: "3 min",
  },
  {
    title: "Making the Most of What You Have",
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    date: "Sep 25, 2025",
    readTime: "2 min",
  },
  {
    title: "The Reality of Overnight Success",
    content: "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs",
    date: "Oct 11, 2025",
    readTime: "3 min",
  },
];

const firstHalf = posts.slice(0,posts.length/2);
const secondHalf = posts.slice(posts.length/2);


export const FeaturedPosts = () => {
  return (
   
    <div className="mt-48 px-28 py-20">
        <h1 className="flex justify-center mb-12 text-3xl font-bold">
            Featured Stories
        </h1>
        <MarqueeDemo/>
    </div>
    
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstHalf.map((post,index) => (
          <FeaturedCard key={index} {...post} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondHalf.map((post,index) => (
          <FeaturedCard key={index} {...post} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}


