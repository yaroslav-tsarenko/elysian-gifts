import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Item2.css";

const Item2 = ({
  className = "",
  curryspcworldpng,
  currysPCWorld,
  propTop,
  propLeft,
}) => {
  const item2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`item2 ${className}`} style={item2Style}>
      <div className="curryspcworldpng-wrapper">
        <img className="curryspcworldpng-icon1" alt="" src={curryspcworldpng} />
      </div>
      <a
        className="currys-pc-world"
        href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
        target="_blank"
      >
        {currysPCWorld}
      </a>
    </div>
  );
};

Item2.propTypes = {
  className: PropTypes.string,
  curryspcworldpng: PropTypes.string,
  currysPCWorld: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Item2;
