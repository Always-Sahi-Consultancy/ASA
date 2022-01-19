import './CourseListview.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import Slider from '../../../image/courses/slider.png';
import Arrow from '../../../image/courses/arrow.png';
import Link from 'react-router-dom';

const CourseListview = () => {
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

    const Listview = (props) => {
        return(
            <div className='Listview__element' >
                <img src={props.image}></img>
                <div className='Listview__progress'>
                    <h3>{props.title}</h3>
                    <div className='Listview__bar'>
                        <img src={Slider} alt='slider'></img>
                    </div>
                </div>
                <Link  to={props.link} className="Listview__continue">Continue</Link>
                <Link  to={props.link} className="Listview__arrow"><img src={Arrow} alt='arrow'></img></Link>
            </div>
        );
    }
    return(
        <div className='Listview__container'>
            <div className='Listview__head'>
                <div className='Listview__icon'></div>
            </div>
                <div className='Listview__body'>
                    {data.map((item) => <Listview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
        </div>
    )
};
export default CourseListview;