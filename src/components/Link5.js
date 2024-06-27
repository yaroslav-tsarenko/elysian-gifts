import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link5.css";

const Link5 = ({
  className = "",
  background,
  heading4KrogerEGiftCard,
  propLeft,
}) => {
  const link6Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`link21 ${className}`} style={link6Style}>
      <img className="background-icon8" alt="" src={background} />
      <div className="link-inner1">
        <div className="heading-4-kroger-egift-card-parent">
          <div className="heading-411">{heading4KrogerEGiftCard}</div>
          <div className="heading-53">
            <div className="new-arrival">New Arrival</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link5.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4KrogerEGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Link5;
