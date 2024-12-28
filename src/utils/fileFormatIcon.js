function fileFormatIcon(file) {
  switch (file) {
    case "text/plain":
      return "src/assets/svg/txt.svg";

    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "src/assets/svg/doc.svg";

    case "application/pdf":
      return "src/assets/svg/pdf.svg";

    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "src/assets/svg/xls.svg";

    case "text/csv":
      return "src/assets/svg/csv.svg";

    default:
      return "src/assets/svg/doc.svg";
  }
}

export default fileFormatIcon;
