
function promtUpdate(userData) {
  fetch(`https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/agents/update_promt_agent/${userData.id}`, {
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
