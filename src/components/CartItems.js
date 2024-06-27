import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ItemImage from "./ItemImage";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="cart-item">
        <div className="cart-item-details">
          <div className="item-info">
            <div className="header4">
              <div className="header-child" />
              <div className="info-columns">
                <div className="product">Product</div>
              </div>
              <div className="info-columns1">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="item-summary">
              <img
                className="branding-uk-card-boxtpng-icon1"
                loading="lazy"
                alt=""
                src="/brandingukcardboxtpng@2x.png"
              />
              <div className="summary-title">
                <div className="gift-card2">$10 Gift Card</div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="summary-pricing">
                <div className="price-breakdown">
                  <div className="breakdown-details">$120.00</div>
                  <div className="credits1">12 Credits</div>
                </div>
                <div className="summary-actions">
                  <div className="quantity-adjustment">
                    <div className="adjustment-buttons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className="adjustment-divider">3</div>
                    <input className="adjustment-buttons1" type="checkbox" />
                  </div>
                  <FormControl
                    className="quantity-display"
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
                          src="/value-input.svg"
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
              <div className="summary-divider1">$120.00</div>
            </div>
          </div>
          <ItemImage />
          <ItemImage />
          <div className="cart-actions">
            <div className="action-divider1" />
            <div className="action-buttons">
              <Button
                className="button5"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 132,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button6"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#6c63ff",
                  borderRadius: "4px",
                  "&:hover": { background: "#6c63ff" },
                  width: 145,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="order-details-header">
            <div className="header5">
              <div className="checkout-details5">Checkout Details</div>
            </div>
          </div>
          <div className="order-summary">
            <div className="total-amounts">
              <div className="cart-subtotal1">Cart Subtotal</div>
              <div className="total-divider">$360.00</div>
            </div>
          </div>
          <div className="order-breakdown">
            <div className="breakdown-items">
              <div className="breakdown-labels">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="other-taxes1">Other Taxes</div>
              </div>
              <div className="breakdown-labels1">
                <div className="div6">$0.00</div>
                <div className="div7">$0.00</div>
              </div>
            </div>
          </div>
          <div className="order-divider">
            <div className="footer-divider" />
          </div>
          <div className="order-summary1">
            <div className="grand-total-group">
              <div className="grand-total1">Grand Total</div>
              <div className="div8">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
