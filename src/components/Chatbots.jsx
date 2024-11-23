import '../styles/new-chat-bot.scss'
import '../styles/input-photochat.scss'
import '../styles/input-description.scss'
import '../styles/new-chat-bot-form.scss'
import '../styles/upload-wrapper.scss'
import '../styles/chatbot-instructions.scss'
import '../styles/chatbot-set-wrapper.scss'
import '../styles/succes-uploaded.scss'
import '../styles/wrapper.scss'
import '../styles/app.scss'

import NewChatBot from './NewChatBot'
import CreateChatbots from './CreateChatBot'

import NavBar from './NavBar'
import { useState } from 'react'
import authMe from '../API/authMe';

function Chatbots() {

  const [isPresenceBots, setIsPresenceBots] = useState(true);


  
  return (
    <>
      <header className='header'>
        <a className='logo-link' href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
      </header>
      <main className='main'>
        <NavBar />
        <div className="wrapper">
          <CreateChatbots />
          <button onClick={() => {
            authMe();
          }} >Проверка авторизации!</button>
        </div>
      </main>
    </>
  )
}

export default Chatbots;