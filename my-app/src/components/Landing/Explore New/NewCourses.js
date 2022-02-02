import {Link} from 'react-router-dom';
import './NewCourses.css';


function NewCourses(props) {

    return <div>
        {/* <Link to={props.link}> */}
        <div className='content'>
            <a className='containerNC'>
                <div className='element'><img src={props.Image} className='element_img'></img></div>
                <div className='element_name'>{props.Text}</div>
            </a>
        </div>
        {/* </Link>  */}
    </div>
}

export default NewCourses;