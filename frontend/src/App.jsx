import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Utilities/Navbar'
import Home from './components/Utilities/Home'
import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'
import About from './components/Utilities/About'
import Findjob from './components/User/Findjob'
import ChatWithAI from './components/AIComponents/ChatWithAI'
import GetFullScreen from './components/MiniComponents/GeFullScreen'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/findjob' element={<Findjob/>}/>
          <Route path='/chatwithai' element={<ChatWithAI/>}/>
          <Route path='/fullscreen/:id' element={<GetFullScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
