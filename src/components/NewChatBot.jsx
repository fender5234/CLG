import '../styles/new-chat-bot.scss'
import '../styles/input-photochat.scss'
import '../styles/input-description.scss'
import '../styles/new-chat-bot-form.scss'
import '../styles/upload-wrapper.scss'
import '../styles/chatbot-instructions.scss'
import '../styles/chatbot-set-wrapper.scss'
import '../styles/succes-uploaded.scss'
import '../styles/wrapper.scss'
import '../styles/app.scss'

import { useState } from 'react'
import { useEffect } from 'react'

import MyDropzone from './DropZone'
import NavBar from './NavBar'
import uploadFile from '../API/uploadFile'
import authMe from '../API/authMe'
import createAgent from '../API/createAgent'

import handleInputChange from '../utils/handleInputChange'

function NewChatBot() {

    // Создаю новые экземпляр объекта formData который в который будем класть файл с текстом для отправки на сервер.
    const uploadData = new FormData();
    // 

    // Создаем объект с нужными полями в которых будут данные об агенте


    // Состояния (переменные) с нужными данными для отправки формы.
    const [inputData, setInputData] = useState({});
    const [userId, setUserId] = useState(null);
    const [fileUpload, setFileUpload] = useState(null);
    const [filePath, setFilePath] = useState(null);
    // 

    const newAgent = {
        'name': inputData.name,
        'user_id': userId,
        'knowledge_file': filePath,
        'promt': inputData.text
    };
    // 

    // Добавляем выбранный файл с настройками в FormData и отправляем его на сервер
    if (fileUpload) {
        uploadData.append(`file`, fileUpload[0]);
    }
    // 


    // Функция для отправки текстового файла с промтом и получения пути к этому файлу обратно
    async function getPath() {
        let answer = await uploadFile(uploadData, fileUpload[0].name);
        setFilePath(answer);
    }
    // 


    // Сделать редирект на случай не авторизованного пользователя TODO!
    // Функция получения ID пользователя
    async function getUserId() {
        let userId = await authMe();
        setUserId(userId.id);
    }

    useEffect(() => {
        getUserId();
    }, [])
    // 
    // Сделать редирект на случай не авторизованного пользователя TODO!


    return (
        <>
            <header className='header'>
                <a className='logo-link' href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
            </header>
            <main className='main'>
                <NavBar />
                <div className="wrapper wrapper-form">
                    <form className='new-chat-bot-form' encType="multipart/form-data" onSubmit={(evt) => {
                        evt.preventDefault();
                       
                        createAgent(newAgent);
                    }}>
                        <h1>Создание нового чат бота!</h1>
                        <div className="chatbot-profile-wrapper">
                            <img className="chatbot-profile__image" src="src/assets/images/cat.jpg" alt="Образец фотографии" />
                            <div className="chatbot-profile__description">
                                <div className="photochat">
                                    <h3 className="photochat__header">Фото чатбота</h3>
                                    <span className='input-description'>Поддерживается формат JPG, PNG, and SVG до 1MB</span>
                                </div>
                            </div>
                        </div>
                        <div className="chatbot-name__wrapper">
                            <label className="chatbot-name__label">
                                <span className="chatbot-name__label-span">Название агента:</span>
                                <input type="text" placeholder='Придумайте название для агента' value={inputData.name} onChange={(e) => handleInputChange(e, 'name', setInputData, inputData)} />
                            </label>
                            <label className="chatbot-name__label">
                                <span className="chatbot-name__label-span">Название компании:</span>
                                <input type="text" placeholder='Придумайте название для компании' />
                            </label>
                        </div>
                        <div className="chatbot-instructions">
                            <h2>Введите инструкции для бота</h2>
                            <textarea className='chatbot-inctruction' name="chatbot-inctruction" id="chatbot-inctruction" placeholder='Введите инструкции для бота' value={inputData.text} onChange={(e) => handleInputChange(e, 'text', setInputData, inputData)}></textarea>
                        </div>
                        <div >
                            <div className="chatbot-upload-wrapper">
                                <h2>Загрузите файлы с настройками</h2>
                                <MyDropzone setFileUpload={setFileUpload} />
                            </div>
                            <div className="succes-uploaded">
                                <h2>Готовые к загрузке файлы</h2>
                                <div className='succes-uploaded__area'><p>Файлы отсутствуют</p> <img src="src/assets/images/not-files.svg" alt="Иконка пустой файл" /></div>
                            </div>
                        </div>
                        <button type='submit'>Сохранить и продолжить</button>
                    </form>

                </div>
            </main>
        </>
    )
}

export default NewChatBot