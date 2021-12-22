import { React, useState } from 'react';

function FaqQuestion(props) {

    const [active, setActive] = useState(false);

    return (
        <div class="faq__questions" id={props.id}>
            <div class="faq__question">
                <span>{props.question}</span>
                <div class="faq__show" onClick={() => setActive(!active)}>+</div>
            </div>
            <div class="faq__answer" style={active ? { display: "block" } : { display: "none" }}>{props.answer}</div>
        </div >
    );
};

export default FaqQuestion;