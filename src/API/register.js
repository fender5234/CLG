function register(userData) {
    fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
};

export default register;