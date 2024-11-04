// // Функция для логина(входа в личный кабинет)
// async function login(userData, setUserIsLogin) {
//     try {
//       let register = await fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/login', {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (register.ok) {
//         console.log('Все получилось!');
//         setUserIsLogin(true);
//         return true;
//       }
//     }

//     catch {
//       console.log('Какие то проблемы)))');
//     }
//   }

//   export default login;



function login(userData) {
    fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
};

export default login;
