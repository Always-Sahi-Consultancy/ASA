import './founder.css';
import ASA_Founder from '../../../image/ASA -Home - Founder.jpg';

const Founder = () => {
    return (
        <div className='founder'>
            <div className='founder__image'>
                <img src={ASA_Founder} alt="Founder Image" className='founder__atharv'></img>
            </div>
            <div className='founder__details'>
                <div className='founder__name'>Atharv Sawant, Founder</div>
                <div className='founder__message'>“The baseline to a Nations development begins with Solidification of the Educational front, that we at Always Sahi Academy are Aiming to achieve.”</div>
            </div>
        </div>
    )
}

export default Founder;