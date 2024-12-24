import './styles/App.scss'
import "./styles/fonts.scss";


import LoginForm from './Pages/Login/LoginForm';
import Register from "./Pages/Register/Register";
import Preloader from "./components/Preloader/Preloader";
import RequireAuth from "./hoc/RequireAuth";
import CreateChatBot from "./Pages/CreateChatBot/CreateChatBot";

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
            <Route path="/preloader" element={<Preloader />} />
            <Route path="/create-bot" element={
              <RequireAuth>
                <CreateChatBot />
              </RequireAuth>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
