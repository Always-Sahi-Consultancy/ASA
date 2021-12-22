import { React, useState } from 'react';

function FaqQuestion(props) {

    const [active, setActive] = useState('false');
    const faq_answer = document.querySelector('.faq__answer');
    const setActiveHandler = () => {
        if (active === 'true') {
            setActive('true');
            faq_answer.classList.remove('faq_answer');
        }
        else {
            setActive('false');
            faq_answer.classList.add('faq_answer');
        }
    }

    return (
        <div class="faq__questions" id={props.id}>
            <div class="faq__question">
                <span>{props.question}</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer" onClick={setActiveHandler}>{props.answer}</div>
        </div>
    );
};

export default FaqQuestion;