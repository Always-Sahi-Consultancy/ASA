import "./Rate_us.css";

const Rate_us = () => {
    return (
        <div className="Rate">
            <div className="rate_main">
                <input type="radio" id='star1' name="rate" className="radio_star"></input>
                <label for="star1"></label>
                <input type="radio" id='star2' name="rate" className="radio_star"></input>
                <label for="star2"></label>
                <input type="radio" id='star3' name="rate" className="radio_star"></input>
                <label for="star3"></label>
                <input type="radio" id='star4' name="rate" className="radio_star"></input>
                <label for="star4"></label>
                <input type="radio" id='star5' name="rate" className="radio_star"></input>
                <label for="star5"></label>
            </div>
            <h1 className="Rate_us_header">Rate Us</h1>
        </div>
    )
}

export default Rate_us;