import '../styles/new-chat-bot.scss'
import '../styles/input-photochat.scss'
import '../styles/input-description.scss'
import '../styles/new-chat-bot-form.scss'
import '../styles/upload-wrapper.scss'
import '../styles/wrapper.scss'

import MyDropzone from './DropZone'

function NewChatBot() {
    return (
        <div className="wrapper">
            <form className='new-chat-bot-form'>
                <h1>Создание нового чат бота!</h1>
                <div className="chatbot-profile-wrapper">
                    <img className="chatbot-profile__image" src="src/assets/images/cat.jpg" alt="Образец фотографии" />
                    <div className="chatbot-profile__description">
                        <div className="photochat">
                            <h3 className="photochat__header">Фото чатбота</h3>
                            <label className='photochat__label' htmlFor="photochat-input"><img src="src/assets/images/pick-photo.svg" alt="Иконка загрузки фото" /><span>Загрузить фото</span><input className='photochat__input' id="photochat-input" name="photochat" type="file" /></label>
                            <span className='input-description'>Поддерживается формат JPG, PNG, and SVG до 1MB</span>
                        </div>
                    </div>
                </div>

                <div className="chatbot-name__wrapper">
                    <label className="chatbot-name__label">
                        <span className="chatbot-name__label-span">Название чат бота:</span>
                        <input type="text" placeholder='Придумайте название для бота' />
                    </label>
                    <label className="chatbot-name__label">
                        <span className="chatbot-name__label-span">Название компании:</span>
                        <input type="text" placeholder='Придумайте название для компании' />
                    </label>
                </div>

                <div className="chatbot-upload-wrapper">
                    <h2>Загрузите файлы с настройками</h2>
                    <label className="chatbot-set-wrapper">
                        <img src="src/assets/images/pick-file.png" alt="Иконка загрузки файла" />
                        <h3>Перетащите файл или выберите с помощью проводника</h3>
                        <p>Поддерживаются форматы PDF,DOC,DOCX,TXT</p>
                        <input id="chatbot-set" name="chatbot-set" type="file" />
                        <span>Если вы загружаете PDF-файл, убедитесь, что вы можете выделить в нем текст.</span>
                    </label>
                </div>

                <div className="succes-uploaded">
                    <h2>Успешно загруженные файлы</h2>
                </div>

                <div className="chatbot-instructions">
                    <h2>Введите инструкции для бота</h2>
                    <textarea name="chatbot-inctruction" id="chatbot-inctruction" placeholder='Введите инструкции для бота'></textarea>
                </div>
                <button type='button'>Сохранить и продолжить</button>
            </form>

            <MyDropzone />
        </div>
    )
}

export default NewChatBot