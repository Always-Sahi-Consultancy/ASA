import { useState } from "react";
import HeadingText from "./components/HeadingText";
import HearFrom from "./components/HearFrom";
import VideoTest from "./components/VideoTest";
import './css/root.css'

const VideoInfo =[
  {
    id:'v1',
    name:'Kajal Agarwal',
    text:'It was during the second wave of COVID-19, when young students like Kajal were facing the issue of Managing their precious time, to invest in their College, skilling & other stuff. It was then, Always Sahi Academy introduced “Navratnas of Time Management”,  a free workshop for youngsters to manage their time, with the 9 best formulas. ',
    rating:'4.5/5',
  }
];

function App() {
  const [item, setItems ]= useState(VideoInfo);
  return (
    <div>
    <HeadingText/>
    <HearFrom/>
    <VideoTest item={item}/>

    </div>
  );
}


export default App;
