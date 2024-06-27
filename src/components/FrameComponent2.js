import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`homepage-inner ${className}`}>
      <div className="branding-container-parent">
        <div className="branding-container">
          <div className="branding-content">
            <h1 className="heading-26">FREE Custom Branding</h1>
            <div className="free-custom-branding-container">
              <p className="free-custom-branding">
                FREE custom branding* - add your company logo to your gift
                cards! Contact us , or sign up now to get started.
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="learn-more-about">
                Learn more about our custom branding options
              </p>
              <p className="blank-line1">&nbsp;</p>
              <p className="one-free-custom">
                *One free custom brand setup per account. Minimum gift card
                spend applies - contact us for details.
              </p>
            </div>
            <Button
              className="link9"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#6c63ff",
                borderRadius: "4.8px",
                "&:hover": { background: "#6c63ff" },
                width: 224,
                height: 48,
              }}
            >
              Demo £50 Gift Card
            </Button>
          </div>
        </div>
        <img
          className="undraw-content-team-re-6rlg-1-icon"
          loading="lazy"
          alt=""
          src="/undraw-content-team-re-6rlg-1.svg"
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
