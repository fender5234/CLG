async function createAgent(data) {
  const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/create_agent";

  try {
    let result = await fetch(API_URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (result.ok) {
      console.log('Агент создался!');
      return await result.json();
    }
  }

  catch {
    console.log('Че то не так!');
  }
}

export default createAgent;

