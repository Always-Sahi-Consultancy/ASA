import './CourseGridview.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import Slider from '../../../image/courses/slider.png';
import Link from "react-router-dom";

const CourseGridview = () => {
    const data = [
        {'image': Coding ,
        'title': "Coding and Web Development",
        'percentage': "45%",
        'link':"#"},
        {'image': Coding ,
        'title': "Coding and Web Development",
        'percentage': "45%",
        'link': "#"},
        {'image': Coding ,
        'title': "Coding and Web Development",
        'percentage': "45%",
        'link':"#"},
        {'image': Coding ,
        'title': "Coding and Web Development",
        'percentage': "45%",
        'link':"#"}
    ];

    const Gridview = (props) => {
        return(
            <Link to={props.link} className='Gridview__element' >
                <img src={props.image}></img>
                <h3>{props.title}</h3>
                <div className='Gridview__progress'>
                    <div className='Gridview__bar'>
                        <img src={Slider} alt='slider'></img>
                    </div>
                    <h4>{props.percentage}</h4>
                </div>
            </Link>
        );
    }
    return(
        <div className='Gridview__container'>
            <div className='Gridview__head'>
                <div className='Gridview__icon'></div>
            </div>
                <div className='Gridview__body'>
                    {data.map((item) => <Gridview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
        </div>
    )
};
export default CourseGridview;