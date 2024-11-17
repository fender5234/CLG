import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (

    <>
      <header className='header'>
        <a className='logo-link' href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
        <a href="#" className='footer-link'>@2024 CloverChat</a>
      </footer>
    </>
  )
}

export default Layout