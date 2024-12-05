async function createAgent(data) {
  console.log(data, "метка");
  console.log(JSON.stringify(data), 'метка');
  try {
    let result = await fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/agents/create_agent', {
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

