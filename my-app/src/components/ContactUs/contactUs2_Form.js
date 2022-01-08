

const ContactUsForm = () =>{
    return(
    <div className="contactUsform-container">
        <div className="contactUsform__heading">Enquire</div>
        <div className="row_flex">
            <input type="text" placeholder='Name' className="contactUsform__name"></input>
            <input type="number" placeholder='Phone Number' type="number" className="contactUsform__phone"></input>
        </div>
        <input type ="email" placeholder='Email' className="contactUsform__email"></input>
        <textarea placeholder='Message' className="contactUsform__message" rows="5"></textarea>
        <div className="rowButton">
        <button type='submit' className='contactUsform__button'>Message</button>
        </div>
    </div>
    );
}

export default ContactUsForm;