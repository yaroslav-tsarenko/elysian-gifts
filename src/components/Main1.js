import Header from "./Header";
import PropTypes from "prop-types";
import "./Main1.css";

const Main1 = ({ className = "" }) => {
  return (
    <section className={`main1 ${className}`}>
      <Header />
      <div className="cart-summary">
        <div className="cart-title">
          <h1 className="your-cart">Your Cart</h1>
        </div>
        <b className="view-or-edit">View or edit your cart before checkout</b>
      </div>
    </section>
  );
};

Main1.propTypes = {
  className: PropTypes.string,
};

export default Main1;
