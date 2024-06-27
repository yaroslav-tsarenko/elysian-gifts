import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link2.css";

const Link2 = ({
  className = "",
  imageShadow,
  hotelGiftCard,
  propTop,
  propLeft,
}) => {
  const link1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`link14 ${className}`} style={link1Style}>
      <div className="background-parent">
        <div className="background12">
          <div className="wrapper-imageshadow">
            <img
              className="imageshadow-icon"
              loading="lazy"
              alt=""
              src={imageShadow}
            />
          </div>
        </div>
        <div className="hotel-gift-card-wrapper">
          <h2 className="hotel-gift-card">{hotelGiftCard}</h2>
        </div>
      </div>
      <img className="background-icon3" alt="" src="/background.svg" />
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  imageShadow: PropTypes.string,
  hotelGiftCard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Link2;
