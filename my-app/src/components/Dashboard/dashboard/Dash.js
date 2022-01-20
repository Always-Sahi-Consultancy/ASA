import ChangePassword from './ChangePassword';
import DashProgress from './MyProgress';
import './Dash.css';
import DashLeft from './DashLeft';
import HelpCenter from './HelpCenter';
import EditProfile from './EditProfile';

const Dash= () =>{
    return(
        <div className='dash-container'>
            <DashLeft/>
            <EditProfile/>
        </div>
    );
}

export default Dash;