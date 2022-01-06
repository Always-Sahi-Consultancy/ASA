
import Register from './Register';
import regImage from '../../image/to-register-gb8968b104_1920.jpg';

const RegisterMain = (props)=>{
    return(
        <div className='container'>
            <div className='register__image-container'><img src={regImage} alt='registerImage' className='register__main-image'></img></div>
            <div className='register__main-component'>
                <div className='register__main-component_heading'>Register <span>Now</span> to become a premium member</div>
                <Register/>
            </div>
        </div>
    );
}

export default RegisterMain;