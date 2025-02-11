
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { FeaturedPosts} from '../components/FeaturedPosts'
import { Subscribe } from '../components/Subscribe'
import { Meteors } from '@/components/magicui/meteors'
import { AnimatedGridPattern } from '@/components/magicui/AnimatedGridPattern'
import { cn } from '@/lib/utils'
export const LandingPage = () => {
  return (
    <div className='relative flex flex-col items-center'>
        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute w-full h-full -z-10 [mask-image:radial-gradient(500px_circle_at_center,rgba(0,0,0,0.9),rgba(0,0,0,0.4))]",
          "inset-0 skew-y-12",
        )}
      />
        <Meteors number={100} />
        <Hero/>
        <FeaturedPosts/>
        <Subscribe/>
        <Footer/>
        
    </div>
  )
}