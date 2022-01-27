import './footer2.css';
// import { useState } from 'react';
import FooterTerms from './footer2_content';
import FooterForm from './footer2_Form';
import FooterIcon from './footer2_icon';
import {useContext} from 'react';
import {UserContext} from '../../App';

const Footer2 = (props) => {
    const {state, dispatch} = useContext(UserContext);
    // const [active,setActive]=useState('');
    const footerhandler = (value) => {
        props.onChange(value);
    }
    return (
        <div className='footerMain'>
            <div className='row-container'>
                <FooterForm />
                <FooterIcon />
            </div>
            <div className='row-container'>
                <FooterTerms onChange={footerhandler} />
            </div>
        </div>
    );
}

export default Footer2;