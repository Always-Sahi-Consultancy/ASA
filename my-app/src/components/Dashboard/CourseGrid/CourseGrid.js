import CourseGridview from "./CourseGridview";
import CourseListview from "./CourseListview";
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import gridBlack from '../../../image/courses/gridBlack.png';
import gridRed from '../../../image/courses/gridRed.png';
import listBlack from '../../../image/courses/listBlack.png';
import listRed from '../../../image/courses/listRed.png';

const CourseGrid = () => {

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
    

    return(
        <div>
        <div className='Gridview__container'>
            <div className='Gridview__head'>
                <div className='Gridview__icon'>
                <img className='black' src={listBlack}></img>
                <img className='red' src={listRed}></img>
                </div>
            </div>
                <div className='Gridview__body'>
                    {data.map((item) => <CourseGridview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
        </div>            
        <div className='Listview__container'>
            <div className='Listview__head'>
                <div className='Listview__icon'>
                <img className='black' src={gridBlack}></img>
                <img className='red' src={gridRed}></img>
                </div>
            </div>
                <div className='Listview__body'>
                    {data.map((item) => <CourseListview image={item.image} title={item.title} percentage={item.percentage} />)}
                </div>
        </div>        </div>
        
        )
};
export default CourseGrid;