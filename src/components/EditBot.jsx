import NavBar from "./NavBar"
import handleInputChange from "../utils/handleInputChange"
import { useState } from "react";
import promtUpdate from "../API/promtUpdate";



function EditBot() {
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
            promtUpdate(inputData);
            console.log(inputData);
          }}>
            <input type="text" placeholder="Введите id агента" value={inputData.name} onChange={(e) => handleInputChange(e, 'id', setInputData, inputData)} />
            <textarea name="" id="" placeholder="Введите промт" value={inputData.name} onChange={(e) => handleInputChange(e, 'promt', setInputData, inputData)}></textarea>
            <button type="submit">Отправить!</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default EditBot