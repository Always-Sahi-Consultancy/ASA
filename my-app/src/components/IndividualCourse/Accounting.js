import Banner from './banner/Banner';
import Objective from './objective/objective';
import Highlights from './highlights/Highlights';
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