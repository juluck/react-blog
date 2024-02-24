
import React from 'react'
import { auth, provider } from "../firebase"
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        });

    };
    return (
        <div>
            <p>ログアウトする</p>
            <button onClick={logout}>ログアウト</button>
        </div>
    )
}

export default Logout
