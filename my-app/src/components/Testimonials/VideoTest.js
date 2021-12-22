import './VideoTest.css';
import Button from './Button';
import ReactPlayer from 'react-player';

function VideoTest(props){
    return(
        <div>
            <div className="video-test">
            <ReactPlayer url="https://youtu.be/dmTAFHi06-8" className='video-test__video' />
            <div className="video-test__text"><h3>{props.item[0].name}</h3><br></br> 
                {props.item[0].text}
                <br></br>
                <div className='rating'>{props.item[0].rating}</div>
            </div>
        </div>
        <Button/>
        </div>
        
    );
}

export default VideoTest;