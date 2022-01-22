import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashLeft.css';

const DashLeft = () =>{

    const navigate = useNavigate();

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
            console.log(data);
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/testimonials");
        }
    }

    useEffect(() => {
        callDashPage();
    }, []);

    return(
        <div className='dashleft-container'>
            <div className='dash__icon'>A</div>
            <form method="GET">
            <div className='dash__name'>Akhil Nair</div>
            </form>
            <div className='dash__tabs'>
                <div className='dash__progress dash__tab'>My Progress</div>
                <div className='dash__profile dash__tab'>Edit Profile</div>
                <div className='dash__view dash__tab'>View Dash Board</div>
                <div className='dash__help dash__tab'>Help Centre</div>
                <div className='dash__password dash__tab'>Change Password</div>
            </div>
        </div>
    );
}

export default DashLeft;