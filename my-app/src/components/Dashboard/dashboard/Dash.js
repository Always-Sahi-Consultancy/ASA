import ChangePassword from './ChangePassword';
import DashProgress from './MyProgress';
import './Dash.css';
import DashLeft from './DashLeft';
import HelpCenter from './HelpCenter';
import EditProfile from './EditProfile';
import { useState } from 'react';

const Dash = () => {
    const [page, setPage] = useState("Myprogress");
    return (
        <div className='dash-container'>
            <DashLeft setPage={setPage} />
            {page === "Myprogress" && <DashProgress />}
            {page === "helpCenter" && <HelpCenter />}
            {page === "EditProfile" && <EditProfile />}
            {page === "ChangePassword" && <ChangePassword />}
        </div>
    );
}

export default Dash;