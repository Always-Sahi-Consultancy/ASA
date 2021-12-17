import './VideoTest.css';
import video1 from './video/vd1.mp4';

function VideoTest(props){
    return(
        <div className="video-test">
            <video src={video1}controls="controls" className='video-test__video' />
            <div className="video-test__text"><h3>{props.item[0].name}</h3><br></br> 
                {props.item[0].text}
                <br></br>
                <div className='rating'>{props.item[0].rating}</div>
            </div>
        </div>
    );
}

export default VideoTest;