import './VideoTest.css';
import './Testimonial.css';
import ReactPlayer from 'react-player';
const Testimonial_video = (props) => {
    return (
        <div className="Testimonial_video">
            <h1 className="video_header">Hear from our students</h1>
            <div className="video-test">
                <ReactPlayer url="https://youtu.be/dmTAFHi06-8" className='video-test__video' />
                <div className="video-test__text"><h3>{props.item[0].name}</h3><br></br>
                    {props.item[0].text}
                    <br></br>
                    <div className='rating'>{props.item[0].rating}</div>
                </div>
            </div>

        </div>
    )
}

export default Testimonial_video;