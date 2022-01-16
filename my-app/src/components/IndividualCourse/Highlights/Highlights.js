import defaultProps from 'react-slick/lib/default-props';
import './Highlight.css';
import Greentick from '../../../image/greenTick.png';

const Highlights = () => {

    const data = [{'content':"29 Video Lectures"},{'content':"7 Hours on Demand Video"},{'content':"Full Lifetime Access"},
    {'content':"Access on Mobile And Tablet"},{'content':"3 Assignments"},{'content':"Certificate of Completion"}];

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
            <div className='Highlights__title'>This Course includes:</div>
            {data.map((item) => <HighlightContent content={item.content} />)}
        </div>
    )
};

export default Highlights;