const FooterTerms = (props)=> {
    return(
        <div className="terms-container">
            <div className="terms__part1">
                <a onClick={() => props.onChange("TermsOfUse")} className="terms section"> Terms of Use</a>
                <a onClick={() => props.onChange("RefundPolicy")} className="refund section"> Refund policy</a>
                <a onClick={() => props.onChange("EarningDisclaimer")} className="disclaimer2 section">Earned disclaimer</a>
                <a onClick={() => props.onChange("PrivacyPolicy")} className="privacy section" >Privacy policy</a>
            </div>
            <div className="terms__part2">ASA Disclaimer:- Any understanding of the specific course will be the liability of the reader & the Individual itself, Organization does not hold any liability for comprehension of any Course, Module or any specific word in a wrong way. In case of any discrepancy, the interpretation of the academy will be deemed as final and absolute. </div>
        </div>
    );
}

export default FooterTerms;