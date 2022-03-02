import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashLeft.css';

const DashLeft = (props) => {

    // const [progress, setProgress] = useState("Myprogress");
    // props.setPage(progress);


    const navigate = useNavigate();

    const [userData, setuserData] = useState({});

    const callDashPage = async () => {
        try {
            const res = await fetch("/dash", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log(data);
            setuserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    }

    // Logout
    const logout = async () => {
        try {
            console.log("Inside");
            const res = await fetch('/logout', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res.status == 200) {
                console.log(res);
                alert("Logout Successful");
                navigate("/")
            }
            else {
                alert("Logout Unsuccessful");
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        callDashPage();
    }, []);
    //  ${ progress ? 'show_tab' : 'hide_tab' }
    const [dashLeft, setdashLeft] = useState(false);
    const dashLeftHandler = () => {
        const dash_downarrow = document.querySelector('.dash_downarrow');
        setdashLeft(!dashLeft);
        if (dashLeft) {
            dash_downarrow.style.transform = "rotate(0deg)";
        }
        else {
            dash_downarrow.style.transform = "rotate(180deg)";
        }
    }
    return (
        <div className='dashleft-container'>
            <div className="dashLeft_icon">
                <div className='dash__icon'>M</div>
                <div className="dash_downarrow" onClick={dashLeftHandler}>&#x2193;</div>
            </div>
            <div className={`${dashLeft ? "dashLeftVisible" : "dashLeftNone"}`}>
                <form method="GET">
                    <div className='dash__name'>{userData.userFirstName + " " + userData.userLastName}</div>
                </form>
                <div className='dash__tabs'>
                    <div className='dash__progress dash__tab' onClick={() => { props.setPage("Myprogress") }}>My Progress</div>
                    <div className='dash__profile dash__tab' onClick={() => { props.setPage("EditProfile") }}>Edit Profile</div>
                    <div className='dash__view dash__tab'>View Dash Board</div>
                    {/* <div className='dash__help dash__tab' onClick={() => { props.setPage("helpCenter") }}>Help Centre</div> */}
                    <div className='dash__password dash__tab' onClick={() => { props.setPage("ChangePassword") }}>Change Password</div>
                    <div className='dash__logout dash__tab' onClick={logout} >Logout</div>
                </div>
            </div>
        </div>
    );
}

export default DashLeft;