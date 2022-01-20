import './CourseGridview.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import Slider from '../../../image/courses/slider.png';
// import Link from "react-router-dom";
import listBlack from '../../../image/courses/listBlack.png';
import listRed from '../../../image/courses/listRed.png';

const CourseGridview = (props) => {
    return(
        <div className='Gridview__element' >
                <img className='Gridview__picture' src={props.image}></img>
                <h4>{props.title}</h4>
                <div className='Gridview__progress'>
                    <div className='Gridview__bar'>
                        <img src={Slider} alt='slider'></img>
                    </div>
                    <h4>{props.percentage}</h4>
                </div>
            </div>
    )
};
export default CourseGridview;