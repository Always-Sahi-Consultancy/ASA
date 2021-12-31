import './ExploreNew.css';
import NewCourses from './NewCourses';
import Code from '../../../image/code.png';
import Apple from '../../../image/Apple.png';
import Graph from '../../../image/g.png';
import Pencil from '../../../image/pencil.png';
import Video from '../../../image/videoclap.png';
import Tax from '../../../image/tax.png';
import Money from '../../../image/money.png';

function ExploreNew() {
    const new_Courses = [
        {
            id: '1',
            Text: 'Programming and Tech',
            Image: Code
        },
        {
            id: '2',
            Text: "Graphic designing",
            Image: Pencil
        },
        {
            id: '3',
            Text: "taxation",
            Image: Tax
        },
        {
            id: '4',
            Text: "Video editing and animation",
            Image: Video
        },
        {
            id: '5',
            Text: "Marketing",
            Image: Graph
        },
        {
            id: '6',
            Text: "Finance",
            Image: Money
        }
    ]
    return <div className='NewContainer'>
        <div className='NewContainer__head'>EXPLORE NEW COURSES</div>
        <div className="new_Container_main">
            {new_Courses.map((item) => (
                <NewCourses Text={item.Text}
                    Image={item.Image}
                />
            ))}
        </div>
        
    </div>
}

export default ExploreNew;