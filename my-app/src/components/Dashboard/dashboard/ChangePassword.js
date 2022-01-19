import './ChangePassword.css';

const ChangePassword = () =>{
    return(
        <div className='password-container'>
            <div className='password__heading'>Change Password</div>
            <div className='password__form'>
                <form method='post'>
                    <div className='form__division'>
                        <label className='labels'>Old Password</label>
                        <input type="password" className='inputs' placeholder='Password'></input>
                    </div>
                    <div className='form__division'>
                        <label className='labels'>New Password</label>
                        <input type="password" className='inputs' placeholder='Password'></input>
                    </div>
                    <div className='form__division'>
                        <label className='labels'>Confirm Password</label>
                        <input type="password" className='inputs' placeholder='Password'></input>
                    </div>
                    <div className='form__button-division'>
                        <button type='submit'className='password__button'>RESET</button>
                        <button type='submit' className='password__button'>CONFIRM</button>
                    </div>
                </form>
                <div className='password__part2'>
                    <div className='password__subhead'>Forgot Password?</div>
                    <div className='form__button-divisions'>
                        <div className='password__ques'>Recieve reset password link on mail</div>
                        <button type='submit' className='password__buttons'>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;