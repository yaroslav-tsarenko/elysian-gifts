import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent5 from "../components/FrameComponent5";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <main className="checkout-1920">
        <FrameComponent5 />
        <section className="billing-container-wrapper">
          <form className="billing-container">
            <div className="billing-form">
              <h2 className="checkout">Checkout</h2>
              <div className="header">
                <div className="billing-details">Billing Details</div>
              </div>
              <div className="form-field-block">
                <div className="row-1">
                  <TextField
                    className="block-1"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <TextField
                    className="block-2"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                </div>
                <div className="row-2">
                  <div className="block-11">
                    <div className="company-name">Company Name</div>
                  </div>
                  <div className="block-21">
                    <div className="country">Country</div>
                    <img className="icon" alt="" src="/icon.svg" />
                  </div>
                </div>
                <TextField
                  className="row-3"
                  placeholder="Street Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-22"
                  placeholder="Apartment / Suite / Unit / etc. (Optional)"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="row-4"
                  placeholder="Town / City"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-23"
                  placeholder="Email Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="row-5">
                  <TextField
                    className="block-12"
                    placeholder="ZIP"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <TextField
                    className="block-24"
                    placeholder="Phone"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                </div>
              </div>
              <div className="divider" />
              <div className="billing-buttons">
                <div className="button1">
                  <img className="tag-icon" alt="" src="/tag-icon.svg" />
                  <div className="button2">Back</div>
                  <img className="tag-icon1" alt="" src="/tag-icon.svg" />
                </div>
                <Button
                  className="button3"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#6c63ff",
                    borderRadius: "4px",
                    "&:hover": { background: "#6c63ff" },
                    width: 114,
                    height: 76,
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="checkout-details-parent">
              <div className="checkout-details">
                <div className="header1">
                  <div className="checkout-details1">Checkout Details</div>
                </div>
                <div className="cart-subtotal-parent">
                  <div className="cart-subtotal">Cart Subtotal</div>
                  <div className="order-details-values">$360.00</div>
                </div>
                <div className="shipping-handling-parent">
                  <div className="shipping-handling">{`Shipping & Handling`}</div>
                  <div className="div">$0.00</div>
                </div>
                <div className="other-taxes-parent">
                  <div className="other-taxes">Other Taxes</div>
                  <div className="div1">$0.00</div>
                </div>
                <div className="summary-divider" />
                <div className="grand-total-parent">
                  <div className="grand-total">Grand Total</div>
                  <div className="div2">$360.00</div>
                </div>
              </div>
              <div className="transfer-options">
                <div className="header2">
                  <div className="transfer-options1">Transfer Options</div>
                </div>
                <div className="checkout-details2">
                  <div className="logos-block">
                    <div className="block-13">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-11@2x.png"
                        />
                      </div>
                      <div className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </div>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </div>
                    </div>
                  </div>
                  <div className="method-containers">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-3@2x.png"
                        />
                      </div>
                      <div className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </div>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <div className="paypal">PayPal</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout1">
                <div className="header3">
                  <div className="checkout2">Checkout</div>
                </div>
                <div className="checkout-details3">
                  <div className="your-personal-data">
                    Your Personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our product
                  </div>
                  <Button
                    className="button4"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#6c63ff",
                      borderRadius: "4px",
                      "&:hover": { background: "#6c63ff" },
                      width: 452,
                      height: 76,
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </section>
        <Footer
          maskGroup="/mask-group-11@2x.png"
          iconLinkedinpng="/iconlinkedinpng@2x.png"
        />
      </main>
    </div>
  );
};

export default CheckoutPage;
