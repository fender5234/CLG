function promtUpdate(userData) {
  const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/agents/update_promt_agent/";
  
  fetch(`API_URL${userData.id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({promt:userData.promt}),
  }).then(() => console.log('Успешно!')).catch(() => console.log('Че то пошло не так !'))
};

export default promtUpdate;
