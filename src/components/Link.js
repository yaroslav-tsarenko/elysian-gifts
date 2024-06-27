import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({
  className = "",
  background,
  heading4OhBabySmartEGiftC,
  propLeft,
  propTop,
}) => {
  const link5Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link20 ${className}`} style={link5Style}>
      <img className="background-icon7" alt="" src={background} />
      <div className="heading-4-oh-baby-smart-egi-wrapper">
        <div className="heading-410">{heading4OhBabySmartEGiftC}</div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4OhBabySmartEGiftC: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link;
