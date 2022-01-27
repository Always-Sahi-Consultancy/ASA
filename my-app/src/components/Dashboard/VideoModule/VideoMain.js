import VideoModule from "./VideoModule";
import VideoPlayer from "./VideoPlayer";
import './VideoMain.css';

const VideoMain =()=>{
    return(
        <div className="video-row">
            <VideoModule/>
            <VideoPlayer/>
        </div>
    );
}

export default VideoMain;