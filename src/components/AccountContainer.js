import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./AccountContainer.css";

const AccountContainer = ({ className = "" }) => {
  return (
    <section className={`account-container ${className}`}>
      <div className="account-details">
        <div className="account-summary">
          <h1 className="user-account">User Account</h1>
          <TextField
            className="header"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "rgba(215, 212, 255, 0.5)",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <div className="cart-row-1">
            <div className="product">
              <img
                className="branding-uk-card-boxtpng-icon"
                loading="lazy"
                alt=""
                src="/brandingukcardboxtpng@2x.png"
              />
              <div className="title">
                <div className="gift-card">$10 Gift Card</div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
            </div>
            <div className="download-item">
              <div className="download-info">$120.00</div>
              <div className="credits">12 Credits</div>
            </div>
            <div className="download-item1">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="download-renewal-container">
              <div className="renewal-info">
                <div className="next-renewal">Next Renewal</div>
                <div className="april-2024">24 April, 2024</div>
              </div>
              <div className="links">
                <div className="link4">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link5">
                  <img
                    className="icons-block1"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator" />
        </div>
        <div className="personal-info">
          <div className="checkout-details">
            <div className="header1">
              <div className="user-details">User Details</div>
            </div>
            <div className="info-items">
              <div className="name">Name</div>
              <div className="darnell-roob">Darnell Roob</div>
            </div>
            <div className="info-items1">
              <div className="email-address">Email Address</div>
              <div className="darnellroobhotmailcom">
                Darnell.Roob@hotmail.com
              </div>
            </div>
            <div className="info-items2">
              <div className="plan">Plan</div>
              <div className="basic">Basic</div>
            </div>
            <div className="info-items3">
              <div className="expiry-date">Expiry Date</div>
              <div className="april-20241">24 April, 2024</div>
            </div>
            <div className="info-items4">
              <div className="auto-renewal">Auto Renewal</div>
              <div className="on">On</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AccountContainer.propTypes = {
  className: PropTypes.string,
};

export default AccountContainer;
