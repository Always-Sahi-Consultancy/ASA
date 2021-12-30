import './explore.css';
import Model from '../../../image/model-g2c5c98e33_19202.jpg';


function Explore(){
    return<div>
        <div className='main-container'>
            <img src={Model}></img>
            <div className='main-container__content'>
                <div className='explore__text'>Identifying & Exploring your  Skills is what turns your Idea Into a Great Side Hustle.</div>
                <div className='explore__button'>Explore</div>
            </div>
        </div>
    </div>
}

export default Explore;