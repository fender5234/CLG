import "./FormatIconFile.scss";
import fileFormatIcon from "../../utils/fileFormatIcon";


function FormatIconFile({filetype}) {
  return (
    <img src={fileFormatIcon(filetype)} alt="Иконка файла" />
  )
}

export default FormatIconFile;