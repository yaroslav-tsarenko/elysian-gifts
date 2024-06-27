import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link3.css";

const Link3 = ({
  className = "",
  imageShadow,
  beautyFashion,
  choiceGiftCard,
  propLeft,
  propTop,
}) => {
  const link2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link15 ${className}`} style={link2Style}>
      <div className="background13">
        <div className="wrapper-imageshadow1">
          <img
            className="imageshadow-icon1"
            loading="lazy"
            alt=""
            src={imageShadow}
          />
        </div>
      </div>
      <div className="beauty-fashion-choice-gift-c-parent">
        <h2 className="beauty-fashion-container">
          <p className="beauty-fashion">{beautyFashion}</p>
          <p className="choice-gift-card">{choiceGiftCard}</p>
        </h2>
        <div className="background-wrapper1">
          <img className="background-icon4" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link3.propTypes = {
  className: PropTypes.string,
  imageShadow: PropTypes.string,
  beautyFashion: PropTypes.string,
  choiceGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link3;
