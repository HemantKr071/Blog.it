
import { Quote } from '../components/Quote'
import { Auth} from '../components/Auth'


export const SignIn = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>

        <Auth type='signin'/>

        <div className='hidden lg:block bg-black' >
           <Quote/>
        </div>

      
    </div>
  )
}
