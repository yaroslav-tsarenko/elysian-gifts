import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link1.css";

const Link1 = ({ className = "", image, allIn1Choice, giftCard, propLeft }) => {
  const linkStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`link13 ${className}`} style={linkStyle}>
      <div className="background11">
        <img className="image-icon" loading="lazy" alt="" src={image} />
      </div>
      <div className="gift-card-name-background">
        <h2 className="all-in-1-choice-gift-container">
          <p className="all-in-1-choice">{allIn1Choice}</p>
          <p className="gift-card">{giftCard}</p>
        </h2>
        <div className="gift-card-name-border">
          <img className="background-icon2" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  allIn1Choice: PropTypes.string,
  giftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Link1;
