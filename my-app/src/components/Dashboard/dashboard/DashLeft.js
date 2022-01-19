import './DashLeft.css';

const DashLeft = () =>{
    return(
        <div className='dashleft-container'>
            <div className='dash__icon'>A</div>
            <div className='dash__name'>Akhil Nair</div>
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