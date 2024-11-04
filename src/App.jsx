import './styles/App.scss'
import './styles/fonts.scss'
import './styles/header.scss'
import './styles/footer.scss'

import { useState } from 'react'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import NewChatBot from './components/NewChatBot'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <header className='header'>
        <a href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
      </header>
      <main className='main'>
        {/* <LoginForm /> */}
        {/* <Register /> */}
        <NewChatBot />
      </main>
      <footer className='footer'>
        <a href="#" className='footer-link'>@2024 CloverChat</a>
      </footer>
    </>
  )
}

export default App
