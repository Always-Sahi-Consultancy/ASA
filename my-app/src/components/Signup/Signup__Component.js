const SignupComponent = (props) => {
    return (
        <div className="signup__component">
            <div className="signup__image">
                <img src={props.logo} alt={props.name} className="signup__logo"></img>
            </div>
            <div className="signup__platform">{props.Content}</div>
        </div>
    );
}

export default SignupComponent;