import React from 'react';
import '../../css/login-page/login_modal.css';
import '../../css/base/base.css';
import { useDispatch } from "react-redux";
import setUsername from "../../redux-components/actions/setUsername";

function Login() {
    const dispatch = useDispatch();
     return (
            <div className={'loginModalContainer'}>
                <div className={'loginModal'}>
                    <div className={'loginHeader'}>
                        <h1>Login</h1>
                    </div>
                    <div className={'loginUsername'}>
                        <p>Username:</p>
                        <input type={'text'} id={'username'} defaultValue={''} />
                    </div>
                    <div className={'loginPassword'}>
                        <p>Password:</p>
                        <input type={'password'} />
                    </div>
                    <div className={'complete'}>
                        <button onClick={() => {
                            dispatch(setUsername());
                            window.location.replace('http://localhost:3000/home');
                        }}>Sign In</button>
                    </div>
                </div>
            </div>
     );
}

export default Login;