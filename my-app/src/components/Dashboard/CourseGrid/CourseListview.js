import './CourseListview.css';
import Slider from '../../../image/courses/slider.png';
import Arrow from '../../../image/courses/arrow.png';
// import Link from 'react-router-dom';


const CourseListview = (props) => {
    return(
        <div className='Listview__element' >
                <img className='Listview__picture' src={props.image}></img>
                <div className='Listview__progress'>
                    <h3>{props.title}</h3>
                    <div className='Listview__bar'>
                        <img src={Slider} alt='slider'></img>
                    </div>
                </div>
                <button className="Listview__continue">Continue</button>
                <div className="Listview__arrow"><img src={Arrow} alt='arrow'></img></div>
            </div>
    )
};
export default CourseListview;