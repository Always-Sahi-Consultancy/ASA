import Slider from 'react-slick';
import {useEffect, useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';
import './MyProgress.css';
import WebDevelopmentForEveryone from '../../../image/work-g2261fc175_1920.jpg';
import Arrow from '../../../image/courses/arrow.png';
import Slide from './slide';
import { Link } from 'react-router-dom';

const DashProgress= () =>{

    const percentage = 69;
    const [sliderRef, setSliderRef] = useState(null);
    const NextArrow = ({ onClick }) => {
        return (
            <div className='Dashprogress__arrow' onClick={onClick}>
            <img src={Arrow}></img>
            </div>
        );
    };
    const PrevArrow = () => {
        return (
            <div className='block'></div>
        );
    };

    let sliderSettings = {
        infinite: true,
        lazyload: true,
        autoplay: true,
        slidesToShow: 4,
        speed: 2000,
        autoplaySpeed:2000,
        pauseOnHover:true,
        centerPadding: 0,
        centerMode: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        SlidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };

    // const data = [
    //     {'image': Coding ,
    //     'title': "CODING AND WEB DEVELOPMENT",
    //     'percentage': "45%",
    //     'link':"#"},
    //     {'image': Coding ,
    //     'title': "CERTIFIED COURSE IN ACCOUNTS AND COMPLIANCE",
    //     'percentage': "45%",
    //     'link': "#"},
    //     {'image': Coding ,
    //     'title': "CODING AND WEB DEVELOPMENT",
    //     'percentage': "45%",
    //     'link':"#"},
    //     {'image': Coding ,
    //     'title': "CODING AND WEB DEVELOPMENT",
    //     'percentage': "45%",
    //     'link':"#"},
    //     {'image': Coding ,
    //     'title': "CODING AND WEB DEVELOPMENT",
    //     'percentage': "45%",
    //     'link':"#"}
    // ]; 

    const [data, setData] = useState("");
    const [loaded, setLoaded] = useState(false);

    const DashProgressGrid = (props) => {
        const courseImages = {
            "Web Development For Everyone": WebDevelopmentForEveryone
        }

        return(
            <Link to={"/Course/"+props.title.split(" ").join("-")+"/"+props.firstVideo} >
            <div className='Dashprogress__element' >
                <img className='Dashprogress__picture' src={courseImages[props.image]}></img>
                <h4>{props.title}</h4>
                {/* <div className='Dashprogress__progress'>
                    <div className='Dashprogress__bar'>
                        <div className='Dashprogress__color'></div>
                    </div>
                    <h4>{props.percentage}</h4>
                </div> */}
            </div>
            </Link>
        )
    };

    const courses = async () => {
        try{
            const data = await fetch('/courseenroll', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const courses = await data.json();
            setData(courses["courseEnrolled"]);
            setLoaded(true);
            // console.log(courses);
            if(data.status !=  200){
                const error = new Error();
                throw error;
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {courses()},[])

    return(
        <div className='Dashprogress__container'>
           <div className='Dashprogress__heading'>My Progress</div>
           <div className='Dashprogress__topic'>My Courses</div>
           <div className='Dashprogress__contain'>
           {/* <Slider ref={setSliderRef} {...sliderSettings} className='Dashprogress__body'> */}
           {console.log(data)}
            {loaded?data.map((item) => <DashProgressGrid image={item["courseName"]} title={item["courseName"]} percentage={item["videoStatus"]} firstVideo={item.firstVideo}/>) : null}
            {/* </Slider> */}
            {/* <img className='Dashprogress__arrow' onCLick={sliderRef?.slickNext} src={Arrow}></img> */}
           </div>
            <div className='Dashprogress__lastcourse'>
                <h4 className='Lastcourse__head'>Coding And Web Development</h4>
                <div className='Dashprogress__completed subdash'>
                   
                    <div className='Circle'>
                    <CircularProgressbar 
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        pathColor: `rgba(235, 106, 106, 0.97)`,
                        textColor: `rgba(235, 106, 106, 0.97)`,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                    />
                    </div>
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