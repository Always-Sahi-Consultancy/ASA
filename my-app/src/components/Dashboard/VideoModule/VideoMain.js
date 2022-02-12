import { useEffect, useState } from "react";
import VideoModule from "./VideoModule";
import VideoPlayer from "./VideoPlayer";
import './VideoMain.css';
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const VideoMain =()=>{

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();

    const [data, setData] = useState({});

    const callData = async () => {
        try {
            const res = await fetch("/module", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log(data);
            setData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    }

    useEffect(() => {
        callData();
    }, []);

    return(
        <div className="video-row">
            <VideoModule/>
            <VideoPlayer/>
        </div>
    );
}

export default VideoMain;