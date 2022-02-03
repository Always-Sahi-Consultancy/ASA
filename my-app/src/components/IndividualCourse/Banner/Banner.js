import './Banner.css';
import Financial from '../../../image/Course Layout/financial_acc.jpg';
import Star from '../../../image/star1.png';
import Taxation from '../../../image/Course Layout/taxation.jpg';
import Anc from '../../../image/Course Layout/anc.jpg';
import Passion from '../../../image/Course Layout/passion.jpg';
import Linkedin from '../../../image/coursesBanner.png';

const Banner = (props) => {
    const data = [props.courseData];

    const BannerComponent = (props) =>{
        return(
            <div className='Banner'>
                <img className='Banner__background' src={Financial}></img>
                <div className='Banner__blur'>
                    <div className='Banner__left'>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <h4><img src={Star}></img>{props.rating}</h4>

                    </div>
                    <div className='Banner__right'>
                        <div className='Banner__right__container'>
                            <div className='Banner__video'></div>
                            <p>{props.price}<del> {props.priceMRP}</del></p>
                            <button className='Banner__enroll'>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
        {data.map((item) => <BannerComponent title={item.title} subtitle={item.subtitle} rating={item.rating} image={item.image} link={item.link} price={item.courseDiscountPrice} priceMRP={item.courseMRP} />)}    
        </div>
    )
};

export default Banner;