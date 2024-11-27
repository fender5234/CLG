import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone({setFileUpload}) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  function showFile(evt) {
    setFileUpload(evt.target.files);
    
  };
  return (
    <div  {...getRootProps()}>
      
      <label className="chatbot-set-wrapper">
        <img src="src/assets/images/pick-file.png" alt="Иконка загрузки файла" />
        <h3>Перетащите файл или выберите с помощью проводника</h3>
        <p>Поддерживаются форматы PDF,DOC,DOCX,TXT</p>
        <span className='chatbot-set-wrapper__button'>Выберите файл</span>
        <span>Если вы загружаете PDF-файл, убедитесь, что вы можете выделить в нем текст.</span>
      </label>

      <input{...getInputProps()} onChange={showFile}  multiple name="userFile" />
    </div>
  )
}

export default MyDropzone;

