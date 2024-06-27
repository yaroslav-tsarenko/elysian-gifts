import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  maskGroup,
  iconLinkedinpng,
  pricingHref,
  pricingTarget,
}) => {
  return (
    <footer className={`footer-19201 ${className}`}>
      <div className="frame-parent5">
        <div className="mask-group-container">
          <img
            className="mask-group-icon3"
            loading="lazy"
            alt=""
            src={maskGroup}
          />
          <div className="elysiangifts-frame">
            <b className="elysiangifts3">ElysianGifts</b>
          </div>
        </div>
        <div className="unified-incentives-uk1">
          © Unified Incentives UK Ltd
        </div>
        <div className="company-number-103548561">Company Number 10354856</div>
        <div className="vat-number-2741">VAT Number 274 1339 06</div>
        <img
          className="icon-linkedinpng1"
          loading="lazy"
          alt=""
          src={iconLinkedinpng}
        />
      </div>
      <div className="frame-parent6">
        <div className="heading-4-learn-more-parent">
          <div className="heading-46">Learn More</div>
          <div className="list7">
            <div className="item-link31">
              <a
                className="solutions3"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-927"
                target="_blank"
              >
                Solutions
              </a>
            </div>
            <div className="item-link32">
              <a
                className="features3"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1195"
                target="_blank"
              >
                Features
              </a>
            </div>
            <div className="item-link33">
              <a
                className="gift-cards4"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
                target="_blank"
              >
                Gift Cards
              </a>
            </div>
            <div className="item-link34">
              <a className="clients3">Clients</a>
            </div>
            <div className="item-link35">
              <a className="pricing3" href={pricingHref} target={pricingTarget}>
                Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="heading-4-support-parent">
          <div className="heading-47">Support</div>
          <div className="list8">
            <div className="item-link36">
              <a className="faq3">FAQ</a>
            </div>
            <div className="item-link37">
              <div className="client-agreement1">Client Agreement</div>
            </div>
            <div className="item-link38">
              <a
                className="privacy-statement1"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4713"
                target="_blank"
              >
                Privacy Statement
              </a>
            </div>
            <div className="item-link39">
              <div className="system-status1">System Status</div>
            </div>
          </div>
        </div>
        <div className="footer-links-column">
          <div className="heading-48">Account</div>
          <div className="list9">
            <div className="item-link40">
              <a
                className="sign-up1"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3403"
                target="_blank"
              >
                Sign Up
              </a>
            </div>
            <div className="item-link41">
              <a className="login1">Login</a>
            </div>
          </div>
        </div>
        <div className="footer-links-column1">
          <div className="heading-49">Company</div>
          <div className="list10">
            <div className="item-link42">
              <a
                className="about-us1"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4545"
                target="_blank"
              >
                About Us
              </a>
            </div>
            <div className="item-link43">
              <a
                className="contact-us3"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4402"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  iconLinkedinpng: PropTypes.string,
  pricingHref: PropTypes.string.isRequired,
  pricingTarget: PropTypes.string,
};

export default Footer;
