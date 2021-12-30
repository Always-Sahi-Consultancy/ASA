import Popular_main from './Popular Trainings/Popular_main';
import './Landing.css';
import Explore from './Explore/explore';
import Subheader from './Sub header/Subheader';
import ExploreNew from './Explore New/ExploreNew';
import Notice from './Notice/Notice';
import Founder from './Founder/Founder';

const Landing = () => {
    return (
        <div>
            <Subheader />
            <Popular_main />
            <Explore />
            <ExploreNew />
            <Notice />
            <Founder />
        </div>
    )
};

export default Landing;