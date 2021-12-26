import Instagram from '../../image/instagram.png';
import Facebook from '../../image/facebook.png';
import LinkedIn from '../../image/linkedin.png';
import Telegram from '../../image/telegram.png';
import Mail from '../../image/mail.png';
import Whatsapp from '../../image/whatsapp.png';

import ContactSocial from './ContactSocial';

const ContactInfo = () => {
    const SocialMedia = [{
        name: "Instagram",
        url : "",
        image: Instagram 
    },
    {
        name: "LinkedIn",
        url : "",
        image: LinkedIn
    },
    {
        name: "Facebook",
        url : "",
        image: Facebook
    },
    {
        name: "Telegram",
        url : "",
        image: Telegram
    }]
    return(
        <div class="contact__info">
                <div class="contact__mail"><img src={Mail} alt="Mail" className="contact__icons"></img><a href="mailto:support@alwayssahi.com" class="contact__link">support@alwayssahi.com</a></div>
                <div class="contact__phone"><img src={Whatsapp} alt="Whatsapp" className="contact__icons"></img><a href="tel:+91 8857086790" class="contact__link">+91 8857086790</a></div>
                <div class="contact__social">
                    {SocialMedia.map((info) =>
                        <ContactSocial url={info.url} image={info.image} name={info.name} className='contact__icons'/>
                    )}
                </div>
            </div>
    );
};

export default ContactInfo;