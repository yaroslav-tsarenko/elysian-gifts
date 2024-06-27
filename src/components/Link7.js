import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link7.css";

const Link7 = ({
  className = "",
  background,
  congratulationsSmartEGift,
  card,
  propLeft,
  propTop,
}) => {
  const link4Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link19 ${className}`} style={link4Style}>
      <img className="background-icon6" alt="" src={background} />
      <div className="congratulations-smart-egift-ca-wrapper">
        <div className="congratulations-smart-egift-container">
          <p className="congratulations-smart-egift">
            {congratulationsSmartEGift}
          </p>
          <p className="card2">{card}</p>
        </div>
      </div>
    </div>
  );
};

Link7.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  congratulationsSmartEGift: PropTypes.string,
  card: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link7;
