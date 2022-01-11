import ImgEmail from '../../image/email.png';
import ImgPhone from '../../image/phone.png';
import ImgLocation from '../../image/map.png';
import twitter from '../../image/twitter.png';
import instagram from '../../image/instagramicon.png';
import facebook from '../../image/fb icon.png';

const FooterIcon = ()=>{
    return(
        <div className="icon-container">
            <div className="icon__heading">Contact Us</div>
            <div className="icon__style">
                <div ><img src={ImgEmail}className="icon" alt='email'></img></div>
                <div className="icon__text">academy@alwayssahi.com</div>
            </div>
            <div className="icon__style">
                <div ><img src={ImgPhone}className="icon" alt='email'></img></div>
                <div className="icon__text">+91 72760 16790</div>
            </div>
            <div className="icon__style">
                <div ><img src={ImgLocation}className="icon" alt='email'></img></div>
                <div className="icon__text">Pune, Maharashtra</div>
            </div>
            <div className='icons__style'>
                <div className='icon__link'><img src={twitter} className='iconD'></img></div>
                <div className='icon__link'><img src={instagram} className='iconD'></img></div>
                <div className='icon__link'><img src={facebook} className='iconD'></img></div>
            </div>
        </div>
    );
}

export default FooterIcon;