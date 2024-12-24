// Функция для логина(входа в личный кабинет)
async function uploadFile(uploadData, fileName) {
  const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/files/upload_txt?name=";

  try {
    let upload = await fetch(`API_URL${fileName}`, {
      credentials: 'include',
      method: 'POST',
      body: uploadData
    });

    if (upload.ok) {
      console.log('Все получилось!');
      return await upload.json();
    }
  }

  catch {
    console.log('Какие то проблемы)))','функция аплоад');
  }
}

export default uploadFile;