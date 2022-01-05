import Company from '../../../image/AS_Logo_Transparent.png';
import Cart from '../../../image/Cart.jpg'

const Header_Dash = () => {
    return (
        <Header className="Header">
            <button onClick={showMenu}>
                <div className="header_icon_bar" id="header_icon_1"></div>
                <div className="header_icon_bar" id="header_icon_2"></div>
                <div className="header_icon_bar" id="header_icon_3"></div>
            </button>
            <div className="header_com_name">
                <img className="header_com_img" src={Company}></img>
            </div>
            <div className="header_main">
                <a href="#">Online Course</a>
                <div className="offer">
                    <label for="offer_courses">OFFER</label>
                    <a href="#" id="offer_courses">&#9660;</a>
                </div>
                <a href="#"><img src={Cart}></img></a>
            </div>
            <div className="Header_profile">
                <div className="profile_photo"><img alt="PP"></img></div>
                <a href="#" id="profile_dropdown">&#9660;</a>
            </div>
        </Header>
    );
};

export default Header_Dash;