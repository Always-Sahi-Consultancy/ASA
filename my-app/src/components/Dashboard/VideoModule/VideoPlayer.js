import './VideooPlayer.css';
import Code from '../../../image/courses/relatedCode.png';

const VideoPlayer = () => {

    return(
        <div className='Videoplayer__container'>
            <div className='Videoplayer__title'>Course Title: Coding And Web Development</div>
            <div className='Videoplayer__video'></div>
            <div className='Videoplayer__buttons'>
                <button className='Videoplayer__previous'>Previous</button>
                <button className='Videoplayer__next'>Next</button>
            </div>
            <div className='Videoplayer__code'>
                <div className='Videoplayer__code__title'>
                    <img src={Code}></img>
                    <h4>Related Code</h4>
                </div>
            </div>
        </div>
    )
};
export default VideoPlayer;