import ChangePassword from './ChangePassword';
import DashProgress from './MyProgress';
import './Dash.css';
import DashLeft from './DashLeft';
import HelpCenter from './HelpCenter';

const Dash= () =>{
    return(
        <div className='dash-container'>
            <DashLeft/>
            <HelpCenter/>
        </div>
    );
}

export default Dash;