const SignInComponent = (props) => {
    return (
        <a href="#" target="_self" className="signIn__link">
            <button className="signIn__component" id={props.ids}>
                <div className="signIn__image">
                    <img src={props.logo} alt={props.name} className="signIn__logo"></img>
                </div>
                <div className="signIn__platform">{props.Content}</div>
            </button>
        </a>

    );
}

export default SignInComponent;