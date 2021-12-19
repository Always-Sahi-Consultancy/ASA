import Logo from "../../image/AS_Logo_Transparent.png";
import './header.css';
const Header = (props) => {
    return (
        <div>
            <header>
                <div className="brand__section">
                    <div className="brand">
                        <img src={Logo} className="brand__image" />
                    </div>
                    <button className="hamburger" id="side_bar">
                        <div className="hamburger__bar"></div>
                        <div className="hamburger__bar"></div>
                        <div className="hamburger__bar"></div>
                    </button>
                </div>
                <div className="options" id="options">
                    <div className="navigate" id="navigation">
                        <div className="navigation_section">
                            <div className="navigate__link"><a href="./">Home</a></div>
                            <div className="navigate__link"><a href="./ourStory.php">ASA Story</a></div>
                            <div className="navigate__link"><a onClick={() => props.onChange("Freebies")}>Freebies</a></div>
                            <div className="navigate__link"><a onClick={() => props.onChange("Testimonials")}>Testimonials</a></div>
                            <div className="navigate__link"><a href="./contactUs.php">Contact us</a></div>
                        </div>
                    </div>
                    <div className="login">
                        {/* <div className="login__button">Student&nbsp;Login</div> */}
                        <div className="login__button"><a onClick={() => props.onChange("Enrollnow")}>Enroll&nbsp;Now</a></div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;