import './header.scss';
import logo from '../../assets/svg/logo.svg';

function Header() {
  return (
    <header className='header'>
      <a className='logo-link' href="#"><img src={logo} alt="Логотип CloverChat" /></a>
    </header>
  )
}

export default Header;