import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userFirstName: "", userLastName: "", userEmail: "", userPassword: ""
    });

    let name, value;
    const handleRegistrationInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
    }

    const PostRegister = async (e) => {
        e.preventDefault();
        const { userFirstName, userLastName, userEmail, userPassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userFirstName, userLastName, userEmail, userPassword })
        });
        const data = await res.json();
        if(data.status === 422 || !data) {
            window.alert("Registration failed");
            console.log("Registration failed");
        } else {
            window.alert("Registration successful");
            console.log("Registration successful");
            navigate("/");
        }
    }

    return (
        <form method="POST" action="post" className="register__form">
            <label type="text" className="register__label">Email</label>
            <input placeholder="  Enter your Email" name="userEmail" value={user.email} onChange={handleRegistrationInputs} className="register__email" />
            <label type="text" className="register__label">Password</label>
            <input type="password" placeholder="  Must be atleast 6 characters" name="userPassword" value={user.userPassword} onChange={handleRegistrationInputs} className="register__password" />
            <div className="register__row">
                <div className="register__flex">
                    <label type="text" className="register__label" id="labelName">First Name</label>
                    <input placeholder="  First Name" name="userFirstName" value={user.userFirstName} onChange={handleRegistrationInputs} className="register__name" />
                </div>
                <div className="register__flex">
                    <label type="text" className="register__label">Last Name</label>
                    <input placeholder="  Last Name" name="userLastName" value={user.userLastName} onChange={handleRegistrationInputs} className="register__nameL" />
                </div>
            </div>
            <div className='register__message'>By Signing up you agree to our <a>Terms &amp; Conditions</a> .</div>
            <button type="submit" className="register__submit" onClick={PostRegister} >Register</button>
        </form>
    );
}

export default RegisterForm;