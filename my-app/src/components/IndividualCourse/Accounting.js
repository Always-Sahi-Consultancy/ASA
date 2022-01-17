import Banner from './Banner/Banner';
import Objective from './objective/objective';
import Highlights from './Highlights/Highlights';
import AccountingContent from './Accounting/accountingcontent';
import YourTeacher from './YourTeachers/YourTeachers';

const Accounting =() =>{
    return(
        <div>
            <Banner/>
            <Objective/>
            <Highlights/>
            <div>
                <AccountingContent/>
            </div>
            <YourTeacher/>
        </div>
    );
}

export default Accounting;