import './Testimonial_userInput.css';

const Testimonial_UserInput = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className="Testimonial_user" onSubmit={onSubmit}>
            <textarea className="text-area" rows="5" placeholder="Express Here..."></textarea>
            <button type="submit" className="Testomonial_button">EXPRESS</button>
            <h1 className="Express_heading">SHARE YOUR EXPERIENCE</h1>
        </form>
    )
}

export default Testimonial_UserInput;