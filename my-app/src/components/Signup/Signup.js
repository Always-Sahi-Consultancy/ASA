import './signup.css';
import SignupComponent from './Signup__Component';
import SignUpForm from './SignupForm';

const Signup = () => {
    const data = [{'name': "facebook", 'logo': "", "Content": "", "link": ""},
    {'name': "google", 'logo': "", "Content": "", "link": ""},
    {'name': "apple", 'logo': "", "Content": "", "link": ""}]
    return (
        <div className='signup'>
            <div className='signup__title'>Join Always Sahi</div>
            {data.map((content) => <SignupComponent name={content.name} logo={content.logo} link={content.link} />)}
            <div className='signup__alternative'>
                <div className='signup__bar'></div>
                <div>OR</div>
                <div className='signup__bar'></div>
            </div>
            <SignUpForm />
            <div className='signup__message'>By Joining I agree to receive emails from Always Sahi .</div>
            <hr></hr>
            <div className='signup__option'>Already a member? <span className='signup__option'><a herf="">Sign in</a></span></div>
        </div>
        
    );
}

export default Signup;