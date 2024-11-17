import './styles/App.scss'
import './styles/fonts.scss'
import './styles/header.scss'
import './styles/footer.scss'

import { useState } from 'react'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import NewChatBot from './components/NewChatBot'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import FormLayout from './components/FormLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FormLayout />}>
          <Route path="/login/register" element={<LoginForm />} />
        </Route>
        <Route path="/main" element={<Layout />}>
          <Route path="/main/new-chat-bot" element={<NewChatBot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
