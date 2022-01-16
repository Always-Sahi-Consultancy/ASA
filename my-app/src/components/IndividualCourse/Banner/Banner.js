import './Banner.css';
import Financial from '../../../image/Course Layout/financial_acc.jpg';
import Star from '../../../image/star1.png';

const Banner = () => {
    const data = [{'title': "CERTIFIED COURSE IN FINANCIAL ACCOUNTING",
     'subtitle': "This course is made to cover all Aspects of Accounting field, where we cover from basics to full fledged Account and Tax Management",
     'rating': "4.9",
     'video': "#",
     'link': "#"}];

    const BannerComponent = (props) =>{
        return(
            <div className='Banner__background'>
                <div className='Banner__left'>
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                    
                    <h4><img src={Star}></img>{props.rating}</h4>

                </div>
                {/* <div className='Banner__right'>
                    <img src={props.image} alt={props.title}></img>
                    <button className='Banner__enroll'>Enroll Now</button>
                </div> */}

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