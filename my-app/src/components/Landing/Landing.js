import Popular_main from './Popular Trainings/Popular_main';
import './Landing.css';
import Explore from './Explore/explore';
import Subheader from './Sub header/Subheader';

const Landing = () => {
    return (
        <div>
            <Subheader />
            <Popular_main />
            <Explore />
        </div>
    )
};

export default Landing;