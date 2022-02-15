import './VideoModule.css';
import VideoContent from './VideoContent';
import Desktop from '../../../image/play_Desktop.png';

import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';

const VideoModule = (props) => {
    const { state, dispatch } = useContext(UserContext);
    // const videoData = props.data;
    const [videoData, setVideo] = useState([]);

    useEffect( () => { setVideo(props.courseIndex)})

    return (
        <div className='video-container'>
            {
                videoData.map((item) =>
                    <VideoContent name={item.name} id={item.id} details={item.details} video={props.courseName} />
                )
            }
        </div>
    );
}

export default VideoModule;