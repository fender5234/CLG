import { useState } from "react";
import handleInputChange from "../utils/handleInputChange";
import predict from "../API/predict";
import NavBar from "./NavBar/NavBar";

function Predict() {
  const [inputData, setInputData] = useState({});

  return (
    <>
      <header className='header'>
        <a className='logo-link' href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
      </header>
      <main className='main'>
        <NavBar />
        <div className="wrapper">
          <form onSubmit={(evt) => {
            evt.preventDefault();
            predict(inputData);
          }}>
            <input type="text" placeholder="Введите токен агента" value={inputData.name} onChange={(e) => handleInputChange(e, 'access_token', setInputData, inputData)} />
            <textarea name="" id="" placeholder="Введите вопрос" value={inputData.name} onChange={(e) => handleInputChange(e, 'question', setInputData, inputData)}></textarea>
            <button type="submit">Отправить!</button>
          </form>
          <p></p>
        </div>
      </main>
    </>
  )
}

export default Predict