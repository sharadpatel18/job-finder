import './App.css'
import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Utilities/Navbar'
import Home from './components/Utilities/Home'
import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'
import About from './components/Utilities/About'
import Findjob from './components/User/Findjob'
import ChatWithAI from './components/AIComponents/ChatWithAI'
import GetFullScreen from './components/MiniComponents/GeFullScreen'
import Admin from './components/Admin/Admin'
import Createjob from './components/Admin/Createjob'

function App() {
  const getLoginData = () => {
    const data = localStorage.getItem('responceData');
    if (data) {
      return JSON.parse(data);
    }else{
      return {}
    }
  }

  const [loginData , setloginData] = useState(getLoginData());
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
          {loginData.isAdmin == true ? <Route path='/admin' element={<Admin/>} /> : null}
          {loginData.isAdmin == true ? <Route path='/createjob' element={<Createjob/>} /> : null}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
