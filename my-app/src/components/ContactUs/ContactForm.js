import ContactInput from "./ContactInput";

const ContactForm = () => {
    const inputs = [{
        name: "contact__input",
        type: "text",
        placeholder: "Name"
    },
    {
        name: "contact__input",
        type: "email",
        placeholder: "Email"
    },
    {
        name: "contact__input",
        type: "tel",
        placeholder: "Phone Number"
    },
    {
        name: "contact__message contact__input",
        type: "text",
        placeholder: "Message"
    }]
    return(
        <form action="" method="post" className="contact__form">
                <div className="contact__title">Contact Us</div>
                    {inputs.map((details) =>
                        <ContactInput type={details.type} placeholder={details.placeholder} name={details.name} />
                    )}
                <button value="submit" className="contact__submit">Submit</button>
        </form>
    );
};

export default ContactForm;