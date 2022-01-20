
import './MyProgress.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';


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
            </div>
            <div className='Dashprogress__lastcourse'>
                <h4>Last Course Name</h4>
                <div className='Dashprogress__completed'>
                    //Progress
                    <h3>Completed</h3>
                </div>
                <div className='Dashprogress__wereon'>
                    <h4>You were on</h4>
                    <div className='Dashprogress__video'></div>
                </div>
                <div className='Dashprogress__module'>
                    <h3>Module Name</h3>
                    <h4>Sub-Module Name</h4>
                    <button>Continue</button>
                </div>
                <div className='Dashprogress__certificate'>
                    <button>Certificate</button>
                </div>
            </div>
        </div>
    );
}

export default DashProgress;