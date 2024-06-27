import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ className = "", airbnbpng, airbnb, propLeft }) => {
  const itemStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`item ${className}`} style={itemStyle}>
      <img className="airbnbpng-icon" loading="lazy" alt="" src={airbnbpng} />
      <div className="airbnb-wrapper">
        <a
          className="airbnb"
          href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
          target="_blank"
        >
          {airbnb}
        </a>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  airbnbpng: PropTypes.string,
  airbnb: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Item;
