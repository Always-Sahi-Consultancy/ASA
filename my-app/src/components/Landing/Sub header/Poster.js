import './Subheader.css';
import Image from '../../../image/Subheader_Poster1.jpg';

const Poster = () => {
    return (
        <div className="Poster">
            <img className="Poster_img" src={Image} />
            <div className="subheader_nav">
                <div className="nav_tabs"><a href="#">Digital Marketing</a></div>
                <div className="nav_tabs"><a href="#">Coding & Web Development</a></div>
                <div className="nav_tabs"><a href="#">Graphics and Design</a></div>
                <div className="nav_tabs"><a href="#">Video and Animation</a></div>
                <div className="nav_tabs"><a href="#">buisness and Marketing</a></div>
            </div>
        </div>
    )
};

export default Poster;