import './website_policies.css';
import { useEffect } from 'react';

const RefundPolicy = () => {
    useEffect(() => {
        document.title ="Always Sahi Academy | Refund Policy";
    })

    return (
        <div class="detail" id="details">
            <div class="details__title">REFUND POLICY</div>
            <div class="details__info">
                After access is granted, due to the sensitive, proprietary nature of the copyrighted content, Always Sahi Academy will not refund the fees for any reason.</div>

            <div class="details__info">While Always Sahi (Always Sahi Academy) has gone to great lengths to build exhaustive resources containing all of the necessary lessons, tools, and practice materials to ensure students will have success after taking the course, Always Sahi Academy cannot guarantee that all students will successfully start making money for themselves after taking the courses.</div>

            <div class="details__info">Just as colleges and universities do not guarantee you will get a job after graduating, students enrolled in Always Sahi Academy are not guaranteed success or income merely by completing the course. All students who enroll acknowledge this fact and agree that securing clients is solely their own responsibility.</div>

            <div class="details__info">Further, before enrolling in the course, students agree that any success/income is solely dependent upon their own understanding and application of the material, content, and methods as outlined in the course. Not following instructions, lacking personal aptitude or any prerequisite skills (i.e. not retaining or understanding necessary concepts, etc.),
                The course provides the necessary tools to help you create a side-hustle, but it cannot do the work for you. Finally, students acknowledge that Always Sahi Academy will not find clients for them.
                Remember, taking the course does not invariably make you an expert — you either work towards it, or you do not. Access to our private Facebook group is also an excellent support tool for students.</div>

            <div class="details__info">Always Sahi is a course in which you enroll, not a product you purchase, use, and then return if they don’t fit. As is the case with digital products, after access is granted, due to the sensitive, proprietary nature of the copyrighted content, Always Sahi Academy will not refund the fees for any reason.</div>

            <div class="details__info">Similar to a college or university class environment, you cannot request a refund from Always Sahi Academy once you’ve purchased the course. If you are not ready to take action, don’t commit.</div>

            <div class="details__info">If you implement the course, you will get results. If you don’t, you won’t get results. If you feel stuck with the course material or feel like a part of the class isn’t making sense, email us and we will walk you through a solution.</div>


        </div>
    );
};

export default RefundPolicy;