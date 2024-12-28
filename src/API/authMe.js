// Функция проверки авторизации
async function authMe() {
  const API_URL =
    "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/auth/me";

  try {
    let isAuth = await fetch(API_URL, {
      method: "get",
      credentials: "include",
    });

    if (isAuth.ok) {
      return await isAuth.json();
    } else {
      return null;
    }
  } catch {
    console.log("Не залогинен!");
  }
}

export default authMe;
