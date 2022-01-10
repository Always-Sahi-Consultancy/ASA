import './CoursePage.css';
import Filter from '../../image/oil-funnel.png';
const CoursePage_Filter = () => {
    return (
        <div className="Course_Filter">
            <div className="filter_left-top">
                <img src={Filter} className="filter_img"></img>
                <h2 className="filter_name">Filter</h2>
            </div>
            <div className="Preference_content">Show Courses as per my preferences</div>
            <div className="Preference_form">
                <label for="Category">Category</label>
                <input type="text" className="form-input" id="Category" placeholder="e.g. 'React'"></input>
                <label for="Budget">Budget</label>
                <input type="number" className="form-input" id="Budget" placeholder="e.g. '1000'"></input>
                <div className="Language-box">
                    <div className="language">Language</div>
                    <span className="language-arrow">&#9660;</span>
                </div>
                <div className="filter-shower">
                    <div className="filter-box">
                        <span className="filters_added">React</span>
                        <span className="filter_cut">x</span>
                    </div>
                    <div className="filter-box">
                        <span className="filters_added">1000</span>
                        <span className="filter_cut">x</span>
                    </div>
                    <div className="filter-box">
                        <span className="filters_added">Akhil Nair</span>
                        <span className="filter_cut">x</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage_Filter;