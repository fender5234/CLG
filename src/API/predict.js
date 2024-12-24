function predict(userData) {
  const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/predict/get_predict";

  fetch(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json())
    .then(json => console.log(json))
};

export default predict;
