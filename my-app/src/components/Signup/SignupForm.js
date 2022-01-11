const SignUpForm = () => {
    return (
        <form method="" action="post" className="signup__form">
            <input placeholder="  Enter your Email" className="signup__email" />
            <input placeholder="  Password" className="signup__password" />
            <button type="submit" className="signup__submit">Continue</button>
        </form>
    );
}

export default SignUpForm;