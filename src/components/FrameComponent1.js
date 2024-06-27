import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`delivery-content-wrapper ${className}`}>
      <div className="delivery-content">
        <img
          className="undraw-online-groceries-a02y-1-icon"
          loading="lazy"
          alt=""
          src="/undraw-online-groceries-a02y-1.svg"
        />
        <div className="delivery-content-inner">
          <div className="heading-2-how-are-gift-cards-parent">
            <h1 className="heading-25">How are gift cards delivered?</h1>
            <div className="gifts-are-delivered-container">
              <span>
                <p className="gifts-are-delivered">
                  Gifts are delivered to recipients via email in an instant.
                  Recipients can then open
                </p>
                <p className="their-online-gift">
                  their online gift card on any smartphone, tablet, laptop or
                  desktop computer.
                </p>
                <p className="p">{` `}</p>
                <p className="try-out-a">
                  Try out a demo evoucher to see how it works!
                </p>
              </span>
            </div>
            <Button
              className="link8"
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
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
