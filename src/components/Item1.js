import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Item1.css";

const Item1 = ({ className = "", clarkspng, clarks, propLeft, propTop }) => {
  const item1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`item1 ${className}`} style={item1Style}>
      <img className="clarkspng-icon" alt="" src={clarkspng} />
      <div className="clarks-wrapper">
        <a
          className="clarks"
          href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
          target="_blank"
        >
          {clarks}
        </a>
      </div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
  clarkspng: PropTypes.string,
  clarks: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Item1;
