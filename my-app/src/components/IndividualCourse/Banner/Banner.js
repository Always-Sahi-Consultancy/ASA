import './Banner.css';
import Linkedin from '../../../image/3.png';
import Star from '../../../image/star1.png';

const Banner = () => {
    const data = [{'title': "CREATE YOUR LINKEDIN PROFILE",
     'subtitle': "This course includes all the steps to create your Linkedin profile",
     'rating': "4.9",
     'image': Linkedin, 
     'link': "#"}];

    const BannerComponent = (props) =>{
        return(
            <div className='Banner__background'>
                <div className='Banner__left'>
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                    
                    <h4><img src={Star} alt='star'></img>{props.rating}</h4>

                </div>
                <div className='Banner__right'>
                    <img src={props.image} alt={props.title}></img>
                    <button className='Banner__enroll'>Enroll Now</button>
                </div>

            </div>
        );
    }

    return (
        <div>
        {data.map((item) => <BannerComponent title={item.title} subtitle={item.subtitle} rating={item.rating} image={item.image} link={item.link} />)}    
        </div>
    )
};

export default Banner;