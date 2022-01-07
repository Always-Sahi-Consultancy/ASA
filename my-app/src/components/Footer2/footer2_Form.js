

const FooterForm = () =>{
    return(
    <div className="form-container">
        <div className="form__heading">ENQUIRE</div>
        <div className="row_flex">
            <input type="text" placeholder='Name' className="footer__name"></input>
            <input type="number" placeholder='Phone Number' type="number" className="form__phone"></input>
        </div>
        <input type ="email" placeholder='Email' className="form__email"></input>
        <textarea placeholder='Message' className="form__message" rows="5"></textarea>
        <div className="row">
        <button type='submit' className='form__button'>Message</button>
        </div>
    </div>
    );
}

export default FooterForm;