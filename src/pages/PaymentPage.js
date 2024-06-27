import Header from "../components/Header";
import ContactInfoFields from "../components/ContactInfoFields";
import Footer from "../components/Footer";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <Header />
      <main className="form-container-parent">
        <div className="form-container">
          <div className="form-content">
            <img
              className="form-content-child"
              loading="lazy"
              alt=""
              src="/frame-1000006877@2x.png"
            />
            <div className="footer-note">
              <div className="payment-info">
                <div className="powered-by">{`Powered by `}</div>
                <img
                  className="payment-icons"
                  loading="lazy"
                  alt=""
                  src="/payment-icons@2x.png"
                />
              </div>
              <img
                className="footer-graphic-icon"
                loading="lazy"
                alt=""
                src="/vector-341.svg"
              />
              <div className="legal">Legal</div>
              <div className="refunds">Refunds</div>
            </div>
          </div>
        </div>
        <section className="rectangle-parent">
          <div className="frame-child" />
          <ContactInfoFields />
        </section>
      </main>
      <Footer
        giftCardsHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
        giftCardsTarget="_blank"
        pricingHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3596"
        pricingTarget="_blank"
        fAQHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3999"
        fAQTarget="_blank"
        aboutUsHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4545"
        aboutUsTarget="_blank"
      />
    </div>
  );
};

export default PaymentPage;
