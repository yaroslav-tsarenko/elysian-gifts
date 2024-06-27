import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ItemImage.css";

const ItemImage = ({ className = "" }) => {
  return (
    <div className={`item-image ${className}`}>
      <div className="item-divider" />
      <div className="item-thumbnails">
        <img
          className="branding-uk-card-boxtpng-icon"
          alt=""
          src="/brandingukcardboxtpng@2x.png"
        />
        <div className="item-caption">
          <div className="gift-card1">$10 Gift Card</div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="item-actions">
          <div className="item-quantity">
            <div className="quantity-divider">$120.00</div>
            <div className="credits">12 Credits</div>
          </div>
          <div className="quantity-controls">
            <div className="control-buttons">
              <div className="increase-button">
                <img className="icon-plus" alt="" src="/iconplus.svg" />
              </div>
              <div className="button-divider">3</div>
              <input className="decrease-button" type="checkbox" />
            </div>
            <FormControl
              className="quantity-type"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#6c63ff",
                borderRadius: "8px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "DM Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972-1.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="action-divider">$120.00</div>
      </div>
    </div>
  );
};

ItemImage.propTypes = {
  className: PropTypes.string,
};

export default ItemImage;
