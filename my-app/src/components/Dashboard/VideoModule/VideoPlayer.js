import './VideooPlayer.css';
import Code from '../../../image/courses/relatedCode.png';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';

const VideoPlayer = (props) => {

    const [data, setData] = useState();

   

    // useEffect(() => {}, [] );

    return(
        <div className='Videoplayer__container'>
            <div className='Videoplayer__title'>{props.title}</div>
            <ReactPlayer  url={props.url} className="Videoplayer__video" />
            <div className='Videoplayer__buttons'>
                <Link to=""><button className='Videoplayer__previous'>Previous</button></Link>
                <Link to=""><button className='Videoplayer__next'>Next</button></Link>
            </div>
            <div className='Videoplayer__code'>
                <div className='Videoplayer__code__title'>
                    <img src={Code}></img>
                    <h4>Related Code</h4>
                    <div>
                        {props.material}
                        {props.transcript}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default VideoPlayer;