import { useNavigate } from 'react-router-dom';

import './index.css';

const SignUpPage = () => {

    const navigate = useNavigate();
    
    const gotoLoginPage = () =>{
        navigate('/');
    }
    return (
        <div class='box'>
            <div class='box-form'>
                <div class='box-login-tab'></div>
                <div class='box-login-title'>
                    <div class='i i-login'></div>
                    <h2>Sign Up</h2>
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
                        <p class='field'>
                            <label for='pass'>CONFIRM PASSWORD</label>
                            <input type='password' id='pass-con' name='pass' title='Password' />
                            <span id='valida' class='i i-close'></span>
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <input type='submit' id='do_login' value='Sign Up' title='Get Started' />
                        <input type='submit' id='do_login_with_telegram_account' value='Sign up with telegram account' title='Get Started' />
                        <input onClick={gotoLoginPage} type='submit' id='go_to_login' value='Go to Login' title='Get Started' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
