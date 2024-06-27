import { Button } from "@mui/material";
import Link1 from "./Link1";
import Link2 from "./Link2";
import Link3 from "./Link3";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`background-group ${className}`}>
      <div className="background14" />
      <div className="heading-2-most-frequently-ch-parent">
        <h1 className="heading-29">Most frequently chosen gift cards</h1>
        <div className="gift-card-link-parent">
          <div className="gift-card-link">
            <Link1
              image="/image@2x.png"
              allIn1Choice="All-in-1 Choice"
              giftCard="Gift Card"
            />
            <Link2
              imageShadow="/imageshadow@2x.png"
              hotelGiftCard="Hotel Gift Card"
            />
            <Link3
              imageShadow="/imageshadow-1@2x.png"
              beautyFashion={`Beauty & Fashion`}
              choiceGiftCard="Choice Gift Card"
            />
            <Link1
              image="/image-1@2x.png"
              allIn1Choice="Restaurant Gift"
              giftCard="Card"
              propLeft="1036.5px"
            />
            <Link3
              imageShadow="/imageshadow-2@2x.png"
              beautyFashion="Great British Pub"
              choiceGiftCard="Gift Card"
              propLeft="1382px"
              propTop="24px"
            />
            <Link3
              imageShadow="/imageshadow-3@2x.png"
              beautyFashion="John Lewis Gift"
              choiceGiftCard="Card"
              propLeft="0px"
              propTop="388px"
            />
            <Link3
              imageShadow="/imageshadow-4@2x.png"
              beautyFashion="Great British Pub"
              choiceGiftCard="Gift Card"
              propLeft="345.5px"
              propTop="388px"
            />
            <Link2
              imageShadow="/imageshadow-3@2x.png"
              hotelGiftCard="Costa Gift Card"
              propTop="388px"
              propLeft="691px"
            />
            <Link3
              imageShadow="/imageshadow-6@2x.png"
              beautyFashion="Virgin Experience"
              choiceGiftCard="Days Gift Card"
              propLeft="1036.5px"
              propTop="388px"
            />
            <Link2
              imageShadow="/imageshadow-7@2x.png"
              hotelGiftCard="Hotel Gift Card"
              propTop="388px"
              propLeft="1382px"
            />
          </div>
          <Button
            className="frame-child"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "17.6",
              background: "#6c63ff",
              borderRadius: "10px",
              "&:hover": { background: "#6c63ff" },
              width: 200,
              height: 46,
            }}
          >
            View all gift cards
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
