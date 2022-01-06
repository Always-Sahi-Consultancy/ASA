const RegisterComponent = (props) => {
    return (
        <a href="#" target="_self" className="register__link">
            <button className="register__component" id={props.ids}>
                <div className="register__image">
                    <img src={props.logo} alt={props.name} className="register__logo"></img>
                </div>
                <div className="register__platform">{props.Content}</div>
            </button>
        </a>

    );
}

export default RegisterComponent;