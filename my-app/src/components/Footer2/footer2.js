import './footer2.css';
import FooterTerms from './footer2_content';
import FooterForm from './footer2_Form';
import FooterIcon from './footer2_icon';

const Footer2 = ()=>{   
    return(
        <div className='footerMain'>
            <div className='row container'>
            <FooterForm/>
            <FooterIcon/>
            </div>
            <div className='container'>
                <FooterTerms/>
            </div>
        </div>
    );
}

export default Footer2;