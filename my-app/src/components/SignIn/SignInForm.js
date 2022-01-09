const SignInForm = () => {
    return (
        <form method="" action="post" className="signIn__form">
            <input placeholder="  Email / Username" className="signIn__email" />
            <input placeholder="  Password" className="signIn__password" />
            <button type="submit" className="signIn__submit">Continue</button>
        </form>
    );
}

export default SignInForm;