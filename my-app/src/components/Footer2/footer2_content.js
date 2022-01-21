import star from '../../image/star1.png';

function  FooterTerms() {
    const scroll_top = () => {
        window.scrollTo(0,0);
    }
    return(
        <div className="terms-container">
            <div className="terms__part1">
                <div className="terms section"><a href="/TermsofUse" onClick={scroll_top} className="terms__link"> Terms of Use</a></div>
                <div className="refund section"><a href="/RefundPolicy" onClick={scroll_top} className="terms__link"> Refund policy</a></div>
                <div className="disclaimer2 section"><a href="/EarningDisclaimer" onClick={scroll_top} className="terms__link">Earning disclaimer</a></div>
                <div className="privacy section" ><a href="/PrivacyPolicy" onClick={scroll_top} className="terms__link">Privacy policy</a></div>
            </div>
            <div className="terms__part2">ASA Disclaimer:- Any understanding of the specific course will be the liability of the reader & the Individual itself, Organization does not hold any liability for comprehension of any Course, Module or any specific word in a wrong way. In case of any discrepancy, the interpretation of the academy will be deemed as final and absolute. </div>
        </div>
    );
}

export default FooterTerms;