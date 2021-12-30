import './founder.css';
import ASA_Founder from '../../../image/ASA -Home - Founder.jpg';

const Founder = () => {
    return (
        <div className='founder'>
            <div className='founder__image'>
                <img src={ASA_Founder} alt="Founder Image" className='founder__atharv'></img>
            </div>
            <div className='founder__details'>
                <div className='founder__name'>Atharva Sawant, Founder</div>
                <div className='founder__message'>“A Platform that believes in creating new Leaders, that make the world a beautiful place to Live.”</div>
            </div>
        </div>
    )
}

export default Founder;