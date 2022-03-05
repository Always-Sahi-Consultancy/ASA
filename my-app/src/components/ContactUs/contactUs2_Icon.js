import ImgEmail from '../../image/email.png';
import ImgPhone from '../../image/phone.png';
import ImgLocation from '../../image/map.png';
import telegram from '../../image/telegram.png';
import instagram from '../../image/instagramicon.png';
import facebook from '../../image/fb icon.png';
import telegramC from '../../image/telegramC.png';
import facebookC from '../../image/facebookC.png';
import instagramC from '../../image/instagram.png';
import { Link } from 'react-router-dom';

const ContactUsIcon = ()=>{
    return(
        <div className="contactUsicon-container">
            <div className="contactUsicon__heading">Contact Us</div>
            <div className="contactUsicon__style">
                <div ><img src={ImgEmail}className="contactUsicon" alt='email'></img></div>
                <div className="contactUsicon__text"><Link to="mailto:academy@alwayssahi.com" className='icon__link'>academy@alwayssahi.com</Link></div>
            </div>
            <div className="contactUsicon__style">
                <div ><img src={ImgPhone}className="contactUsicon" alt='email'></img></div>
                <div className="contactUsicon__text"><Link to="tel:+91 72760 16790" className='icon__link'>+91&nbsp;88570&nbsp;86790</Link></div>
            </div>
            <div className="contactUsicon__style">
                <div ><img src={ImgLocation}className="contactUsicon" alt='email'></img></div>
                <div className="contactUsicon__text">Pune, Maharashtra</div>
            </div>
            <div className='contactUsicons__style'>
                <div className='contactUsicon__link'>
                    <Link to="https://t.me/+Aeus-e9JD940M2Zl" target={"_blank"}>
                        <img src={telegram} id='icon1' className='contactUsiconD'></img>
                        <img src={telegramC} className='contactUsiconD'></img>
                    </Link>
                </div>
                <div className='contactUsicon__link'>
                    <Link to="https://www.instagram.com/alwayssahiacademy/ " target={"_blank"}>
                        <img src={instagram} id='icon2' className='contactUsiconD'></img>
                        <img src={instagramC} className='contactUsiconD'></img>
                    </Link>
                </div>
                <div className='contactUsicon__link'>
                    <Link to="https://www.facebook.com/alwayssahiacademy-102830828952159" target={"_blank"}>
                        <img src={facebook} id='icon3' className='contactUsiconD'></img>
                        <img src={facebookC} className='contactUsiconD'></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactUsIcon;