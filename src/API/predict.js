
function predict(userData) {
  fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/predict/get_predict', {
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
