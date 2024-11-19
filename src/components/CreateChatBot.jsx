// import '../styles/wrapper.scss'
// import '../styles/app.scss'
// import NavBar from './NavBar'
// import { Outlet } from 'react-router-dom'


// function NewChatBot() {
//     return (
//         <>
//             <header className='header'>
//                 <a className='logo-link' href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
//             </header>
//             <main className='main'>
//                 <NavBar />
//                 <div className="wrapper">
//                   <Outlet/>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default NewChatBot

import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/chatbots.scss'

function CreateChatbots() {
  return (
    <div className='chatbots'>
      <img src="./src/assets/svg/logo-big.svg" alt="Логотип CloverChat" />
      <h2>Создайте своего первого чат бота</h2>
      <p>
        Онлайн-консультант на базе искусственного интеллекта за 5 минут
      </p>
      <Link to={'/new-chat-bot'}>
        <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs />
          <circle id="Ellipse 28" cx="8.000000" cy="8.000000" r="8.000000" fill="#FFFFFF" fill-opacity="1.000000" />
          <path id="+" d="M7.16 12L7.16 8.77L4 8.77L4 7.22L7.16 7.22L7.16 4L8.83 4L8.83 7.22L12 7.22L12 8.77L8.83 8.77L8.83 12L7.16 12Z" fill="#1BC339" fill-opacity="1.000000" fill-rule="nonzero" />
        </svg>
        Создать чат бота!</Link>
    </div>
  )
}

export default CreateChatbots