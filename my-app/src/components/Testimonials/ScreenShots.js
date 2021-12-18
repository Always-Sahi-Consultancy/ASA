import './ScreenShots.css';
import Janhavi from '../../image/1_Janhavi_Khatwani.jpg';
import kajal from '../../image/Screenshot_20211113-132225.jpg';
import Button from './Button';

function ScreenShots(){
    return(
        <div>
        <Button/>
            <div className='main'>
            <div className='ScreenShots'>
                <img src={Janhavi} className='ScreenShots__img'></img>
                <img src={kajal} className='ScreenShots__img'></img>
            </div>
        </div>
        <Button/>
        </div>
    );
}

export default ScreenShots;