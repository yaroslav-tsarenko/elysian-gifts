import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./RefundPolicyPage.module.css";

const RefundPolicyPage = () => {
  return (
    <div className={styles.refundpolicypage}>
      <Header />
      <section className={styles.refundPolicyParent}>
        <h1 className={styles.refundPolicy}>Refund Policy</h1>
        <div className={styles.pleaseReferToOurTermsAndWrapper}>
          <div
            className={styles.pleaseReferTo}
          >{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
        </div>
      </section>
      <section className={styles.wishdeckWeUsOrOurParent}>
        <div className={styles.wishdeckWeUs}>
          We value your trust and strive to provide transparent and fair
          cancellation and refund processes. Please read the following policy
          carefully to understand your rights and obligations regarding
          cancellations and refunds:
        </div>
        <div className={styles.eligibilityForRefundsParent}>
          <h1 className={styles.eligibilityForRefundsContainer}>
            <ol className={styles.eligibilityForRefunds}>
              <li> Eligibility for Refunds</li>
            </ol>
          </h1>
          <div className={styles.theProductOrServiceYouPurParent}>
            <div className={styles.theProductOr}>
              1.1 The product or service you purchased is defective, damaged, or
              not as described.
            </div>
            <div className={styles.youHaveCanceled}>
              1.2 You have canceled your order or subscription within the
              specified cancellation period, as outlined in our cancellation
              policy.
            </div>
          </div>
        </div>
        <FrameComponent />
        <div className={styles.contentHeaders}>
          <h1 className={styles.nonRefundableItemsAndContainer}>
            <ol className={styles.nonRefundableItemsAndServi}>
              <li>Non-Refundable Items and Services</li>
            </ol>
          </h1>
          <div className={styles.certainItemsOr}>
            Certain items or services may not be eligible for refunds, including
            but not limited to: Digital products or services that have been
            accessed, downloaded, or used. Customized or personalized products
            or services that are non-returnable. Services that have already been
            rendered or partially rendered, except where prohibited by law.
          </div>
        </div>
        <div className={styles.contentHeaders1}>
          <h1 className={styles.exceptionsAndSpecialContainer}>
            <ol className={styles.exceptionsAndSpecialCircums}>
              <li>Exceptions and Special Circumstances:</li>
            </ol>
          </h1>
          <div className={styles.exceptionsToThis}>
            Exceptions to this refund policy may be granted in cases of force
            majeure, such as natural disasters, government regulations, or other
            unforeseen circumstances beyond our control. Any exceptions or
            special circumstances will be evaluated on a case-by-case basis and
            at the discretion of our customer support team.
          </div>
        </div>
        <div className={styles.contentHeaders2}>
          <h1 className={styles.contactUs}>
            <ol className={styles.contactUs1}>
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className={styles.ifYouHaveContainer}>
            <p className={styles.ifYouHave}>
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at
              LilyLamb Kids.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.byUsingOur}>
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </div>
      </section>
      <Footer
        aboutUsHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4545"
        aboutUsTarget="_blank"
      />
    </div>
  );
};

export default RefundPolicyPage;
