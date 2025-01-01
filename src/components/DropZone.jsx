import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone({ setFileUpload, fileUpload }) {
  console.log("Аплоад в начале", fileUpload);
  const onDrop = useCallback(
    (acceptedFiles) => {
      selectedFiles(acceptedFiles);
    },
    [fileUpload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  function selectedFiles(file) {
    console.log("Аплоад в данный момент", fileUpload);

    setFileUpload([...fileUpload, ...file]);
  }
  return (
    <div {...getRootProps()}>
      <label className="create-bot-wrapper">
        <img
          src="src/assets/images/pick-file.png"
          alt="Иконка загрузки файла"
        />
        <h3>Перетащите файл или выберите с помощью проводника</h3>
        <p>Поддерживаются форматы PDF,DOC,DOCX,TXT</p>
        <button type="button" className="create-bot-wrapper__button">
          Выберите файл
        </button>
        <span>
          Если вы загружаете PDF-файл, убедитесь, что вы можете выделить в нем
          текст.
        </span>
        <input {...getInputProps()} name="userFile" multiple />
      </label>
    </div>
  );
}

export default MyDropzone;
