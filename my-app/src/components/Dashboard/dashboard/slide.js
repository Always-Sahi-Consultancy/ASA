import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MyProgress.css';
import Coding from '../../../image/work-g2261fc175_1920.jpg';
import Arrow from '../../../image/courses/arrow.png';


const Slide = () => {

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }

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
        <Slider {...sliderSettings} className='Dashprogress__body'>
            {data.map((item) => <DashProgressGrid image={item.image} title={item.title} percentage={item.percentage} />)}
            <img className='Dashprogress__arrow' src={Arrow}></img>
        </Slider>
        );
}

export default Slide;