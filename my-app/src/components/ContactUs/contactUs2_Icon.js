import ImgEmail from '../../image/email.png';
import ImgPhone from '../../image/phone.png';
import ImgLocation from '../../image/map.png';
import telegram from '../../image/telegram.png';
import instagram from '../../image/instagramicon.png';
import facebook from '../../image/fb icon.png';

const ContactUsIcon = ()=>{
    return(
        <div className="contactUsicon-container">
            <div className="contactUsicon__heading">Contact Us</div>
            <div className="contactUsicon__style">
                <div ><img src={ImgEmail}className="contactUsicon" alt='email'></img></div>
                <div className="contactUsicon__text">academy@alwayssahi.com</div>
            </div>
            <div className="contactUsicon__style">
                <div ><img src={ImgPhone}className="contactUsicon" alt='email'></img></div>
                <div className="contactUsicon__text">+91 72760 16790</div>
            </div>
            <div className="contactUsicon__style">
                <div ><img src={ImgLocation}className="contactUsicon" alt='email'></img></div>
                <div className="contactUsicon__text">Pune, Maharashtra</div>
            </div>
            <div className='contactUsicons__style'>
                <div className='contactUsicon__link'><img src={telegram} className='contactUsiconD'></img></div>
                <div className='contactUsicon__link'><img src={instagram} className='contactUsiconD'></img></div>
                <div className='contactUsicon__link'><img src={facebook} className='contactUsiconD'></img></div>
            </div>
        </div>
    );
}

export default ContactUsIcon;