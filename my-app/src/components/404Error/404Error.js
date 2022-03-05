import './404Error.css';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error_404">
        <h2 className="error_404__message">Sorry, couldn't find the url you are searching for.</h2>
        <Link to="/" className='error_404__link'>
            <button className="error_404__home">Go to Home</button>
        </Link>
        </div>
    )
}

export default Error404;