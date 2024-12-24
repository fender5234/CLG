// Функция для логина(входа в личный кабинет)


async function login(userData) {
  const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/auth/login";

  try {
    let login = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (login.ok) {
      return true;
    } else {
      return false;
    }
  } catch {
    console.log("Какие то проблемы)))");
  }
}


// function login(userData) {
//   fetch(
//     "https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/login",
//     {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     }
//   )
//     .then(() => {
//       console.log("Успешно!");
//     })
//     .catch(() => console.log("Че то пошло не так !"));
// }

export default login;
