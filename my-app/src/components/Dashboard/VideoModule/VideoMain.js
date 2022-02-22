import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VideoModule from "./VideoModule";
import VideoPlayer from "./VideoPlayer";
import './VideoMain.css';
import VideoContent from './VideoContent';
import React from 'react';

const VideoMain = (props) => {
    const [videoData, setVideo] = useState("");
    const [courseName, setCourse] = useState("");

    const [currentVideo, setCurrent] = useState("");
    const [modules, setModules] = useState([]);

    const [moudlestate, setModule] = useState(false);
    const [videostate, setVideos] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const [nextVideo, setNext] = useState("");
    const [prevVideo, setPrev] = useState("");

    const data = async (course_name) => {
        course_name = course_name.split("/")[2];
        try {
            const res = await fetch("/moduledata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ course_name })
            });
            const data = await res.json();
            // console.log(data);
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
            setModules(data["courseIndex"]);
            setCourse(data["courseName"]);
            setModule(true);
        }
        catch (error) {
            console.log(error);
            navigate("/");
        }
    }

    const videodata = async (course_name) => {
        course_name = course_name.split("/")[2];
        try {
            const res = await fetch("/videodetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ course_name })
            });
            const data = await res.json();
            // console.log(data);
            setVideo(data);
            setVideos(true);
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (error) {
            console.log(error);
            navigate("/");
        }
    }

    const module_topic = (video) => {
        const viurl = window.location.pathname.split("/")[3];
        // console.log(video["videoName"].split(" ").join("")==viurl)
        if (video["videoName"].split(" ").join("") == viurl) {
            return video;
        }
    }

    const currentMoudle = () => {
        const moduleName = window.location.pathname.split('/')[3];
        if (moudlestate && videostate) {
            const [currentVideo] = videoData["courseVideos"].filter(module_topic);
            if (currentVideo != undefined)
                setCurrent(currentVideo);
            else {
                window.location.pathname = "404eroor";
            }
        }
    }

    // const prevNext = (video) => {
    //     const module = window.location.pathname.split("/")[3];
    //     if(moudlestate && videostate){
    //         const current = videoData["courseVideos"].indexOf(currentVideo);
    //         if(current<1){
    //             setPrev(videoData["courseVideos"][current-1]["videoName"].split(" ").join(""));
    //     }
    //     else{
    //             setPrev("/#");
    //     }
    //         if(current< videoData["courseVideos"].length()-1){
    //             setNext(videoData["courseVideos"][current+1]["videoName"].split(" ").join(""));
    //     }
    //     else{
    //         setNext("/#");
    //     }
    //         console.log(prevVideo);
    //     }
    // }

    useEffect(() => { data(window.location.pathname); videodata(window.location.pathname); }, [location]);
    useEffect(() => { currentMoudle(); });
    // const videoData = props.data;
    const [videoData1, setVideo1] = useState([]);

    useEffect(() => { setVideo1(modules) })
    const [videoContainerVisible,setVideoContainerVisible]=useState(false);
    const videoContainer=()=>{
        setVideoContainerVisible(!videoContainerVisible);
    }
    return (
        <div>
            <div className="module" onClick={videoContainer}>Module
                <div className={`video-container1 ${videoContainerVisible ? "setVisible" : "setNotVisible"}`}>
                    {
                        videoData1.map((item) =>
                            <VideoContent name={item.name} id={item.id} details={item.details} video={courseName} />
                        )
                    }
                </div>
            </div>
            <div className="video-row">
                <VideoModule courseIndex={modules} courseName={courseName} />
                <VideoPlayer key={currentVideo._id} title={currentVideo.videoName} url={currentVideo.videoURL} material={currentVideo.videoResources} transcript={currentVideo.videoTranscript} />
            </div>
        </div>
    );
}

export default VideoMain;