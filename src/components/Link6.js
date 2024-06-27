import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link6.css";

const Link6 = ({
  className = "",
  background,
  backToSchoolSmartEGift,
  celebrateBackToSchool,
  propTop,
  propLeft,
}) => {
  const link3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`link18 ${className}`} style={link3Style}>
      <img className="background-icon5" alt="" src={background} />
      <div className="link-child">
        <div className="back-to-school-smart-egift-car-parent">
          <div className="back-to-school-container">
            <p className="back-to-school">{backToSchoolSmartEGift}</p>
            <p className="card1">Card</p>
          </div>
          <div className="heading-52">
            <div className="celebrate-back-to">{celebrateBackToSchool}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link6.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  backToSchoolSmartEGift: PropTypes.string,
  celebrateBackToSchool: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Link6;
