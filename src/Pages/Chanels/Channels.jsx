import './channels.scss'

import ChannelsCard from '../../components/ChanelsCard/ChannelsCard';

import DashBoardLayout from '../../components/DashBoardLayout/DashBoardLayout';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from '../../components/Pagination/Pagination';
import UserProfile from '../../components/UserProfile/UserProfile';

function Channels() {
  return (
    <DashBoardLayout
      nav={<NavBar />}
      header={<Pagination />}
      userProfile={<UserProfile userName={'fender5234'} />}>
      <div className='wrapper channels-wrapper'>
        <div className='channels-wrapper-inner'>
          <h2>Подключенные каналы</h2>
          <ul className='channels-wrapper-list'>
            <li><ChannelsCard name='Telegram' image="src/assets/svg/tg-big-logo.svg" statusChanel={true} /></li>
            <li><ChannelsCard name='Веб сайт' image="src/assets/svg/global.svg" statusChanel={true} /></li>
            <li><ChannelsCard name='В Контакте' image="src/assets/svg/vk.svg" statusChanel={true} /></li>
            <li><ChannelsCard name='Авито' image="src/assets/svg/avito.svg" statusChanel={true} /></li>
          </ul>
        </div>
        <div className='channels-wrapper-inner'>
          <h2>Каналы доступные для подключения</h2>
          <ul className='channels-wrapper-list'>
            <li><ChannelsCard name='WildBerries' image="src/assets/svg/wb.svg" /></li>
            <li><ChannelsCard name='Jivosite' image="src/assets/svg/jivo.svg" /></li>
          </ul>
        </div>
      </div>
    </ DashBoardLayout>

  )
}

export default Channels;