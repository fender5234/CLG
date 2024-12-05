// Функция для логина(входа в личный кабинет)
async function uploadFile(uploadData, fileName) {
  try {
    let upload = await fetch(`https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/files/upload_txt?name=${fileName}`, {
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