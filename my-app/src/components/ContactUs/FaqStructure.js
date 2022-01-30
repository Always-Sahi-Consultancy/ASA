import FaqQuestion from "./FaqQuestion";

const FaqStructure = () => {
    const Faq = [{
        id: "faq_1",
        question: "How do I get Enrolled?",
        answer: "We have a Simple Sign up Form, through which you Create an Account, & Explore your Learning."
    },
    {
        id: "faq_2",
        question: "Are there any Refunds?",
        answer: "Transactions & Learning being though digital Mode, there are no Refunds Provided."
    },{
        id: "faq_3",
        question: "I dont have any Startup Planned?",
        answer: "There is no need to worry, here at Always Sahi Academy you are handheld by the experts who will be clearing your Niche and Starting from the Basics."
    },
    {
        id: "faq_4",
        question: "Can I Join if I am a School & College Student?",
        answer: "Joining as a Student is a Perfect Decision, here you get complete knowledge to build your Skills & Side Hustle. Which is Beneficial to grow your Full-time Business or Build your Resume if you are looking for a Perfect Job."
    },
    {
        id: "faq_5",
        question: "Is this an Online Course?",
        answer: "Yes this Course is Online."
    },
    {
        id: "faq_6",
        question: "Are there any Restrictions to joining Always Sahi Academy?",
        answer: "No there are No Restrictions to Join Always Sahi Academy. Do join in & Explore."
    }]
    return (
        <div class="faq">
            <div class="faq__title">FAQ</div>
                <div class="faq__breif">Hey, we dont want you to be confused anywhere, So let’s answer some of the Frequently Asked Questions, by the Students of Always Sahi Academy.</div>
                {Faq.map((faq) =>
                <FaqQuestion answer={faq.answer} id={faq.id} question={faq.question} /> )}
        <div class="faq_details">we are Glad, you are now all set to join Always Sahi Academy, We Cant Wait to See you Inside.</div>
    </div>
    )
};

export default FaqStructure;