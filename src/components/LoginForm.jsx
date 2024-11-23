import { useState } from 'react'
import '../styles/input.scss'
import '../styles/form.scss'
import handleInputChange from '../utils/handleInputChange';
import login from '../API/login';

function LoginForm() {

    const [passShow, setPassShow] = useState('password');
    const [inputData, setInputData] = useState({});

    return (
        <>
            <header className='header header--form'>
                <a className='logo-link' href="#"><img src="./src/assets/svg/logo.svg" alt="" /></a>
            </header>
            <div className="form-wrapper">
                <form className='form' onSubmit={(evt) => {
                    evt.preventDefault();
                    login(inputData);
                    console.log(inputData);
                }}>
                    <h1 className='form-title'>Войти в CloverChat</h1>
                    <div className='input-wrapper'>
                        <label className='input-label' htmlFor="login">Ваш e-mail</label>
                        <input id="login" name="login" type="text" placeholder='Ваш e-mail' value={inputData.name} onChange={(e) => handleInputChange(e, 'email', setInputData, inputData)} />
                    </div>
                    <div className='input-wrapper'>
                        <label className='input-label' htmlFor="password">Ваш Пароль</label>
                        <div className='pass-wrapper'>
                            <input name="password" type={passShow} placeholder='Ваш пароль' onChange={(e) => handleInputChange(e, 'password', setInputData, inputData)} />
                            <label className='pass-show-label'>
                                <input id="password" type="checkbox" className='pass-show-input' onChange={(e) => {
                                    if (e.target.checked) {
                                        setPassShow('text');
                                    } else {
                                        setPassShow('password');
                                    };
                                }} />
                            </label>
                        </div>
                    </div>
                    <a href='www.google.com' className='form-link'>Забыли пароль?</a>
                    <button type='submit' className='form-button'>Войти</button>
                    <a href="#" className="google-login"><img src="./src/assets/svg/google.svg" alt="Иконка гугл" /> Войти с помощью Google</a>
                    <a href='www.google.com' className='form-link'> <span className='black-color'>Еще не зарегестрированы?</span> Зарегистрируйтесь!</a>
                    <div className="nda-wrapper">
                        <a href="#" className='form-link'>
                            <span className='black-color'>Продолжая, вы соглашаетесь с нашими Условиями обслуживания </span>
                            и Политикой конфиденциальности</a>
                    </div>
                </form>
            </div>
            <footer className='footer'>
                <a href="#" className='footer-link'>@2024 CloverChat</a>
            </footer>
        </>
    )
}

export default LoginForm