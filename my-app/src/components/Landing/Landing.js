import Popular_main from './Popular Trainings/Popular_main';
import './Landing.css';
import Explore from './Explore/explore';
import ExploreNew from './Explore New/ExploreNew';

const Landing = () => {
    return (
        <div>
            <Popular_main/>
            <Explore/>
            <ExploreNew/>
        </div>
    )
};

export default Landing;