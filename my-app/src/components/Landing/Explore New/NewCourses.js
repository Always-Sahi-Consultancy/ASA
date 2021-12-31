import './NewCourses.css';


function NewCourses(props) {

    return <div>
        <div className='content'>
            <div className='element'><img src={props.Image} className='element_img'></img></div>
            <div className='element_name'>{props.Text}</div>
        </div>
    </div>
}

export default NewCourses;