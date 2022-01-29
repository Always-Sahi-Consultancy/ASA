
import './Courses.css';
import star1 from '../../image/Star 14.svg';
import star from '../../image/Star 17.png';

const starsData = [];

const stars = (val) =>{
    while(starsData.length != 0){
        starsData.pop();        
    }
    for(let i=1;i<=val;i+=1){
        starsData.push(<img className='course_star_element' src={star1}></img>);
        // console.log(i);
    }
    if(val%1!==0){
        starsData.push(<img className='course_star_element' src={star} />)
        // console.log(val);

    }
}

const Course_rate = (props) => {
    return (
        <div className="course_star">
            {/* {for(let i=0;i<props.courseStarRate;i+=1)} */}
            {/* {props.star.map((s) => {
                return (
                    <img className="course_star_element" src={s.star}></img>
                )
            })} */}
            {/* {console.log(props.star.$numberDecimal)} */}
            {stars(props.star)}
            {starsData.map((data) => {
                return(
                    data
                )}
            )}
            {/* {starsData=[]} */}
        </div>
    );
};

export default Course_rate;