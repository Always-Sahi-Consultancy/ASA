import './objective.css';
import ObjectivePoints from './objectivePoints';

const Objective = () => {
    const ObjData = [
        { 'id': '1', 'point': "Any student, aims to make his career in Consultancy sector, & grow his profile in Commerce field. " },
        { 'id': '2', 'point': "Any Individual who wants an Escape from his 9-5 job in future, and want to start his/her own Freelancing & Side Hustle. " },
        { 'id': '3', 'point': "Any Individual, who Aims to Manage Taxes of their own Family members, and utilize this Course for Self Help. " }
    ];
    return (
        <div className='objective-container'>
            <div className='objective__heading'>who is this course for ?</div>
            {ObjData.map((items) => <ObjectivePoints id={items.id} point={items.point} />)}
        </div>
    );
}
export default Objective;