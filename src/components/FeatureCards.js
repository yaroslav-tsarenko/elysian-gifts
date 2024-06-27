import PropTypes from "prop-types";
import "./FeatureCards.css";

const FeatureCards = ({ className = "" }) => {
  return (
    <section className={`feature-cards ${className}`}>
      <div className="paragraphbackgroundshadow">
        <div className="instant-gifts">
          <div className="instant-gifts-title">
            <div className="instant-digital-gifts">{`Instant Digital Gifts `}</div>
          </div>
          <b className="empty">|</b>
        </div>
        <div className="feature-card-items">
          <div className="send-5-to">{` Send £5 to £500 `}</div>
        </div>
        <div className="feature-card-items1">
          <b className="b2">|</b>
        </div>
        <div className="feature-card-items2">
          <div className="includes-100-retailers">{` Includes 100+ Retailers `}</div>
        </div>
        <div className="feature-card-items3">
          <b className="b3">|</b>
        </div>
        <div className="feature-card-items4">
          <div className="free-branding"> Free Branding</div>
        </div>
      </div>
    </section>
  );
};

FeatureCards.propTypes = {
  className: PropTypes.string,
};

export default FeatureCards;
