import { useEffect, useState } from 'react';
import Popular_main from './Popular Trainings/Popular_main';
import './Landing.css';
import Explore from './Explore/explore';
import Subheader from './Sub header/Subheader';
import ExploreNew from './Explore New/ExploreNew';
import Notice from './Notice/Notice';
import Founder from './Founder/Founder';
import Freebies from './Freebies/Freebies';
import Stats from './Stats/Stats';

const Landing = () => {
    useEffect(() => {
        document.title = "Always Sahi Academy";
    })

    return (
        <div>
            <Subheader />
            <Popular_main />
            <Explore />
            <ExploreNew />
            <Freebies />
            <Stats/>
            <Notice />
            <Founder />
        </div>
    )
};

export default Landing;