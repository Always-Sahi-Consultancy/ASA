import './Subheader.css';
import Search from '../../../image/MG.png'
import Image from '../../../image/Subheader_Poster1.jpg';

const Poster = () => {
    return (
        <div className="Poster">
            <img className="Poster_img" src={Image} />
            <div className="subheader_nav">
                <div className="nav_tabs"><a href="#">Commerce & Accounts</a></div>
                <div className="nav_tabs"><a href="#">Coding & Web Development</a></div>
                <div className="nav_tabs"><a href="#">Buisness & Freelance</a></div>
                <div className="nav_tabs"><a href="#">Video & Animation</a></div>
                <div className="nav_tabs"><a href="#">Profile Building & Development</a></div>
            </div>
            <div className="Poster_Search">
                <div className="Search_heading">Find the perfect <span>course</span> for your resume</div>
                <form className="Search_section">
                    <div className="Search_left">
                        <img className="search_symbol" src={Search}></img>
                        <input className="Search_bar" type="text" placeholder='Try "graphic designing"' />
                    </div>
                    <a className="Search" href="#">search</a>
                </form>
            </div>
        </div>
    )
};

export default Poster;