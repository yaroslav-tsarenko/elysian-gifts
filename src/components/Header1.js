import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header-1921 ${className}`}>
      <div className="mask-group-group">
        <img
          className="mask-group-icon2"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="elysiangifts-container">
          <a className="elysiangifts2">ElysianGifts</a>
        </div>
      </div>
      <div className="header-1921-inner">
        <nav className="list-group">
          <div className="list6">
            <div className="item-link22">
              <a className="home1">Home</a>
            </div>
            <div className="item-link23">
              <a className="solutions2">Solutions</a>
            </div>
            <div className="item-link24">
              <a className="features2">Features</a>
            </div>
            <div className="item-link25">
              <a className="gift-cards3">Gift Cards</a>
            </div>
            <div className="item-link26">
              <a className="clients2">Clients</a>
            </div>
            <div className="item-link27">
              <a className="pricing2">Pricing</a>
            </div>
            <div className="item-link28">
              <a className="faq2">FAQ</a>
            </div>
            <div className="item-link29">
              <a className="contact-us2">Contact Us</a>
            </div>
            <div className="item-link30">
              <img
                className="ico-country-ukpng-icon1"
                loading="lazy"
                alt=""
                src="/icocountryukpng@2x.png"
              />
              <div className="uk-wrapper">
                <a className="uk1">{`UK `}</a>
              </div>
              <div className="border-wrapper">
                <div className="border1" />
              </div>
            </div>
          </div>
          <Button
            className="link11"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "14",
              background: "rgba(215, 212, 255, 0.5)",
              borderRadius: "4px",
              "&:hover": { background: "rgba(215, 212, 255, 0.5)" },
              width: 101.9,
              height: 39,
            }}
          >
            Sign Up
          </Button>
          <Button
            className="link12"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#6c63ff",
              borderRadius: "4px",
              "&:hover": { background: "#6c63ff" },
              width: 87.5,
              height: 39,
            }}
          >
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
