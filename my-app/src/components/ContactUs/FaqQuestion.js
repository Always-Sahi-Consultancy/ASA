import { React, useState } from 'react';

function FaqQuestion(props) {
    const faq__show = document.querySelector(".faq__show");
    const [active, setActive] = useState(false);
    const faq_work = () => {
        setActive(!active);
        // if (active === "false") {
        //     faq__show.innerHTML = "+";
        // }
        // else {
        //     faq__show.innerHTML = "-";
        // }
    }

    return (
        <div class="faq__questions" id={props.id}>
            <div class="faq__question">
                <span>{props.question}</span>
                <div class="faq__show" onClick={faq_work}>+</div>
            </div>
            <div class="faq__answer" style={active ? { display: "block" } : { display: "none" }}>{props.answer}</div>
        </div >
    );
};

export default FaqQuestion;