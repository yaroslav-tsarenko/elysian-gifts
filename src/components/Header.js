import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header-19211 ${className}`}>
      <div className="mask-group-parent1">
        <img
          className="mask-group-icon4"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="elysiangifts-wrapper1">
          <a className="elysiangifts4">ElysianGifts</a>
        </div>
      </div>
      <div className="header-1921-child">
        <div className="list-container">
          <div className="list11">
            <div className="item-link44">
              <a className="home2">Home</a>
            </div>
            <div className="item-link45">
              <a className="solutions4">Solutions</a>
            </div>
            <div className="item-link46">
              <a className="features4">Features</a>
            </div>
            <div className="item-link47">
              <a className="gift-cards5">Gift Cards</a>
            </div>
            <div className="item-link48">
              <a className="clients4">Clients</a>
            </div>
            <div className="item-link49">
              <a className="pricing4">Pricing</a>
            </div>
            <div className="item-link50">
              <a className="faq4">FAQ</a>
            </div>
            <div className="item-link51">
              <a className="contact-us4">Contact Us</a>
            </div>
            <div className="item-link52">
              <img
                className="ico-country-ukpng-icon2"
                loading="lazy"
                alt=""
                src="/icocountryukpng@2x.png"
              />
              <div className="uk-container">
                <a className="uk2">{`UK `}</a>
              </div>
              <div className="border-container">
                <div className="border2" />
              </div>
            </div>
          </div>
          <Button
            className="link16"
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
            className="link17"
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
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
