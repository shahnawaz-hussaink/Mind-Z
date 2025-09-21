import './App.css'
import Login from './assets/Components/Pages/Login'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Signup from './assets/Components/Pages/Signup'
import Home from './assets/Components/Pages/Home'
import EditProfile from './assets/Components/Pages/EditProfile'
import Profile from './assets/Components/Pages/Profile'
import About from './assets/Components/Pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
