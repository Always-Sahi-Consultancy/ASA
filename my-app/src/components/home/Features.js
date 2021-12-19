import Feature1 from '../../image/Point 1.png';
import Feature2 from '../../image/Point 2.png';
import Feature3 from '../../image/Point 3.png';
import Feature4 from '../../image/Point 4.png';
import Feature5 from '../../image/Point 4.png';
import Feature6 from '../../image/Point 6.png';
import Feature7 from '../../image/Point 7.png';
import Feature8 from '../../image/Point 8.png';
import Feature9 from '../../image/Point 9.png';

const Features = () => {
    return(
        <div>
        <div className="page2__tagline">
            <div className="page2__bigText align__center">So What exactly do you get at Always Sahi Academy:- </div>
    </div>
    <div className="features">
        <div className="features__points">
            <div className="img_fit"><img src={Feature1} alt="Point 1" className="feature__content" /></div>
            <div className="features__text">Free courses, Initiatially to clear your Niche & Set your boundaries to start a Side Hustle. </div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature2} alt="Point 2" className="feature__content" /></div>
            <div className="features__text">A set of Courses specially designed by the experts, most of them Personally designed by Atharv.</div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature3} alt="Point 3" className="feature__content" /></div>
            <div className="features__text">Several Monthly Courses, to grow your skills on a Constant basis, with reputed Certifications. </div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature4} alt="Point 4" className="feature__content" /></div>
            <div className="features__text">Free Internship Programs, & Placement Opportunities for the Job Searching Individuals.        </div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature5} alt="Point 5" className="feature__content" /></div>
            <div className="features__text">Free Startup Consultancies for Individuals to start their Side Hustles. </div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature6} alt="Point 6" className="feature__content" /></div>
            <div className="features__text">Certifications from an ISO 9001: 2015 certified, & MCA Registered Organization. </div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature7} alt="Point 7" className="feature__content" /></div>
            <div className="features__text">Weekly Live Group Calls & Meetings to Clear all your queries, and solve your problems.</div>
        </div>
        <div className="features__points">
            <div className="img_fit"><img src={Feature8} alt="Point 8" className="feature__content" /></div>
            <div className="features__text">Constant Calls & Support from Experts and Trainers on a Recurring Basis+.</div>
        </div>
        <div className="features__points last__point">
            <div className="img_fit"><img src={Feature9} alt="Point 9" className="feature__content" /></div>
            <div className="features__text">Freebies in the form of PDFs, Resource Papers, & Several Free Toolkits, helpful for you to grow in Corporate as well as Build your Side Hustle. </div>
        </div>
    </div>
    </div>
    );
}

export default Features;