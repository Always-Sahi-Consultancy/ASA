import './404Error.css';
import {useContext} from 'react';
import {UserContext} from '../../App';

const Error404 = () => {
    const {state, dispatch} = useContext(UserContext);
    return (
        <div className="error_404">
        <h2 className="error_404__message">Sorry, couldn't find the url you are searching for.</h2>
        <a href="/" className='error_404__link'>
            <button className="error_404__home">Go to Home</button>
        </a>
        </div>
    )
}

export default Error404;