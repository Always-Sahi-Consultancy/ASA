const SignupComponent = (props) => {
    return (
        <a href="#" target="_self" className="signup__link">
            <button className="signup__component" id={props.ids}>
                <div className="signup__image">
                    <img src={props.logo} alt={props.name} className="signup__logo"></img>
                </div>
                <div className="signup__platform">{props.Content}</div>
            </button>
        </a>

    );
}

export default SignupComponent;