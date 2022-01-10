import './CoursePage.css';
import Filter from '../../image/oil-funnel.png';
const CoursePage_Filter = () => {
    return (
        <div className="Course_Filter">
            <div className="filter_left-top">
                <img src={Filter} className="filter_img"></img>
                <h2 className="filter_name">FILTER</h2>
            </div>
            <div classname="Preference_content">Show Courses as per my preferences</div>
            <div className="Preference_form">
                <label for="Category">Category</label>
                <input type="text" className="form-input" id="Category" placeholder="e.g. 'React'"></input>
                <label for="Budget">Budget</label>
                <input type="number" className="form-input" id="Budget" placeholder="e.g. '1000'"></input>
                <div className="Language-box">
                    <div className="language">Language</div>
                    <span className="language-arrow">&#9660;</span>
                </div>
                <div className="filter-shower"></div>
            </div>
        </div>
    )
}

export default CoursePage_Filter;