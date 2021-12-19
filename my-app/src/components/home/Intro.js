import Atharv_Sawant from '../../image/Atharv_Sawant_Transparent.png';

const Intro = () => {
    return(
    <div className="intro">
        <div className="intro__details">
            <div className="intro__company_title">
                <div className="intro__company_name">ALWAYS&nbsp;SAHI</div>
                <div className="intro__company_section">Academy</div>
            </div>
            <div className="intro__paragraphs">
                <div className="intro__paragraph_1">Our Courses create a baseline for your growth, we build tomorrow's leaders.</div>
                <div className="intro__paragraph_2">Be a Member of the “ASA Family” now from anywhere, just with a Laptop & a SmartPhone, & be the next leader in your field. </div>
            </div>
            <div className="intro__button">
                <button className="intro__show_how">Explore now!</button>
            </div>
        </div>
        <div className="intro__image">
            <img src={Atharv_Sawant} alt="Atharv Sawant" class="intro__Atharv"></img>
        </div>
    </div>);
};

export default Intro; 