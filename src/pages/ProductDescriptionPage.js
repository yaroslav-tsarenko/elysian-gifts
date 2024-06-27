import { Button } from "@mui/material";
import Header1 from "../components/Header1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <Header1 />
      <main className="productdescriptionpage-inner">
        <section className="frame-parent">
          <div className="frame-wrapper">
            <form className="frame-group">
              <div className="image-10-parent">
                <img
                  className="image-10-icon"
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
                <div className="product-description-tab-names-parent">
                  <div className="product-description-tab-names">
                    <div className="about-this-gift">
                      About this Gift Voucher
                    </div>
                    <img className="tab-icon" alt="" src="/tab-icon.svg" />
                  </div>
                  <div className="product-description-tab-names1">
                    <div className="how-to-use">How to Use</div>
                    <img
                      className="product-description-tab-names-child"
                      alt=""
                      src="/tab-icon.svg"
                    />
                  </div>
                  <div className="product-description-tab-names2">
                    <div className="brands-included-in">
                      Brands Included In this Voucher
                    </div>
                    <img
                      className="product-description-tab-names-item"
                      alt=""
                      src="/tab-icon.svg"
                    />
                  </div>
                  <div className="product-description-tab-names3">
                    <div className="terms-conditions">{`Terms & Conditions`}</div>
                    <img
                      className="product-description-tab-names-inner"
                      alt=""
                      src="/tab-icon.svg"
                    />
                  </div>
                  <div className="note-parent">
                    <b className="note">Note:</b>
                    <div className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</div>
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <div className="frame-div">
                  <div className="best-buy-gift-card-parent">
                    <h1 className="best-buy-gift">Best Buy Gift Card</h1>
                    <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
                  </div>
                  <div className="i-would-like-to-parent">
                    <div className="i-would-like">I would Like to:</div>
                    <div className="recipient-button-parent">
                      <Button
                        className="recipient-button"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#6c63ff",
                          borderRadius: "10px",
                          "&:hover": { background: "#6c63ff" },
                          height: 58,
                        }}
                      >
                        Gift a Friend
                      </Button>
                      <Button
                        className="recipient-button1"
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#6c63ff",
                          fontSize: "16",
                          borderColor: "#6c63ff",
                          borderRadius: "10px",
                          "&:hover": { borderColor: "#6c63ff" },
                          width: 143,
                          height: 58,
                        }}
                      >
                        Gift Myself
                      </Button>
                    </div>
                  </div>
                  <div className="gift-card-worth-parent">
                    <div className="gift-card-worth">Gift Card Worth:</div>
                    <div className="gift-card-value-button-parent">
                      <div className="gift-card-value-button">
                        <div className="usd-200">USD $200</div>
                      </div>
                      <Button
                        className="gift-card-value-button1"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#6c63ff",
                          borderRadius: "10px",
                          "&:hover": { background: "#6c63ff" },
                          height: 58,
                        }}
                      >
                        USD $500
                      </Button>
                      <div className="gift-card-value-button2">
                        <div className="usd-700">USD $700</div>
                      </div>
                      <Button
                        className="gift-card-value-button3"
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#6c63ff",
                          fontSize: "16",
                          borderColor: "#6c63ff",
                          borderRadius: "10px",
                          "&:hover": { borderColor: "#6c63ff" },
                          height: 58,
                        }}
                      >
                        USD $1000
                      </Button>
                    </div>
                  </div>
                  <div className="select-your-quantity-parent">
                    <div className="select-your-quantity">
                      Select your Quantity
                    </div>
                    <div className="quantity-button-parent">
                      <div className="quantity-button">
                        <div className="quantity-button-child" />
                        <img
                          className="add-icon"
                          loading="lazy"
                          alt=""
                          src="/add.svg"
                        />
                      </div>
                      <div className="quantity-value-wrapper">
                        <div className="quantity-value">4</div>
                      </div>
                      <div className="quantity-button1">
                        <div className="quantity-button-item" />
                        <div className="quantity-icon-wrapper">
                          <img
                            className="quantity-icon"
                            loading="lazy"
                            alt=""
                            src="/vector-600.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="button"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#6c63ff",
                      borderRadius: "10px",
                      "&:hover": { background: "#6c63ff" },
                      height: 76,
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <FrameComponent />
        </section>
      </main>
      <Footer
        maskGroup="/mask-group-11@2x.png"
        iconLinkedinpng="/iconlinkedinpng@2x.png"
        pricingHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3596"
        pricingTarget="_blank"
      />
    </div>
  );
};

export default ProductDescriptionPage;
