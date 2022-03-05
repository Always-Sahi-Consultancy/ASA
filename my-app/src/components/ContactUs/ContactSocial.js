import { Link } from "react-router-dom";

function ContactSocial (props) {
    return(
        <div class="contact__media">
                        <Link to={props.url} class="contact__link">
                            <img src={props.image} alt={props.name} class="contact__instagram_image" />
                        </Link>
         </div>
    )
}

export default ContactSocial;