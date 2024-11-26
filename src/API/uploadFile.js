// Функция для логина(входа в личный кабинет)
async function uploadFile(userData) {
    try {
      let register = await fetch(`https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/files/upload_txt?name=${userData.name}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (register.ok) {
        console.log('Все получилось!');
        return true;
      }
    }

    catch {
      console.log('Какие то проблемы)))');
    }
  }

  export default uploadFile;