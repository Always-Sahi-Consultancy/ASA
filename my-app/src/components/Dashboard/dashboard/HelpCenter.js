import './HelpCenter.css';

const HelpCenter = () =>{
    return(
        <div className='help-container'>
            <div className='help__heading'>Help Centre</div>
            <div className='help__section'>
                <div className='help__subhead'>Facing any Issue</div>
                <textarea typeof='text'rows={10} placeholder='Write to us' className='help__textarea'></textarea>
                <div className='button__section'><button type='submit' className='help__button'>SUBMIT</button></div>
            </div>
        </div>
    );
}

export default HelpCenter;