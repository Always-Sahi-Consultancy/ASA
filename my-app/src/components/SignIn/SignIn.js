import './signIn.css';
import SignInComponent from './SignIn__Component';
import SignInForm from './SignInForm';
// import Facebook from '../../image/fb icon.png';
import Google from '../../image/google logo.png';
// import Apple from  '../../image/Apple.png';
import {useContext} from 'react';
import {UserContext} from '../../App';

const SignIn = () => {
    // const {state, dispatch} = useContext(UserContext);
    const data = [{'name': "google", 'logo': Google, "Content": "Continue with Google", "link": "", "ids":"google"}];
    // {'name': "apple", 'logo': Apple, "Content": "Continue with Apple", "link": "", "ids":"apple"}

    // const esc = (e) => {
    //     if(e.target.classList[0]=="signIn__blur"){
    //         console.log("inside");
    //         e.target.classList.add("signIn__hide");
    //     }
    // }

    // let signState = 1;
    // window.addEventListener('keydown', (e)=>{
    //     const escape = document.getElementsByClassName("signIn__blur");
    //     if(e.keyCode == '27'){
    //         escape[0].classList.forEach(element => {
    //             if(element == 'signIn__hide'){
    //                 signState = 0;
    //                 return;
    //             }     
    //         });
    //         if(signState==1){
    //             escape[0].classList.add("signIn__hide");
    //         };
    //     }
    //     })

    return (
        <div className='signIn__blur'>
        <div className='signIn'>
            <div className='signIn__title'>Sign In to Always Sahi</div>
            {data.map((content) => <SignInComponent name={content.name} logo={content.logo} link={content.link} Content={content.Content} ids={content.ids} />)}
            <div className='signIn__alternative'>
                <div className='signIn__bar'></div>
                <div className='signIn__or'>OR</div>
                <div className='signIn__bar'></div>
            </div>
            <SignInForm />
            <hr className='signIn__hr'></hr>
            <div className='signIn__option'>Not a member? <a href="/RegisterNow" className='signIn__span'>Sign Up</a></div>
        </div>
        </div>
        
    );
}

export default SignIn;