
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { FeaturedPosts} from '../components/FeaturedPosts'
import { Subscribe } from '../components/Subscribe'
import { Meteors } from '@/components/magicui/meteors'

export const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <Meteors number={100} />
        <Hero/>
        <FeaturedPosts/>
        <Subscribe/>
        <Footer/>
        
    </div>
  )
}