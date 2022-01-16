import defaultProps from 'react-slick/lib/default-props';
import './Highlight.css';
import Greentick from '../../../image/greenTick.png';

const Highlights = () => {

    const data = [{'content':"Quality Online Training"},
    {'content':"Lifelong Course Access"},
    {'content':"6 Assignments"},
    {'content':"Regular Notes & Study Materials"},
    {'content':"ISO 9001: 2015 Reputed Certification"},
    {'content':"Letter of Recommendation post Assignments"}];

    const HighlightContent = (props) => {
        return(
            <div className='Highlights__content'>
                <img src={Greentick}></img>
                <h4>{props.content}</h4>
            </div>
        );
    }
    
    return (
        <div className='Highlights__container'>
            <div className='Highlights__title'>Course Highlights:</div>
            {data.map((item) => <HighlightContent content={item.content} />)}
        </div>
    )
};

export default Highlights;