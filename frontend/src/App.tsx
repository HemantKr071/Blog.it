
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { MyBlogs } from './pages/MyBlogs'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
         
          <Route path='/' element={<LandingPage/>} /> 
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/blog/:id' element={<Blog/>} />
          <Route path='/publish' element={<Publish/>} />
          <Route path='/edit-blog/:id' element={<Publish/>} />
          <Route path='/myblogs' element={<MyBlogs/>} />

       </Routes>
    </BrowserRouter>

       
    </>
  )
}

export default App
