import { useState } from 'react';
import handleInputChange from '../../utils/handleInputChange';

import './register-login.scss';
import '../../styles/form.scss';

import register from '../../API/register';

import Header from '../../components/Header/Header';

function Register() {
    const [passShow, setPassShow] = useState('password');
    const [inputData, setInputData] = useState({});

    return (
        <>
            <Header />
            <div className="form-wrapper">
                <form className='form' onSubmit={(evt) => {
                    evt.preventDefault();
                    register(inputData);
                }}>
                    <h1 className='form-title'>Регистрация в CloverChat</h1>
                    <div className='input-wrapper'>
                        <label className='input-label' htmlFor="login">Придумайте Логин</label>
                        <input id='login' name="login" type="text" placeholder='Ваш логин' onChange={(e) => handleInputChange(e, 'name', setInputData, inputData)} />
                    </div>
                    <div className='input-wrapper'>
                        <label className='input-label' htmlFor="email">Введите e-mail</label>
                        <input id='email' name="login" type="email" placeholder='Ваш e-mail' onChange={(e) => handleInputChange(e, 'email', setInputData, inputData)} />
                    </div>
                    <div className='input-wrapper'>
                        <label className='input-label' htmlFor="password">Придумайте пароль</label>
                        <div className='pass-wrapper'>
                            <input id='password' name="password" type={passShow} placeholder='Ваш пароль' onChange={(e) => handleInputChange(e, 'password', setInputData, inputData)} />
                            <label className='pass-show-label'>
                                <input type="checkbox" className='pass-show-input' onChange={(evt) => {
                                    if (evt.target.checked) {
                                        setPassShow('text');
                                    } else {
                                        setPassShow('password');
                                    }
                                }} />
                            </label>
                        </div>
                    </div>
                    <div className='input-wrapper'>
                        <label className='input-label' htmlFor="password">Повторите пароль</label>
                        <div className='pass-wrapper'>
                            <input name="password" type={passShow} placeholder='Ваш пароль' />
                            <label className='pass-show-label'>
                                <input type="checkbox" className='pass-show-input' onChange={(evt) => {
                                    if (evt.target.checked) {
                                        setPassShow('text');
                                    } else {
                                        setPassShow('password');
                                    }
                                }} />
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='form-button'>Зарегистрироваться</button>
                    <a href="#" className="google-login"><img src="./src/assets/svg/google.svg" alt="Иконка гугл" /> Регистрация с помощью Google</a>
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

export default Register