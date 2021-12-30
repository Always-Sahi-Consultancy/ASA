import './Subheader.css';
import Search from '../../../image/MG.png'
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
            <div className="Poster_Search">
                <h2 className="Search_heading">Find the perfect course for your resume</h2>
                <form className="Search_section">
                    <img className="search_symbol" src={Search}></img>
                    <input className="Search_bar" type="text" placeholder='Try "graphic designing"' />
                    <a className="Search" href="#">Search</a>
                </form>
            </div>
        </div>
    )
};

export default Poster;