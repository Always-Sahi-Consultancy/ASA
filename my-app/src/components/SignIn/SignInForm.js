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
        if(data.status === 422 || !data) {
            window.alert("Login failed! Invalid Credentials");
            // console.log("Registration failed");
        } else {
            window.alert("Login successful");
            // console.log("Registration successful");
            navigate("/contact_us"); // should be redirected to dashboard
        }
    }

    return (
        <form method="POST" action="post" className="signIn__form">
            <input placeholder="  Email / Username" value={userEmail} onChange={(e) => setuserEmail(e.target.value)} className="signIn__email" />
            <input placeholder="  Password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} className="signIn__password" />
            <button type="submit" className="signIn__submit" onClick={PostLoginUser}>Continue</button>
        </form>
    );
}

export default SignInForm;