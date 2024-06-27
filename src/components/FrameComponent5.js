import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`header-1921-parent ${className}`}>
      <Header />
      <div className="checkout-parent">
        <h1 className="checkout3">Checkout</h1>
        <div className="view-cart">
          <div className="view-or-edit1">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
