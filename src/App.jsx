import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Chat from './Pages/Chat/Chat'
import ProfileUpdate from './Pages/ProfileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Config/Firebase'
import { AppContext } from './Context/AppContext'

const App = () => {

  const navigate = useNavigate()

  const {loadUserData} = useContext(AppContext)

  useEffect(() => {
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        navigate('/chat')
        console.log(user)
        await loadUserData(user.uid)
      }else{
        navigate('/')
      }
    })
  },[])

  return (
    <div>
      <ToastContainer  />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </div>
  )
}

export default App