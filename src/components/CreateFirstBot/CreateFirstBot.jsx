import { Link } from 'react-router-dom';
import './create-first-bot.scss';

function CreateFirstBot() {
  return (
    <div className="wrapper wrapper-create-first-bot">
      <div className="create-first-bot">
        <img src="src/assets/svg/big-logo.svg" alt="Логотип CloverChat" />
        <h1>Создайте своего первого чат бота</h1>
        <p>Онлайн-консультант на базе искусственного интеллекта за 5 минут</p>
        <Link to="/create-bot">
          <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>
              Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 28" cx="8.000000" cy="8.000000" r="8.000000" fill="#FFFFFF" fillOpacity="1.000000" />
            <path id="+" d="M7.16 12L7.16 8.77L4 8.77L4 7.22L7.16 7.22L7.16 4L8.83 4L8.83 7.22L12 7.22L12 8.77L8.83 8.77L8.83 12L7.16 12Z" fill="#1BC339" fillOpacity="1.000000" fillRule="nonzero" />
          </svg>
          Создать чат бота</Link>
      </div>
    </div>
  )
}

export default CreateFirstBot