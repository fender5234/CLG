// Функция проверки авторизации
async function authMe() {
  const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/auth/me";

  try {
    let register = await fetch(API_URL, {
      method: 'get',
      credentials: 'include',
    });

    if (register.ok) {
      console.log('Залогинен!');
      return await register.json();
    } else {
      return null;
    }
  }

  catch {
    console.log('Не залогинен!');
  }
}

export default authMe;

