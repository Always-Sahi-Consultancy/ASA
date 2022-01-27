import './contactUs2.css';
import ContactStructure from './ContactStructure';
import FaqStructure from './FaqStructure';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../App';

const ContactUs = () => {
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        document.title = "Always Sahi Academy | Contact Us";
    })

    const FaqButton = document.createElement("script");
    FaqButton.async = true;
    FaqButton.src = './FaqJs.js';
    return (
        <div>
            <ContactStructure/>
            <FaqStructure/>
        </div>
    );
}

export default ContactUs;