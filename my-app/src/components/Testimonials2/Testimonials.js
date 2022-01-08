import Testimonial_Image from './Testimonial_Image';
import Testimonial_Message from './Testimonial_Message';
import './Testimonial.css';

const Testimonials = () => {
    return (
        <div className="Testimonials">
            <Testimonial_Image />
            <Testimonial_Message />
        </div>
    );
};

export default Testimonials;