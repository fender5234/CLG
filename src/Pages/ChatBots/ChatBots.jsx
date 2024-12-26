import './chatBots.scss';

import DashBoardLayout from '../../components/DashBoardLayout/DashBoardLayout';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from '../../components/Pagination/Pagination';
import UserProfile from '../../components/UserProfile/UserProfile';
import ChatBotCard from '../../components/ChatBotCard/ChatBotCard';

function ChatBots() {
  return (
    <DashBoardLayout
      nav={<NavBar />}
      header={<Pagination />}
      userProfile={<UserProfile userName={'fender5234'} />}>
      <div className="wrapper">
        <h1 className="create-bot-title">Чат боты</h1>
        <div className="wrapper-chatbots">
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
          <ChatBotCard />
        </div>
      </div>
    </DashBoardLayout >
  )
}

export default ChatBots