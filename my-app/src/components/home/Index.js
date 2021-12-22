import './home.css';
import './home_tab.css';
import './home_mobile.css';
import Intro from './Intro.js';
import Guest from './Guest';
import Join from './Join';
import Featrues from './Features';
import Note2 from './Note2';
import { useEffect } from 'react';

const Index = () =>{
    useEffect(() => {
        document.title ="Always Sahi Academy | Home";
    });

    return(
        <div>
            <Intro />
            <Guest />
            <Join />
            <Featrues />
            <Note2 />
        </div>
    );
}

export default Index;