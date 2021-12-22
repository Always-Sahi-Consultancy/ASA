import "./Footer.css";
import "./FooterPosition.css";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <div className="disclaimer">
          ASA Disclaimer:- Any understanding of the specific course will be the
          liability of the reader & the Individual itself, Organization does not
          hold any liability for comprehension of any Course, Module or any
          specific word in a wrong way. In case of any discrepancy, the
          interpretation of the academy will be deemed as final and absolute.
        </div>
        <div className="documentation">
          <div className="documentation__option">
            <a onClick={() => props.onChange("Terms")} className="documentation__link">
              Terms of use |&nbsp;
            </a>
          </div>
          <div className="documentation__option">
            <a onClick={() => props.onChange("EarningDiscalimer")} className="documentation__link">
              Earning Disclaimer |&nbsp;
            </a>
          </div>
          <div className="documentation__option">
            <a onClick={() => props.onChange("PrivacyPolicy")} className="documentation__link">
              Privacy Policy | &nbsp;
            </a>
          </div>
          <div className="documentation__option">
            <a onClick={() => props.onChange("RefundPolicy")} className="documentation__link">
              Refund Policy
            </a>
          </div>
        </div>
        <div className="copyright">
          &copy; Always Sahi Solution Pvt. Ltd.{" "}
          <script>document.write(getFullYear())</script> - All Rights Reserved |
          &copy; ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
export default Footer;
