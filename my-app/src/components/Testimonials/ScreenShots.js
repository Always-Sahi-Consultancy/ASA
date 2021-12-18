import './ScreenShots.css';
import Janhavi from './SS/1. Janhavi Khatwani.png';
import kajal from './SS/Screenshot_20211113-132225';

function ScreenShots(){
    return(
        <div>
            <div className='ScreenShots'>
                <img src={Janhavi}></img>
                <img src={kajal}></img>
            </div>
        </div>
    );
}