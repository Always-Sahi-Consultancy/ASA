import './CourseListview.css';
import Slider from '../../../image/courses/slider.png';
import Arrow from '../../../image/courses/arrow.png';
// import Link from 'react-router-dom';
import Coding from '../../../image/work-g2261fc175_1920.jpg';


const CourseListview = (props) => {

    const data = [
        {
            'image': Coding,
            'title': "CODING AND WEB DEVELOPMENT",
            'percentage': "45%",
            'link': "#"
        },
        {
            'image': Coding,
            'title': "CERTIFIED COURSE IN ACCOUNTS AND COMPLIANCE",
            'percentage': "45%",
            'link': "#"
        },
        {
            'image': Coding,
            'title': "CODING AND WEB DEVELOPMENT",
            'percentage': "45%",
            'link': "#"
        },
        {
            'image': Coding,
            'title': "CODING AND WEB DEVELOPMENT",
            'percentage': "45%",
            'link': "#"
        }
    ];

    // const ListView = (props) => {
    //     return (
            
    //     )
    // };

    // const GridViewHandler = () => {
    //     const Gridview = document.querySelector(".Gridview__container");
    //     if (props.onChange === false) {
    //         Gridview.style.display = "none";
    //     }
    //     else if (props.onChange === true) {
    //         Gridview.style.display = "block";
    //     }
    // }

    return (
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