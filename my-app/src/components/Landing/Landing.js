import Popular_main from './Popular Trainings/Popular_main';
import './Landing.css';
import Explore from './Explore/explore';
import Subheader from './Sub header/Subheader';
import ExploreNew from './Explore New/ExploreNew';
import Notice from './Notice/Notice';
import Founder from './Founder/Founder';
import Freebies from './Freebies/Freebies';

const Landing = () => {
    return (
        <div>
            <Subheader />
            <Popular_main />
            <Explore />
            <ExploreNew />
            <Freebies />
            <Notice />
            <Founder />
        </div>
    )
};

export default Landing;