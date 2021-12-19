import Instagram from '../../image/instagram.png';
import Facebook from '../../image/facebook.png';
import LinkedIn from '../../image/linkedin.png';
import Telegram from '../../image/telegram.png';

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
                <div class="contact__mail"><a href="mailto:hello.alwayssahi@gmail.com" class="contact__link">hello.alwayssahi@gmail.com</a></div>
                <div class="contact__phone"><a href="tel:+91 8857086790" class="contact__link">+91 8857086790</a></div>
                <div class="contact__social">
                    {SocialMedia.map((info) =>
                        <ContactSocial url={info.url} image={info.image} name={info.name}/>
                    )}
                </div>
            </div>
    );
};

export default ContactInfo;