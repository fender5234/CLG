import "./chatBots.scss";

import DashBoardLayout from "../../components/DashBoardLayout/DashBoardLayout";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import UserProfile from "../../components/UserProfile/UserProfile";
import ChatBotCard from "../../components/ChatBotCard/ChatBotCard";

function ChatBots() {
  return (
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
  );
}

export default ChatBots;
