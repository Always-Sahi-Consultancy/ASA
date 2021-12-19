function ContactInput (props) {
    return (
        <input type={props.type} placeholder={props.placeholder} className={props.name} required />
    )
};

export default ContactInput;