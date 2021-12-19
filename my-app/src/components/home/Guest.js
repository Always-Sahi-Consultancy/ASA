import GuestAissms from '../../image/guest_aissms_b.png';
import GuestMit from '../../image/guest_mit_b.png';
import GuestModern from '../../image/guest_modern_b.png';
import GuestUsdc from '../../image/guest_usdc_b.png';
import GuestLh from '../../image/guest_lh_b.png';

const Guest = () => {
    return(
            <div className="guest">
                <div className="guest__main">GUEST SPEAKER @</div>
                <div className="guest__places">
                    <img src={GuestAissms} alt="Aissms COE" className="guest__place" />
                    <img src={GuestMit} alt="MIT" className="guest__place" />
                    <img src={GuestModern} alt="Modern" className="guest__place" />
                    <img src={GuestUsdc} alt="USDC" className="guest__place" />
                    <img src={GuestLh} alt="Lighthouse" className="guest__place" />
                </div>
            </div>
    )
};

export default Guest;