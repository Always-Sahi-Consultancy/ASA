function ContactSocial (props) {
    return(
        <div class="contact__media">
                        <a href={props.url} class="contact__link">
                            <img src={props.image} alt={props.name} class="contact__instagram_image" />
                        </a>
         </div>
    )
}

export default ContactSocial;