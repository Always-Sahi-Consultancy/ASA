import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {

    const navigate = useNavigate();
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');

    const PostLoginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userEmail, userPassword })
        });
        const data = await res.json();
        if(res.status === 400) {
            window.alert(data.error);
            // console.log("Registration failed");
        } else {
            // dispatch({type: "USER", payload: true});
            localStorage.setItem('logUser', true);
            window.alert("Login successful");
            // console.log("Registration successful");
            navigate("/dash"); // should be redirected to dashboard
            window.location.reload();
        }
    }

    return (
        <form method="POST" className="signIn__form">
            <input placeholder="  Email / Username" name="userEmail" onChange={(e) => setuserEmail(e.target.value)} className="signIn__email" />
            <input placeholder="  Password" name="userPassword" onChange={(e) => setuserPassword(e.target.value)} className="signIn__password" />
            <button type="submit" className="signIn__submit" onClick={PostLoginUser}>Continue</button>
        </form>
    );
}

export default SignInForm;