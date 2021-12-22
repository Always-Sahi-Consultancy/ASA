import './contactUs.css';
import './contactUs_tab.css';
import './contactUs_mobile.css';
import ContactStructure from './ContactStructure';
import FaqStructure from './FaqStructure';
import { useEffect } from 'react';

const ContactUs = () => {

    useEffect(() => {
        document.title = "Always Sahi Academy | Contact Us";
    })

    const FaqButton = document.createElement("script");
    FaqButton.async = true;
    FaqButton.src = './FaqJs.js';
    return (
        <div>
            <ContactStructure />
            <FaqStructure />
        </div>
    );
}

export default ContactUs;