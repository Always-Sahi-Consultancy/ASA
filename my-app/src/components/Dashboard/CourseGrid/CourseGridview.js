import './CourseGridview.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import Slider from '../../../image/courses/slider.png';
// import Link from "react-router-dom";
import listBlack from '../../../image/courses/listBlack.png';
import listRed from '../../../image/courses/listRed.png';

const CourseGridview = () => {
    const data = [
        {'image': Coding ,
        'title': "CODING AND WEB DEVELOPMENT",
        'percentage': "45%",
        'link':"#"},
        {'image': Coding ,
        'title': "CERTIFIED COURSE IN ACCOUNTS AND COMPLIANCE",
        'percentage': "45%",
        'link': "#"},
        {'image': Coding ,
        'title': "CODING AND WEB DEVELOPMENT",
        'percentage': "45%",
        'link':"#"},
        {'image': Coding ,
        'title': "CODING AND WEB DEVELOPMENT",
        'percentage': "45%",
        'link':"#"}
    ];

    const Gridview = (props) => {
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
        );
    }
    return(
        <div className='Gridview__container'>
            <div className='Gridview__head'>
                <div className='Gridview__icon'>
                <img className='black' src={listBlack}></img>
                <img className='red' src={listRed}></img>
                </div>
            </div>
                <div className='Gridview__body'>
                    {data.map((item) => <Gridview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
        </div>
    )
};
export default CourseGridview;