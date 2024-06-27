import PropTypes from "prop-types";
import "./Link4.css";

const Link4 = ({
  className = "",
  iconHomeContactsalessvg,
  corporateSalesEnquiry,
  iWishToEnquireAbout,
  purchasingDigitalGiftCard,
  forMyBusiness,
}) => {
  return (
    <div className={`link10 ${className}`}>
      <img
        className="icon-home-contactsalessvg"
        alt=""
        src={iconHomeContactsalessvg}
      />
      <b className="corporate-sales-enquiry">{corporateSalesEnquiry}</b>
      <div className="i-wish-to-container">
        <span>{iWishToEnquireAbout}</span>
        <b className="purchasing-digital-gift">{purchasingDigitalGiftCard}</b>
        <span>{forMyBusiness}</span>
      </div>
    </div>
  );
};

Link4.propTypes = {
  className: PropTypes.string,
  iconHomeContactsalessvg: PropTypes.string,
  corporateSalesEnquiry: PropTypes.string,
  iWishToEnquireAbout: PropTypes.string,
  purchasingDigitalGiftCard: PropTypes.string,
  forMyBusiness: PropTypes.string,
};

export default Link4;
