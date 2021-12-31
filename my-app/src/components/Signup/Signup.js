import './signup.css';
import SignupComponent from './Signup__Component';
import SignUpForm from './SignupForm';
import Facebook from '../../image/fb icon.png';
import Google from '../../image/google logo.png';
import Apple from  '../../image/Apple.png';

const Signup = () => {
    const data = [{'name': "facebook", 'logo': Facebook , "Content": "Continue with Facebook", "link": "", "ids": "facebook"},
    {'name': "google", 'logo': Google, "Content": "Continue with Google", "link": "", "classes" : ""},
    {'name': "apple", 'logo': Apple, "Content": "Continue with Apple", "link": "", "classes" : ""}]
    return (
        <div className='signup__blur'>
        <div className='signup'>
            <div className='signup__title'>Join Always Sahi</div>
            {data.map((content) => <SignupComponent name={content.name} logo={content.logo} link={content.link} Content={content.Content} ids={content.ids} />)}
            <div className='signup__alternative'>
                <div className='signup__bar'></div>
                <div>OR</div>
                <div className='signup__bar'></div>
            </div>
            <SignUpForm />
            <div className='signup__message'>By Joining I agree to receive emails from Always Sahi .</div>
            <hr className='signup__hr'></hr>
            <div className='signup__option'>Already a member? <span className='signup__span'><a herf="">Sign in</a></span></div>
        </div>
        </div>
        
    );
}

export default Signup;