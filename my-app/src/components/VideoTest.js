import './VideoTest.css';

function VideoTest(props){
    console.log(props.item[0].name);
    return(
        <div className="video-test">
            <div className="video-test__video"></div>
            <div className="video-test__text"><h3>{props.item[0].name}</h3><br></br> 
                {props.item[0].text}
                <br></br>
                <div className='rating'>{props.item[0].rating}</div>
            </div>
        </div>
    );
}

export default VideoTest;