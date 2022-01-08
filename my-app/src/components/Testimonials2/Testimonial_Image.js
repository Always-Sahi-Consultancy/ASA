import Test_image from '../../image/Testimonial_image.jpg';
import './Testimonial.css';

const Testimonial_Image = () => {
    return (
        <div className="Testimonial_container">
            <img src={Test_image} alt="Test_img" className="Testimonial_image"></img>
            <div className="Testimonial_msg">TESTIMONIALS</div>
        </div>
    )
}

export default Testimonial_Image;