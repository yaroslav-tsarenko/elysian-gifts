import Link4 from "./Link4";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`contact-header-container-parent ${className}`}>
      <div className="contact-header-container">
        <h1 className="heading-28">Talk to us</h1>
      </div>
      <div className="contact-description">
        <div className="questions-wed-love-container">
          <span>
            <p className="questions-wed-love">
              Questions? We'd love to help get your corporate gift card program
              up and running.
            </p>
            <p className="you-can-reach">
              You can reach out to our team using the forms below.
            </p>
          </span>
        </div>
      </div>
      <div className="help-prompt">
        <b className="how-can-we">How can we help you?</b>
      </div>
      <div className="sales-enquiry-link">
        <Link4
          iconHomeContactsalessvg="/iconhomecontactsalessvg.svg"
          corporateSalesEnquiry="Corporate Sales Enquiry"
          iWishToEnquireAbout="I wish to enquire about "
          purchasingDigitalGiftCard="purchasing digital gift cards"
          forMyBusiness=" for my business."
        />
        <Link4
          iconHomeContactsalessvg="/iconhomecontactrecipientsvg.svg"
          corporateSalesEnquiry="Gift Card Recipient Support"
          iWishToEnquireAbout="I have "
          purchasingDigitalGiftCard="received a gift card"
          forMyBusiness=" and need assistance using it."
        />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
