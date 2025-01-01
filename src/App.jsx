import "./styles/App.scss";
import "./styles/fonts.scss";

import LoginForm from "./Pages/Login/LoginForm";
import Register from "./Pages/Register/Register";
import Preloader from "./components/Preloader/Preloader";
import RequireAuth from "./hoc/RequireAuth";
import CreateChatBot from "./Pages/CreateChatBot/CreateChatBot";
import ChatBots from "./Pages/ChatBots/ChatBots";
import CreateFirstBot from "./components/CreateFirstBot/CreateFirstBot";
import Channels from "./Pages/Chanels/Channels";
import UserProvider from "./hoc/UserProvider";
import DashBoardLayout from "./components/DashBoardLayout/DashBoardLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <RequireAuth>
                <DashBoardLayout />
              </RequireAuth>
            }
          >
            <Route index element={<ChatBots></ChatBots>}></Route>
            <Route path="/first-bot" element={<CreateFirstBot />} />
            <Route path="/channels" element={<Channels />}></Route>
            <Route path="/create-bot" element={<CreateChatBot />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
