import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../styles/input.scss";
import "../../styles/form.scss"
import "./login-form.scss"

import handleInputChange from "../../utils/handleInputChange";
import login from "../../API/login";

import UserContext from "../../context/userContext";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const userContext = useContext(UserContext);
  const fromPage = location.state?.from?.pathname || "/";

  const [passShow, setPassShow] = useState("password");
  const [inputData, setInputData] = useState({});

  async function handleLogin(inputData) {
    const isLogin = await login(inputData);
    userContext.setAuth(isLogin);
    if(isLogin) {
      navigate('/create-bot');
    }
  }

  return (
    <>
      <Header />
      <div className="login-form-wrapper form-wrapper ">
        <form
          className="form"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleLogin(inputData);
          }}
        >
          <h1 className="form-title">Войти в CloverChat</h1>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="login">
              Ваш e-mail
            </label>
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Ваш e-mail"
              value={inputData.name}
              onChange={(e) =>
                handleInputChange(e, "email", setInputData, inputData)
              }
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="password">
              Ваш Пароль
            </label>
            <div className="pass-wrapper">
              <input
                name="password"
                type={passShow}
                placeholder="Ваш пароль"
                onChange={(e) =>
                  handleInputChange(e, "password", setInputData, inputData)
                }
              />
              <label className="pass-show-label">
                <input
                  id="password"
                  type="checkbox"
                  className="pass-show-input"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPassShow("text");
                    } else {
                      setPassShow("password");
                    }
                  }}
                />
              </label>
            </div>
          </div>
          <a href="www.google.com" className="form-link">
            Забыли пароль?
          </a>
          <button type="submit" className="form-button">
            Войти
          </button>
          <a href="#" className="google-login">
            <img src="./src/assets/svg/google.svg" alt="Иконка гугл" /> Войти с
            помощью Google
          </a>
          <a href="www.google.com" className="form-link">
            {" "}
            <span className="black-color">Еще не зарегестрированы?</span>{" "}
            Зарегистрируйтесь!
          </a>
          <div className="nda-wrapper">
            <a href="#" className="form-link">
              <span className="black-color">
                Продолжая, вы соглашаетесь с нашими Условиями обслуживания{" "}
              </span>
              и Политикой конфиденциальности
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LoginForm;
