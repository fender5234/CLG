import "../../styles/wrapper.scss";
import "./create-bot.scss";

import { useState } from "react";
import { useEffect } from "react";

import DashBoardLayout from "../../components/DashBoardLayout/DashBoardLayout";
import Pagination from "../../components/Pagination/Pagination";
import MyDropzone from "../../components/DropZone";
import NavBar from "../../components/NavBar/NavBar";
import Tabs from "../../components/Tabs/Tabs";
import UserProfile from "../../components/UserProfile/UserProfile";

import uploadFile from "../../API/uploadFile";
import authMe from "../../API/authMe";
import createAgent from "../../API/createAgent";

import handleInputChange from "../../utils/handleInputChange";
import FormatIconFile from "../../components/FormatIConFile/FormatIconFile";

function CreateChatBot() {
  // Создаю новые экземпляр объекта formData который в который будем класть файл с текстом для отправки на сервер.
  const uploadData = new FormData();
  //

  // Создаем объект с нужными полями в которых будут данные об агенте

  // Состояния (переменные) с нужными данными для отправки формы.
  const [inputData, setInputData] = useState({name:""});
  const [userId, setUserId] = useState(null);
  const [fileUpload, setFileUpload] = useState([]);
  const [filePath, setFilePath] = useState(null);
  //

  const newAgent = {
    name: inputData.name,
    user_id: userId,
    knowledge_file: filePath,
    promt: inputData.text,
  };
  //
  // Добавляем выбранный файл с настройками в FormData и отправляем его на сервер
  if (fileUpload) {
    fileUpload.forEach((file) => uploadData.append("file", file));
    // uploadData.append("file", fileUpload[0]);
  }

  for (let value of uploadData.values()) {
    console.log(value, "Проходимся по значениям");
  }

  console.log(uploadData.getAll('file'))

  // Функция для отправки текстового файла с промтом и получения пути к этому файлу обратно
  async function getPath() {
    console.log("запрос пошел!");
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
  }, []);
  //
  // Сделать редирект на случай не авторизованного пользователя TODO!

  async function uploadDataAgent() {
    await getPath();
    createAgent(newAgent);
  }

  function deleteFileHandler(file) {
    setFileUpload(
      fileUpload.filter((files) => files.name !== file.textContent)
    );
  }

  return (
    <>
      <DashBoardLayout
        nav={<NavBar />}
        header={<Pagination />}
        userProfile={<UserProfile userName={"fender5234"} />}
      >
        <div className="wrapper wrapper-form">
          <form
            className="new-chat-bot-form"
            encType="multipart/form-data"
            onSubmit={(evt) => {
              evt.preventDefault();
              uploadDataAgent();
            }}
          >
            <h1 className="create-bot-title">Создание нового чат бота</h1>
            <Tabs />
            <div className="create-bot-upload-wrapper">
              <div className="create-bot-profile">
                <img src="src/assets/images/cat.jpg" alt="Образец фотографии" />
                <div className="create-bot-profile-description">
                  <h3>Фото чатбота</h3>
                  <label className="create-bot-profile-label-image">
                    <div className="create-bot-profile-label-image__file-button">
                      <svg
                        width="19.157471"
                        height="19.157471"
                        viewBox="0 0 19.1575 19.1575"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs>
                          <clipPath id="clip2001_401">
                            <rect
                              id="Frame"
                              rx="0.000000"
                              width="18.157476"
                              height="18.157476"
                              transform="translate(0.500000 0.500000)"
                              fill="currentColor"
                              fillOpacity="0"
                            />
                          </clipPath>
                        </defs>
                        <rect
                          id="Frame"
                          rx="0.000000"
                          width="18.157476"
                          height="18.157476"
                          transform="translate(0.500000 0.500000)"
                          fill="currentColor"
                          fillOpacity="0"
                        />
                        <g clipPath="url(#clip2001_401)">
                          <path
                            id="Vector"
                            d="M10.02 1.99C9.9 1.86 9.74 1.79 9.57 1.79C9.41 1.79 9.25 1.86 9.13 1.99L5.94 5.48C5.72 5.72 5.73 6.1 5.98 6.32C6.22 6.55 6.6 6.53 6.82 6.29L8.97 3.93L8.97 12.77C8.97 13.1 9.24 13.37 9.57 13.37C9.9 13.37 10.17 13.1 10.17 12.77L10.17 3.93L12.32 6.29C12.55 6.53 12.93 6.55 13.17 6.32C13.41 6.1 13.43 5.72 13.21 5.48L10.02 1.99Z"
                            fill="currentColor"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                          />
                          <path
                            id="Vector"
                            d="M9.8 1.31Q9.69 1.29 9.57 1.29Q9.46 1.29 9.35 1.31Q9.24 1.34 9.13 1.38Q9.03 1.43 8.93 1.5Q8.84 1.56 8.76 1.65L5.57 5.14Q5.49 5.23 5.43 5.33Q5.38 5.42 5.35 5.51Q5.31 5.61 5.29 5.71Q5.28 5.82 5.28 5.93Q5.29 6.04 5.31 6.15Q5.34 6.25 5.38 6.34Q5.43 6.44 5.49 6.52Q5.55 6.61 5.64 6.69Q5.73 6.77 5.83 6.83Q5.92 6.88 6.01 6.92Q6.11 6.95 6.21 6.97Q6.32 6.98 6.43 6.98Q6.54 6.97 6.65 6.95Q6.75 6.92 6.84 6.88Q6.93 6.84 7.02 6.78Q7.11 6.71 7.19 6.62L8.47 5.22L8.47 12.77Q8.47 12.88 8.5 13Q8.52 13.1 8.56 13.19Q8.6 13.29 8.66 13.37Q8.72 13.47 8.8 13.54Q8.88 13.62 8.97 13.68Q9.05 13.74 9.15 13.78Q9.24 13.82 9.34 13.84Q9.46 13.87 9.57 13.87Q9.69 13.87 9.8 13.84Q9.91 13.82 10 13.78Q10.1 13.74 10.18 13.68Q10.27 13.62 10.35 13.54Q10.43 13.47 10.49 13.37Q10.55 13.29 10.59 13.19Q10.63 13.1 10.65 13Q10.67 12.88 10.67 12.77L10.67 5.22L11.96 6.62Q12.04 6.71 12.13 6.78Q12.21 6.84 12.31 6.88Q12.4 6.92 12.5 6.95Q12.61 6.97 12.72 6.98Q12.83 6.98 12.94 6.97Q13.04 6.95 13.13 6.92Q13.23 6.88 13.32 6.83Q13.42 6.77 13.51 6.69Q13.6 6.61 13.66 6.52Q13.72 6.44 13.77 6.34Q13.81 6.25 13.83 6.15Q13.86 6.04 13.86 5.93Q13.87 5.82 13.85 5.71Q13.84 5.61 13.8 5.51Q13.77 5.42 13.72 5.33Q13.66 5.23 13.58 5.14L10.38 1.65Q10.31 1.56 10.21 1.5Q10.12 1.43 10.02 1.38Q9.91 1.34 9.8 1.31ZM10.17 4.67L10.17 3.93L12.32 6.29C12.55 6.53 12.93 6.55 13.17 6.32C13.41 6.1 13.43 5.72 13.21 5.48L10.02 1.99C9.9 1.86 9.74 1.79 9.57 1.79C9.41 1.79 9.25 1.86 9.13 1.99L5.94 5.48C5.72 5.72 5.73 6.1 5.98 6.32C6.22 6.55 6.6 6.53 6.82 6.29L8.47 4.48L8.97 3.93L8.97 12.77C8.97 13.1 9.24 13.37 9.57 13.37C9.9 13.37 10.17 13.1 10.17 12.77L10.17 4.67Z"
                            fill="currentColor"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                          />
                          <path
                            id="Vector"
                            d="M2.99 11.97C2.99 11.64 2.72 11.37 2.39 11.37C2.06 11.37 1.79 11.64 1.79 11.97L1.79 12.01C1.79 13.1 1.79 13.98 1.88 14.68C1.98 15.39 2.19 16 2.67 16.48C3.15 16.96 3.75 17.17 4.47 17.26C5.16 17.36 6.04 17.36 7.14 17.36L12.01 17.36C13.1 17.36 13.98 17.36 14.68 17.26C15.39 17.17 16 16.96 16.48 16.48C16.96 16 17.17 15.39 17.26 14.68C17.36 13.98 17.36 13.1 17.36 12.01L17.36 11.97C17.36 11.64 17.09 11.37 16.76 11.37C16.43 11.37 16.16 11.64 16.16 11.97C16.16 13.11 16.16 13.91 16.08 14.52C16 15.1 15.85 15.41 15.63 15.63C15.41 15.85 15.1 16 14.52 16.08C13.91 16.16 13.11 16.16 11.97 16.16L7.18 16.16C6.03 16.16 5.23 16.16 4.63 16.08C4.05 16 3.74 15.85 3.51 15.63C3.29 15.41 3.15 15.1 3.07 14.52C2.99 13.91 2.99 13.11 2.99 11.97Z"
                            fill="currentColor"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                          />
                          <path
                            id="Vector"
                            d="M2.62 10.89Q2.51 10.87 2.39 10.87Q2.27 10.87 2.16 10.89Q2.06 10.92 1.96 10.96Q1.87 11 1.78 11.05Q1.69 11.11 1.61 11.19Q1.53 11.27 1.47 11.36Q1.42 11.45 1.38 11.54Q1.34 11.64 1.32 11.74Q1.29 11.85 1.29 11.97L1.29 12.01Q1.29 13.06 1.3 13.51Q1.32 14.25 1.39 14.74Q1.47 15.38 1.67 15.86Q1.84 16.28 2.13 16.62Q2.21 16.73 2.31 16.83Q2.41 16.93 2.52 17.02Q2.86 17.3 3.29 17.48Q3.76 17.67 4.41 17.76Q4.9 17.83 5.64 17.84Q6.09 17.86 7.14 17.86L12.01 17.86Q13.06 17.86 13.51 17.84Q14.25 17.83 14.74 17.76Q15.38 17.67 15.86 17.48Q16.28 17.3 16.62 17.02Q16.73 16.93 16.83 16.83Q16.93 16.73 17.02 16.62Q17.3 16.28 17.48 15.86Q17.67 15.38 17.76 14.74Q17.83 14.25 17.84 13.51Q17.86 13.06 17.86 12.01L17.86 11.97Q17.86 11.85 17.83 11.74Q17.81 11.64 17.77 11.54Q17.73 11.45 17.67 11.36Q17.61 11.27 17.53 11.19Q17.46 11.11 17.37 11.05Q17.28 11 17.19 10.96Q17.09 10.92 16.99 10.89Q16.88 10.87 16.76 10.87Q16.64 10.87 16.53 10.89Q16.43 10.92 16.33 10.96Q16.23 11 16.15 11.05Q16.06 11.11 15.98 11.19Q15.9 11.27 15.84 11.36Q15.79 11.45 15.75 11.54Q15.71 11.64 15.68 11.74Q15.66 11.85 15.66 11.97Q15.66 13.01 15.65 13.43Q15.63 14.07 15.58 14.45Q15.53 14.81 15.45 15.02Q15.38 15.18 15.28 15.28Q15.18 15.38 15.02 15.45Q14.81 15.53 14.45 15.58Q14.07 15.63 13.43 15.65Q13.01 15.66 11.97 15.66L7.18 15.66Q6.14 15.66 5.71 15.65Q5.08 15.63 4.7 15.58Q4.34 15.53 4.13 15.45Q3.97 15.38 3.87 15.28Q3.77 15.18 3.7 15.02Q3.61 14.81 3.57 14.45Q3.51 14.07 3.5 13.43Q3.49 13.01 3.49 11.97Q3.49 11.85 3.46 11.74Q3.44 11.64 3.4 11.54Q3.36 11.45 3.31 11.36Q3.25 11.27 3.17 11.19Q3.09 11.11 3 11.05Q2.91 11 2.82 10.96Q2.72 10.92 2.62 10.89ZM2.99 11.97C2.99 11.64 2.72 11.37 2.39 11.37C2.06 11.37 1.79 11.64 1.79 11.97L1.79 12.01C1.79 13.1 1.79 13.98 1.88 14.68C1.98 15.39 2.19 16 2.67 16.48C3.15 16.96 3.75 17.17 4.47 17.26C5.16 17.36 6.04 17.36 7.14 17.36L12.01 17.36C13.1 17.36 13.98 17.36 14.68 17.26C15.39 17.17 16 16.96 16.48 16.48C16.96 16 17.17 15.39 17.26 14.68C17.36 13.98 17.36 13.1 17.36 12.01L17.36 11.97C17.36 11.64 17.09 11.37 16.76 11.37C16.43 11.37 16.16 11.64 16.16 11.97C16.16 13.11 16.16 13.91 16.08 14.52C16 15.1 15.85 15.41 15.63 15.63C15.41 15.85 15.1 16 14.52 16.08C13.91 16.16 13.11 16.16 11.97 16.16L7.18 16.16C6.03 16.16 5.23 16.16 4.63 16.08C4.05 16 3.74 15.85 3.51 15.63C3.29 15.41 3.15 15.1 3.07 14.52C2.99 13.91 2.99 13.11 2.99 11.97Z"
                            fill="currentColor"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                      <p>Загрузить фото</p>
                    </div>
                    <input type="file" />
                  </label>
                  <span className="create-bot-description">
                    Поддерживается формат JPG, PNG, and SVG до 1MB
                  </span>
                </div>
              </div>
            </div>
            <div className="create-bot-upload-wrapper">
              <div className="create-bot-name-wrapper">
                <label className="create-bot-name-label">
                  <span className="create-bot-name-label-span">
                    Название агента:
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Придумайте название для агента"
                    value={inputData.name}
                    onChange={(e) =>
                      handleInputChange(e, "name", setInputData, inputData)
                    }
                  />
                </label>
                <label className="create-bot-name-label">
                  <span className="create-bot-name-label-span">
                    Название компании:
                  </span>
                  <input
                    type="text"
                    placeholder="Придумайте название для компании"
                  />
                </label>
              </div>
            </div>
            <div className="create-bot-upload-wrapper">
              <h2 className="create-bot-subtitle">
                Введите инструкции для бота
              </h2>
              <textarea
                className="create-bot-inctruction"
                name="create-bot-inctruction"
                id="create-bot-inctruction"
                placeholder="Введите инструкции для бота"
                value={inputData.text}
                onChange={(e) =>
                  handleInputChange(e, "text", setInputData, inputData)
                }
              ></textarea>
            </div>
            <div className="create-bot-upload-wrapper">
              <h2 className="create-bot-subtitle">
                Загрузите файлы с настройками
              </h2>
              <MyDropzone
                setFileUpload={setFileUpload}
                fileUpload={fileUpload}
              />
            </div>
            <div className="create-bot-upload-wrapper">
              <h2>Готовые к загрузке файлы</h2>
              <div className="create-bot-succes-uploaded">
                {fileUpload.length ? (
                  <>
                    {fileUpload.map((file) => (
                      <p
                        className="create-bot-succes-uploaded-file"
                        key={file.name}
                      >
                        {<FormatIconFile filetype={file.type} />}
                        {file.name}
                        <button
                          onClick={(evt) => {
                            deleteFileHandler(evt.target.closest("p"));
                          }}
                          className="create-bot-succes-uploaded-file-delete"
                          type="button"
                        ></button>
                      </p>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="create-bot-succes-uploaded-file--not-files">
                      Выберите файлы для отображения
                    </p>
                  </>
                )}
              </div>
            </div>
            <button type="submit" className="create-bot-wrapper__button">
              Сохранить и продолжить
            </button>
          </form>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default CreateChatBot;
