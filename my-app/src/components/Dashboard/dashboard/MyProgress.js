
import './MyProgress.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import Arrow from '../../../image/courses/arrow.png';

const DashProgress= () =>{

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

    const DashProgressGrid = (props) => {
        return(
            <div className='Dashprogress__element' >
                <img className='Dashprogress__picture' src={props.image}></img>
                <h4>{props.title}</h4>
                <div className='Dashprogress__progress'>
                    <div className='Dashprogress__bar'>
                        <div className='Dashprogress__color'></div>
                    </div>
                    <h4>{props.percentage}</h4>
                </div>
            </div>
        )
    };

    return(
        <div className='Dashprogress__container'>
           <div className='Dashprogress__heading'>My Progress</div>
           <div className='Dashprogress__topic'>My Courses</div>
           <div className='Dashprogress__body'>
                {data.map((item) => <DashProgressGrid image={item.image} title={item.title} percentage={item.percentage} />)}
                <img className='Dashprogress__arrow' src={Arrow}></img>
            </div>
            <div className='Dashprogress__lastcourse'>
                <h4 className='Lastcourse__head'>Coding And Web Development</h4>
                <div className='Dashprogress__completed subdash'>
                    {/* Progress */}
                    <h4>Completed</h4>
                </div>
                <div className='Dashprogress__wereon subdash'>
                    <h3>You were on</h3>
                    <div className='Dashprogress__video'></div>
                </div>
                <div className='Dashprogress__module subdash'>
                    <h3>Coding and Web Development</h3>
                    <h4>Sub-Module Name</h4>
                    <button>Continue</button>
                </div>
                <div className='Dashprogress__certificate subdash'>
                    <button>Certificate</button>
                </div>
            </div>
        </div>
    );
}

export default DashProgress;