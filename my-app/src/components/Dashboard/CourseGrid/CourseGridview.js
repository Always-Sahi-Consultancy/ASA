import './Coursegridview.css';
import Slider from '../../../image/courses/slider.png';

const CourseGridview = (props) => {

    

    // const GridView = (props) => {
    //     return (
            
    //     )
    // };
    // const GridIconHandler = () => {
    //     const Gridview = document.querySelector(".Gridview__container");
    //     if (props.onChange === true) {
    //         Gridview.style.display = "block";
    //     }
    //     else if (props.onChange === false) {
    //         Gridview.style.display = "none";
    //     }
    // }

    return (
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