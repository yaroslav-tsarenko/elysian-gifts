import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <header className="header-1920">
        <div className="mask-group-parent">
          <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
          <div className="brand-name">
            <div className="elysiangifts1">ElysianGifts</div>
          </div>
        </div>
        <div className="nav-menu">
          <div className="list-parent">
            <div className="list4">
              <div className="item-link13">
                <a className="home">Home</a>
              </div>
              <div className="item-link14">
                <a className="solutions1">Solutions</a>
              </div>
              <div className="item-link15">
                <a className="features1">Features</a>
              </div>
              <div className="item-link16">
                <a className="gift-cards2">Gift Cards</a>
              </div>
              <div className="item-link17">
                <a className="clients1">Clients</a>
              </div>
              <div className="item-link18">
                <a className="pricing1">Pricing</a>
              </div>
              <div className="item-link19">
                <a className="faq1">FAQ</a>
              </div>
              <div className="item-link20">
                <a className="contact-us1">Contact Us</a>
              </div>
              <div className="item-link21">
                <img
                  className="ico-country-ukpng-icon"
                  alt=""
                  src="/icocountryukpng@2x.png"
                />
                <div className="locale-name">
                  <a className="uk">{`UK `}</a>
                </div>
                <div className="locale-border">
                  <div className="border" />
                </div>
              </div>
            </div>
            <Button
              className="link2"
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
              className="link3"
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
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
