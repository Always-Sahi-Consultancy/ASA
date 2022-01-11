import ImgEmail from '../../image/email.png';
import ImgPhone from '../../image/phone.png';
import ImgLocation from '../../image/map.png';
import whatsapp from '../../image/whatsapp.png';
import instagram from '../../image/instagramicon.png';
import facebook from '../../image/fb icon.png';

const FooterIcon = ()=>{
    return(
        <div className="icon-container">
            <div className="icon__heading">Contact Us</div>
            <div className="icon__style">
                <div ><img src={ImgEmail}className="icon" alt='email'></img></div>
                <div className="icon__text"><a href="mailto:academy@alwayssahi.com" className='icon__link'>academy@alwayssahi.com</a></div>
            </div>
            <div className="icon__style">
                <div ><img src={ImgPhone}className="icon" alt='phone'></img></div>
                <div className="icon__text"><a href="tel:+91 72760 16790" className='icon__link'>+91&nbsp;72760&nbsp;16790</a></div>
            </div>
            <div className="icon__style">
                <div ><img src={ImgLocation}className="icon" alt='address'></img></div>
                <div className="icon__text">Pune, Maharashtra</div>
            </div>
            <div className='icons__style'>
                <div className='icon__link'><a href="#" target={"_blank"}><img src={whatsapp} className='iconD'></img></a></div>
                <div className='icon__link'><a href="https://www.instagram.com/alwayssahiacademy/ " target={"_blank"}><img src={instagram} className='iconD'></img></a></div>
                <div className='icon__link'><a href="https://www.facebook.com/alwayssahiacademy-102830828952159" target={"_blank"}><img src={facebook} className='iconD'></img></a></div>
            </div>
        </div>
    );
}

export default FooterIcon;