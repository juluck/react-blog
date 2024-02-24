
import React from 'react'
import { auth, provider } from "../firebase"
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {

    const navigate = useNavigate();

    const loginWithGoole = () => {
        //Googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            //Login状態変数を保持
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };
    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginWithGoole}>Googleでログイン</button>
        </div>
    )
}

export default Login
