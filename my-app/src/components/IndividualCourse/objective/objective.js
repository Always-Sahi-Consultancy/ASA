import './objective.css';
import ObjectivePoints from './objectivePoints';

const Objective = (props) => {
    const ObjData = props.objective;
    return (
        <div className='objective-container'>
            <div className='objective__heading'>who is this course for ?</div>
            {ObjData.map((items) => <ObjectivePoints point={items} />)}
        </div>
    );
}
export default Objective;