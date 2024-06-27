import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <div className="hero-left">
          <div className="elysian-gifts-uk-digital-gift-parent">
            <h1 className="elysian-gifts-uk-container">
              <span className="elysian-gifts-uk-container1">
                <p className="elysian-gifts-uk">Elysian Gifts UK:</p>
                <p className="digital-gift-cards">Digital Gift Cards for</p>
                <p className="business">Business</p>
              </span>
            </h1>
            <div className="send-your-customers-container">
              <span className="send-your-customers-container1">
                <p className="send-your-customers">
                  Send your customers or employees an e-voucher that includes
                </p>
                <p className="retailers-across-the">
                  retailers across the UK in an instant.
                </p>
              </span>
            </div>
            <div className="item-fast-container">
              <span className="item-fast-container1">
                <p className="fast-convenient-corporate">
                  Fast, convenient corporate gifts with your branding
                </p>
                <p className="includes-100-in-store">
                  Includes 100+ in-store and online brands
                </p>
                <p className="send-instantly-via">Send instantly via email</p>
              </span>
            </div>
            <Button
              className="link4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#6c63ff",
                borderRadius: "4.8px",
                "&:hover": { background: "#6c63ff" },
                width: 217.2,
                height: 72,
              }}
            >
              Send a gift
            </Button>
            <Button
              className="link5"
              startIcon={<img width="16px" height="16px" src="/svg.svg" />}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#6c63ff",
                fontSize: "18",
                borderColor: "#6c63ff",
                borderRadius: "4.8px",
                "&:hover": { borderColor: "#6c63ff" },
                width: 219.3,
                height: 72,
              }}
            >
              Watch the video
            </Button>
          </div>
        </div>
        <div className="brand-logos">
          <img
            className="brand-logos-child"
            loading="lazy"
            alt=""
            src="/frame-1000006900.svg"
          />
          <div className="brand-icons-wrapper">
            <div className="brand-icons">
              <a
                className="a-wide-range-container"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
                target="_blank"
              >
                <p className="a-wide-range">A wide range of brands</p>
                <p className="included">included</p>
              </a>
              <img
                className="amazonpng-icon"
                loading="lazy"
                alt=""
                src="/amazonpng@2x.png"
              />
              <img
                className="curryspcworldpng-icon"
                loading="lazy"
                alt=""
                src="/curryspcworldpng@2x.png"
              />
              <img className="argospng-icon" alt="" src="/argospng@2x.png" />
              <img
                className="asdapng-icon"
                loading="lazy"
                alt=""
                src="/asdapng@2x.png"
              />
              <img
                className="costapng-icon"
                loading="lazy"
                alt=""
                src="/costapng@2x.png"
              />
              <img className="tescopng-icon" alt="" src="/tescopng@2x.png" />
              <img
                className="decathlonpng-icon"
                loading="lazy"
                alt=""
                src="/decathlonpng@2x.png"
              />
              <img className="bqpng-icon" alt="" src="/bqpng@2x.png" />
              <img
                className="johnlewispng-icon"
                alt=""
                src="/johnlewispng@2x.png"
              />
              <img
                className="halfordspng-icon"
                loading="lazy"
                alt=""
                src="/halfordspng@2x.png"
              />
              <img
                className="thebodyshoppng-icon"
                alt=""
                src="/thebodyshoppng@2x.png"
              />
              <img
                className="marksandspencerpng-icon"
                alt=""
                src="/marksandspencerpng@2x.png"
              />
              <a
                className="plus-more"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
                target="_blank"
              >
                plus more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
