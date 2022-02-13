import { useEffect, useState } from "react";
import VideoModule from "./VideoModule";
import VideoPlayer from "./VideoPlayer";
import './VideoMain.css';
import React, { useEffect, useState } from "react";

const VideoMain =()=>{
    const [videoData, setVideo] = useState("");

    const [currentVideo, setCurrent] = useState("");
    const [modules, setModules] = useState();

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
        console.log(data);
        if(res.status != 200){
            const error = new Error(res.error);
            throw error;
        }
        setModules(data);
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
            body: JSON.stringify({"course_name":course_name})
        });
        console.log(res.json());
        const data = res.json();
        setVideo(data);
        if(res.status != 200){
            const error = new Error(res.error);
            throw error;
        }
    }
    catch (error) {
        console.log(error);
    }
    }

    // useEffect(data(),[])
    useEffect(() => {data(window.location.pathname); videodata(window.location.pathname); },[])

    return(
        <div className="video-row">
            <VideoModule />
            <VideoPlayer />
        </div>
    );
}

export default VideoMain;