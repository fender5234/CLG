import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone({ children }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div  {...getRootProps()}>
      <input{...getInputProps()} />
      {children}
    </div>
  )
}

export default MyDropzone;