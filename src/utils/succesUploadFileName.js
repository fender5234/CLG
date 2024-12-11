// Функция которая при помощи регулярного выражения оставит только название файла, удалив лишние символы и путь к самому файлу на сервере.
function succesUploadFileName(pathString) {
  if (!pathString) {
    return
  }
  return pathString.replace(/^.*\/([^\/]+)\_.*/, '$1');
}


export default succesUploadFileName;