import React from 'react';
import './signup.css';
import SignupComponent from './Signup__Component';
import SignUpForm from './SignupForm';
import Facebook from '../../image/fb icon.png';
import Google from '../../image/google logo.png';
import Apple from  '../../image/Apple.png';

const Signup = (props) => {
    const data = [{'name': "facebook", 'logo': Facebook , "Content": "Continue with Facebook", "link": "", "ids": "facebook"},
    {'name': "google", 'logo': Google, "Content": "Continue with Google", "link": "", "ids":"google"}];
    // {'name': "apple", 'logo': Apple, "Content": "Continue with Apple", "link": "", "ids":"apple"}

    const esc = (e) => {
        if(e.target.classList[0]=="signup__blur"){
            console.log("inside");
            e.target.classList.add("signup__hide");
        }
    }

    let state = 1;
    window.addEventListener('keydown', (e)=>{
        const escape = document.getElementsByClassName("signup__blur");
        if(e.keyCode == '27'){
            escape[0].classList.forEach(element => {
                if(element == 'signup__hide'){
                    state = 0;
                    return;
                }     
            });
            if(state==1){
                escape[0].classList.add("signup__hide");
            };
        }
        })

    return (
        <div className='signup__blur' onClick={esc}>
        <div className='signup'>
            <div className='signup__title'>Join Always Sahi</div>
            {data.map((content) => <SignupComponent name={content.name} logo={content.logo} link={content.link} Content={content.Content} ids={content.ids} />)}
            <div className='signup__alternative'>
                <div className='signup__bar'></div>
                <div className='signup__or'>OR</div>
                <div className='signup__bar'></div>
            </div>
            <SignUpForm />
            <div className='signup__message'>By Joining I agree to receive emails from Always Sahi .</div>
            <hr className='signup__hr'></hr>
            <div className='signup__option'>Not a Member? <a className='signup__span' href="/RegisterNow" >Sign in</a></div>
        </div>
        </div>
        
        
    );
}

export default Signup;