// import './styles/App.scss'
import "./styles/fonts.scss";
import "./styles/header.scss";
import "./styles/footer.scss";

import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import NewChatBot from "./components/NewChatBot";
import Chatbots from "./components/Chatbots";
import EditBot from "./components/EditBot";
import Predict from "./components/predict";

import UserProvider from "./hoc/UserProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat-bots" element={<Chatbots />} />
            <Route path="/new-chat-bot" element={<NewChatBot />} />
            <Route path="/edit-bot" element={<EditBot />} />
            <Route path="/predict" element={<Predict />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
