import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone({ setFileUpload,fileUpload}) {
  const onDrop = useCallback(acceptedFiles => {
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  function selectedFiles(evt) {
    setFileUpload(evt.target.files);
  };
  return (
    <div  {...getRootProps()}>

      <label className="create-bot-wrapper">
        <img src="src/assets/images/pick-file.png" alt="Иконка загрузки файла" />
        <h3>Перетащите файл или выберите с помощью проводника</h3>
        <p>Поддерживаются форматы PDF,DOC,DOCX,TXT</p>
        <button type='button' className='create-bot-wrapper__button'>Выберите файл</button>
        <span>Если вы загружаете PDF-файл, убедитесь, что вы можете выделить в нем текст.</span>
      </label>

      <input{...getInputProps()} onChange={(evt) => {
        evt.preventDefault();
        selectedFiles(evt)
      }} name="userFile" multiple />
    </div>
  )
}

export default MyDropzone;

