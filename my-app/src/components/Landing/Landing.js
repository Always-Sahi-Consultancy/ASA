import Popular_main from './Popular Trainings/Popular_main';
import './Landing.css';
import Explore from './Explore/explore';
import Subheader from './Sub header/Subheader';
import ExploreNew from './Explore New/ExploreNew';

const Landing = () => {
    return (
        <div>
            <Subheader />
            <Popular_main />
            <Explore />
            <Popular_main/>
            <Explore/>
            <ExploreNew/>
        </div>
    )
};

export default Landing;