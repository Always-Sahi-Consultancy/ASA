import Logo from "../../image/AS_Logo_Transparent.png";
import './header.css';
const Header = (props) => {
    const navigator = function() {
        const nav_bar = document.getElementById("options");
        const hamburger = document.getElementsByClassName('hamburger__bar');
        nav_bar.classList.toggle('open');
        for(var i=0;i<3;i++){
            hamburger[i].classList.toggle(`hamburger__${i+1}`);
        }
    };

    return (
        <div>
            <header>
                <div className="brand__section">
                    <div className="brand">
                        <img src={Logo} className="brand__image" alt="Logo" />
                    </div>
                    <button className="hamburger" id="side_bar" onClick={navigator}>
                        <div className="hamburger__bar"></div>
                        <div className="hamburger__bar"></div>
                        <div className="hamburger__bar"></div>
                    </button>
                </div>
                <div className="options" id="options">
                    <div className="navigate" id="navigation">
                        <div className="navigation_section">
                            <div className="navigate__link"><a onClick={() => props.onChange("Index")}>Home</a></div>
                            <div className="navigate__link"><a onClick={() => props.onChange("OurStory")}>ASA Story</a></div>
                            <div className="navigate__link"><a onClick={() => props.onChange("Freebies")}>Freebies</a></div>
                            <div className="navigate__link"><a onClick={() => props.onChange("Testimonials")}>Testimonials</a></div>
                            <div className="navigate__link"><a onClick={() => props.onChange("ContactUs")}>Contact us</a></div>
                        </div>
                    </div>
                    <div className="login">
                        <div className="login__button">Student&nbsp;Login</div>
                        <div className="login__button"><a onClick={() => props.onChange("Enrollnow")}>Enroll&nbsp;Now</a></div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;