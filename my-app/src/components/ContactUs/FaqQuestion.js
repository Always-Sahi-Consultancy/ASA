function FaqQuestion (props) {
    return(
        <div class="faq__questions" id={props.id}>
            <div class="faq__question">
                <span>{props.question}</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">{props.answer}</div>
        </div>
    );
};

export default FaqQuestion;