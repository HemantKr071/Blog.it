
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { FeaturedPosts } from '../components/FeaturedPosts'
import { Subscribe } from '../components/Subscribe'

export const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <Hero/>
        <FeaturedPosts/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}
