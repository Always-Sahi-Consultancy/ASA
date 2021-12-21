import JoinImage from '../../image/2nd Page Image 1.png';

const Join = () => {
    return (
        <div>
        <div className="join">
            <div>
                <img src={JoinImage} alt="laptop" className="join__images" />
            </div>
            <div className="join__tagline">
                <div className="join__bigText">Identifying & Exploring your specific Skills is what turns your Idea Into a Great Side Hustle. Where upskilling yourself plays a Very Important role. </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="note">
            <div className="text">Join <b>Always Sahi Academy</b>, where we have designed our courses exactly in the same manner, where you are handheld right from the beginning until you grow & guide you in every aspect of life. </div>
        </div>
        <div className="button2">
            <button className="intro__show_how">Show Me How!</button>
        </div>

        <div className="page2__main">
            <div className="hit">
                <div className="headingText2">Hit a “Free Training” Button if this sounds like to you:-</div>
            </div>

            <div className="hitPoints">
                <ul className="points">
                    <li>   You see people making good financial Source of Income. </li>
                    <li>  *You see People having the Freedom to Travel around, manage Finances & Explore their Life</li>
                    <li>  You want to make an effort, with some guidance & Support.</li>
                    <li>  You see people at different stages of life. </li>
                </ul>
            </div>
                <div className="bigTextCol">
                    Then, you are nowhere far from them, you are just one step away from exploring the life of your Freedom. Freedom of Travelling to your Favourite places, freedom to make your own Identity, freedom to build your own empire. 
                </div>
                <div className="bigTextCol">
                    We at <b>Always Sahi Academy</b> aim to build a community, with the people like you & help you with proper training & guidance, becoming the pillar to support you with your dream & growing your Side hustle, with Step by Step training modules, handheld by the experts.
                </div>
        
        </div>
        <div className="button2 buttonTrain">
            <button className="intro__show_how">give me a free training ! </button>
        </div>
        </div>
    );
};

export default Join;