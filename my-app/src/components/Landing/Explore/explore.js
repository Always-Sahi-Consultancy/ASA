// import { Link } from 'react-router-dom';
import './explore.css';
import Model from '../../../image/model-g2c5c98e33_19202.jpg';


function Explore(props){
    return(<div>
        <div className='main-container'>
            <img src={Model} alt="Explore Courses"></img>
            <div className='main-container__content'>
                <div className='explore__text'>Identifying & Exploring your  Skills is what turns your Idea Into a Great Side Hustle.</div>
                    <div className='explore__button'><a href="/CoursePage" className='explore__link'>Explore</a></div>
            </div>
        </div>
    </div>);
}

export default Explore;