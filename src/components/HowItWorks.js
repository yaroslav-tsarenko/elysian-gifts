import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./HowItWorks.css";

const HowItWorks = ({ className = "" }) => {
  return (
    <section className={`how-it-works ${className}`}>
      <div className="how-it-works-content">
        <div className="how-it-works-title">
          <h1 className="heading-22">How does Elysian Gifts work?</h1>
        </div>
        <div className="how-it-works-steps">
          <div className="backgroundshadow">
            <div className="background5">
              <img
                className="what-emailpng-icon"
                loading="lazy"
                alt=""
                src="/whatemailpng@2x.png"
              />
            </div>
            <div className="step-content-wrapper">
              <div className="step-content">
                <div className="background-wrapper">
                  <div className="background6">
                    <div className="div3">1</div>
                  </div>
                </div>
                <div className="send-an-egift">
                  Send an egift card via email
                </div>
              </div>
            </div>
          </div>
          <div className="backgroundshadow1">
            <div className="background7">
              <img
                className="what-redeem-poundspng-icon"
                loading="lazy"
                alt=""
                src="/whatredeempoundspng@2x.png"
              />
            </div>
            <div className="backgroundshadow-inner">
              <div className="frame-parent3">
                <div className="background-container">
                  <div className="background8">
                    <div className="div4">2</div>
                  </div>
                </div>
                <div className="recipients-choose-where-container">
                  <p className="recipients-choose-where">
                    Recipients choose where to spend their
                  </p>
                  <p className="gift-from-50">gift (from 50+ retailers)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="backgroundshadow2">
            <div className="background9">
              <img
                className="what-retailer-poundspng-icon"
                loading="lazy"
                alt=""
                src="/whatretailerpoundspng@2x.png"
              />
            </div>
            <div className="backgroundshadow-child">
              <div className="frame-parent4">
                <div className="background-frame">
                  <div className="background10">
                    <div className="div5">3</div>
                  </div>
                </div>
                <div className="their-egift-card-container">
                  <p className="their-egift-card">
                    Their egift card is displayed on screen
                  </p>
                  <p className="and-they-are">
                    and they are free to spend with their
                  </p>
                  <p className="preferred-retailer">preferred retailer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-button">
          <Button
            className="link6"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "#6c63ff",
              borderRadius: "4.8px",
              "&:hover": { background: "#6c63ff" },
              width: 211.7,
              height: 48,
            }}
          >
            Sign up now
          </Button>
        </div>
      </div>
    </section>
  );
};

HowItWorks.propTypes = {
  className: PropTypes.string,
};

export default HowItWorks;
