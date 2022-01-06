const RegisterForm = () => {
    return (
        <form method="" action="post" className="register__form">
            <label type="text" className="register__label">Email</label>
            <input placeholder="  Enter your Email" className="register__email" />
            <label type="text" className="register__label">Password</label>
            <input type="password"placeholder="  Must be atleast 6 characters" className="register__password" />
            <div className="register__row">
                <div className="register__flex">
                    <label type="text" className="register__label">First Name</label>
                    <input placeholder="  First Name" className="register__name" />
                </div>
                <div className="register__flex">
                    <label type="text" className="register__label">Last Name</label>
                    <input placeholder="  Last Name" className="register__nameL" />
                </div>
            </div>
            <div className='register__message'>By Signing up you agree to our <a>Terms &amp; Conditions</a> .</div>
            <button type="submit" className="register__submit">Register</button>
        </form>
    );
}

export default RegisterForm;