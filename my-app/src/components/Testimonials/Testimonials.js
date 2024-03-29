import { useState } from "react";
import HeadingText from "./HeadingText";
import HearFrom from "./HearFrom";
import VideoTest from "./VideoTest";
import PhotoTestContainer from "./PhotoTestContainer";
import ScreenShots from "./ScreenShots";
import { useEffect } from "react";

const Testimonials = () => {

    useEffect(() => {
        document.title = "Always Sahi Academy | Testimonials";
    })

    const VideoInfo = [
        {
            id: 'v1',
            name: 'Kajal Agarwal',
            text: 'It was during the second wave of COVID-19, when young students like Kajal were facing the issue of Managing their precious time, to invest in their College, skilling & other stuff. It was then, Always Sahi Academy introduced “Navratnas of Time Management”,  a free workshop for youngsters to manage their time, with the 9 best formulas. ',
            rating: '4.5/5 ⭐️',
        }
    ];

    const [item, setItems] = useState(VideoInfo);
    return (
        <div>
            <div>
                <HeadingText />
                <HearFrom />
                <VideoTest item={item} />   
            </div>
            
            <PhotoTestContainer/>
            <ScreenShots/>
        </div>
    );
}

export default Testimonials;