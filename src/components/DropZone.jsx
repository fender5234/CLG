import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone({ children }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  function showFile(evt) {
    console.log(evt.target.files);
  };
  return (
    <div  {...getRootProps()}>
      <input{...getInputProps()} onChange={showFile} multiple/>
      {children}
    </div>
  )
}

export default MyDropzone;