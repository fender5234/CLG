function register(userData) {
    const API_URL = "https://lexashvetsoff-onlineconsultantai-api-46d7.twc1.net/auth/register";
    
    fetch(API_URL, {
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