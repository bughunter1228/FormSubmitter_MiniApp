import { useNavigate } from 'react-router-dom';

import './index.css';


const LoginPage = () => {
    
    const navigate = useNavigate();

    const goToSignUp = () =>{
        navigate('/sign_up')
    }

    return (
        <div class='box'>
            <div class='box-form'>
                <div class='box-login-tab'></div>
                <div class='box-login-title'>
                    <div class='i i-login'></div>
                    <h2>LOGIN</h2>
                </div>
                <div class='box-login'>
                    <div class='fieldset-body' id='login_form'>
                        <button onclick="openLoginInfo();" class='b b-form i i-more' title='Info'></button>
                        <p class='field'>
                            <label for='user'>E-MAIL</label>
                            <input type='text' id='user' name='user' title='Username' />
                            <span id='valida' class='i i-warning'></span>
                        </p>
                        <p class='field'>
                            <label for='pass'>PASSWORD</label>
                            <input type='password' id='pass' name='pass' title='Password' />
                            <span id='valida' class='i i-close'></span>
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <input type='submit' id='do_login' value='Login' title='Get Started' />
                        <input type='submit' id='do_login_with_telegram_account' value='Login with telegram account' title='Get Started' />
                        <input onClick={goToSignUp} type='submit' id='Create new account' value='Crete new account' title='Get Started' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
