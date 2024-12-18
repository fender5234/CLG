// Функция для выхода
async function logout() {
  const API_URL =
    "https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/logout";

  try {
    let logout = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (logout.ok) {
      return true;
    } else {
      return false;
    }
  } catch {
    console.log("Какие то проблемы)))");
  }
}

export default logout;
