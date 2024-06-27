import PropTypes from "prop-types";
import "./UseCases.css";

const UseCases = ({ className = "" }) => {
  return (
    <section className={`use-cases ${className}`}>
      <h1 className="heading-24">Use our online gift cards for...</h1>
      <div className="use-case-cards">
        <div className="use-case-items">
          <div className="wrapper-backgroundshadow">
            <img
              className="backgroundshadow-icon"
              loading="lazy"
              alt=""
              src="/backgroundshadow.svg"
            />
          </div>
          <div className="strong-staff">Staff Incentive Programs</div>
        </div>
        <div className="use-case-items1">
          <div className="wrapper-backgroundshadow1">
            <img
              className="backgroundshadow-icon1"
              alt=""
              src="/backgroundshadow-1.svg"
            />
          </div>
          <div className="strong-rewards">Rewards Programs</div>
        </div>
        <div className="use-case-items2">
          <div className="wrapper-backgroundshadow2">
            <img
              className="backgroundshadow-icon2"
              alt=""
              src="/backgroundshadow-2.svg"
            />
          </div>
          <div className="strong-client">Client Thank You Gifts</div>
        </div>
        <div className="use-case-items3">
          <div className="wrapper-backgroundshadow3">
            <img
              className="backgroundshadow-icon3"
              alt=""
              src="/backgroundshadow-3.svg"
            />
          </div>
          <div className="strong-competition">Competition Prizes</div>
        </div>
        <div className="use-case-items4">
          <div className="wrapper-backgroundshadow4">
            <img
              className="backgroundshadow-icon4"
              alt=""
              src="/backgroundshadow-4.svg"
            />
          </div>
          <div className="strong-acquisition">{`Acquisition & Retention`}</div>
        </div>
      </div>
    </section>
  );
};

UseCases.propTypes = {
  className: PropTypes.string,
};

export default UseCases;
