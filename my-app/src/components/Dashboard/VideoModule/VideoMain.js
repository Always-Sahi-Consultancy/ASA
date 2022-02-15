import { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import VideoModule from "./VideoModule";
import VideoPlayer from "./VideoPlayer";
import './VideoMain.css';
import { useHistory } from "react-router-dom";

const VideoMain =()=>{
    const [videoData, setVideo] = useState("");
    const [courseName, setCourse] = useState("");

    const [currentVideo, setCurrent] = useState("");
    const [modules, setModules] = useState([]);

    const [moudlestate, setModule] = useState(false);
    const [videostate, setVideos] = useState(false);

    const location = useLocation();

    const data = async (course_name) =>{
        course_name = course_name.split("/")[2];
        try{
        const res = await fetch("/moduledata", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({course_name})
        });
        const data = await res.json();
        // console.log(data);
        if(res.status != 200){
            const error = new Error(res.error);
            throw error;
        }
        setModules(data["courseIndex"]);
        setCourse(data["courseName"]);
        setModule(true);
    }
    catch (error) {
        console.log(error);
    }
    }

    const videodata = async (course_name) =>{
        course_name = course_name.split("/")[2];
        try{
        const res = await fetch("/videodetails", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({course_name})
        });
        const data = await res.json();
        // console.log(data);
        setVideo(data);
        setVideos(true);
        if(res.status != 200){
            const error = new Error(res.error);
            throw error;
        }
    }
    catch (error) {
        console.log(error);
    }
    }

    const module_topic = (video) => {
        const viurl = window.location.pathname.split("/")[3];
        // console.log(video["videoName"].split(" ").join("")==viurl)
         if(video["videoName"].split(" ").join("") == viurl){
             return video;
         }
    }

    const currentMoudle = () => {
        const moduleName = window.location.pathname.split('/')[3];
        if(moudlestate && videostate){
            const [currentVideo] = videoData["courseVideos"].filter(module_topic);
            setCurrent(currentVideo);
        }
    }

    useEffect(() => {data(window.location.pathname); videodata(window.location.pathname)},[location]);
    useEffect(() => {currentMoudle();});

    return(
        <div className="video-row">
            <VideoModule courseIndex={modules} courseName={courseName}/>
            <VideoPlayer key={currentVideo._id} title={currentVideo.videoName} url={currentVideo.videoURL} material={currentVideo.videoResources} transcript={currentVideo.videoTranscript}/>
        </div>
    );
}

export default VideoMain;