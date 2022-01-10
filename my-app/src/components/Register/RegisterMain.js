import './register.css';
import Register from './Register';
import regImage from '../../image/to-register-gb8968b104_1920.jpg';

const RegisterMain = (props) => {
    return (
        <div className='containerR'>
            <div className='register__image-container'>
                <img src={regImage} alt='registerImage' className='register__main-image'></img>
                <div className='register__main-component'>
                    <div className='register__main-component_heading'>Register <span>Now</span> to become a premium member</div>
                    <div className='register__main-component_form'><Register /></div>
                </div>
            </div>
        </div>
    );
}

export default RegisterMain;