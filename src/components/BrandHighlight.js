import { Button } from "@mui/material";
import Item from "./Item";
import Item1 from "./Item1";
import Item2 from "./Item2";
import PropTypes from "prop-types";
import "./BrandHighlight.css";

const BrandHighlight = ({ className = "" }) => {
  return (
    <section className={`brand-highlight ${className}`}>
      <div className="brand-highlight-content">
        <div className="brand-highlight-title">
          <h1 className="heading-23">eVouchers accepted by big UK brands</h1>
        </div>
        <div className="elysian-giftss-digital-gift-c-wrapper">
          <div className="elysian-giftss-digital">
            Elysian Gifts's digital gift cards include 50+ stores across the UK
            and online.
          </div>
        </div>
        <div className="list5">
          <Item airbnbpng="/airbnbpng@2x.png" airbnb="Airbnb" />
          <Item
            airbnbpng="/amazonpng-1@2x.png"
            airbnb="Amazon.co.uk"
            propLeft="140.1px"
          />
          <Item
            airbnbpng="/argospng-1@2x.png"
            airbnb="Argos"
            propLeft="280.2px"
          />
          <Item
            airbnbpng="/asdapng-1@2x.png"
            airbnb="ASDA"
            propLeft="420.3px"
          />
          <Item
            airbnbpng="/boohoopng@2x.png"
            airbnb="Boohoo"
            propLeft="560.5px"
          />
          <Item airbnbpng="/bqpng-1@2x.png" airbnb={`B&Q`} propLeft="700.6px" />
          <Item
            airbnbpng="/caffeneropng@2x.png"
            airbnb="Caffè Nero"
            propLeft="840.7px"
          />
          <Item
            airbnbpng="/cineworldpng@2x.png"
            airbnb="Cineworld"
            propLeft="980.8px"
          />
          <Item1 clarkspng="/clarkspng@2x.png" clarks="Clarks" />
          <Item1
            clarkspng="/costapng-1@2x.png"
            clarks="Costa"
            propLeft="1261px"
            propTop="0px"
          />
          <Item2
            curryspcworldpng="/curryspcworldpng-1@2x.png"
            currysPCWorld="Currys PC World"
          />
          <Item1
            clarkspng="/decathlonpng-1@2x.png"
            clarks="Decathlon"
            propLeft="1541.3px"
            propTop="0px"
          />
          <Item1
            clarkspng="/deliveroopng@2x.png"
            clarks="Deliveroo"
            propLeft="0px"
            propTop="150.7px"
          />
          <Item1
            clarkspng="/googleplaypng@2x.png"
            clarks="Google Play"
            propLeft="140.1px"
            propTop="150.7px"
          />
          <div className="item3">
            <div className="greatbritishpubpng-wrapper">
              <img
                className="greatbritishpubpng-icon"
                alt=""
                src="/greatbritishpubpng@2x.png"
              />
            </div>
            <a
              className="great-british-pub-container"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              <p className="great-british-pub">Great British Pub</p>
              <p className="card">Card</p>
            </a>
          </div>
          <Item1
            clarkspng="/hmpng@2x.png"
            clarks={`H&M`}
            propLeft="420.3px"
            propTop="150.7px"
          />
          <Item1
            clarkspng="/halfordspng-1@2x.png"
            clarks="Halfords"
            propLeft="560.5px"
            propTop="150.7px"
          />
          <Item1
            clarkspng="/johnlewispng-1@2x.png"
            clarks="John Lewis"
            propLeft="700.6px"
            propTop="150.7px"
          />
          <Item1
            clarkspng="/justeatpng@2x.png"
            clarks="Just Eat"
            propLeft="840.7px"
            propTop="150.7px"
          />
          <Item2
            curryspcworldpng="/laithwaiteswinepng@2x.png"
            currysPCWorld="Laithwaite's Wine"
            propTop="150.7px"
            propLeft="980.8px"
          />
          <div className="item4">
            <img
              className="marksandspencerpng-icon1"
              alt=""
              src="/marksandspencerpng-1@2x.png"
            />
            <a
              className="marks-and-spencer"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Marks and Spencer
            </a>
          </div>
          <Item1
            clarkspng="/morrisonspng@2x.png"
            clarks="Morrisons"
            propLeft="1261px"
            propTop="150.7px"
          />
          <div className="item5">
            <img
              className="nationalbooktokenspng-icon"
              alt=""
              src="/nationalbooktokenspng@2x.png"
            />
            <div className="national-book-tokens-wrapper">
              <a
                className="national-book-tokens-container"
                href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
                target="_blank"
              >
                <p className="national-book">National Book</p>
                <p className="tokens">Tokens</p>
              </a>
            </div>
          </div>
          <Item1
            clarkspng="/newlookpng@2x.png"
            clarks="New Look"
            propLeft="1541.3px"
            propTop="150.7px"
          />
        </div>
        <div className="view-all-button">
          <Button
            className="link7"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "#6c63ff",
              borderRadius: "4.8px",
              "&:hover": { background: "#6c63ff" },
              width: 167.8,
              height: 40,
            }}
          >
            View all
          </Button>
        </div>
        <div className="brand-disclaimer">
          <div className="the-merchants-represented-container">
            <p className="the-merchants-represented">
              The merchants represented are not sponsors or otherwise affiliated
              with this company. The logos and other identifying marks attached
              are trademarks of and owned by each represented company
            </p>
            <p className="andor-its-affiliates">
              and/or its affiliates. Please visit each company's website for
              additional terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

BrandHighlight.propTypes = {
  className: PropTypes.string,
};

export default BrandHighlight;
