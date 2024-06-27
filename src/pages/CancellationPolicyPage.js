import { useEffect } from "react";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import styles from "./CancellationPolicyPage.module.css";

const CancellationPolicyPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.cancellationpolicypage}>
      <Header />
      <div className={styles.cancellationPolicyParent}>
        <h1 className={styles.cancellationPolicy}>Cancellation Policy</h1>
        <div className={styles.policyExcerpt}>
          <div
            className={styles.pleaseReferTo}
          >{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
        </div>
      </div>
      <main className={styles.cancellationContent}>
        <FrameComponent1 />
        <div className={styles.refundEligibilityParent}>
          <h1 className={styles.refundEligibility}>
            <ol className={styles.refundEligibility1}>
              <li>Refund Eligibility</li>
            </ol>
          </h1>
          <div className={styles.refundContent}>
            <div className={styles.refundsWillBe}>
              2.1 Refunds will be issued based on the cancellation period and
              terms outlined in our policy.
            </div>
            <div className={styles.ifCancellationIs}>
              2.2 If cancellation is initiated within the specified period, you
              will be eligible for a full refund of the purchase amount.
            </div>
            <div className={styles.cancellationsMadeAfter}>
              2.3 Cancellations made after the specified period may be eligible
              for a partial refund or no refund, depending on the circumstances
              and the terms associated with the service or product.
            </div>
          </div>
        </div>
        <section className={styles.cancellationProcessParent}>
          <h1 className={styles.cancellationProcess}>
            <ol className={styles.cancellationProcess1}>
              <li>Cancellation Process</li>
            </ol>
          </h1>
          <div className={styles.toCancelYour} data-animate-on-scroll>
            To cancel your booking or subscription, please contact our customer
            support team via [email/phone/chat] with your order details and
            reason for cancellation. Our team will guide you through the
            cancellation process and provide assistance as needed. Please ensure
            to cancel your booking or subscription before the start date of the
            service to avoid any cancellation fees or penalties.
          </div>
        </section>
        <section className={styles.refundProcessingTimeParent}>
          <h1 className={styles.refundProcessingTimeContainer}>
            <ol className={styles.refundProcessingTime}>
              <li> Refund Processing Time</li>
            </ol>
          </h1>
          <div className={styles.refundsForEligible}>
            Refunds for eligible cancellations will be processed within [Y]
            business days from the date of cancellation confirmation. The time
            taken for the refund to reflect in your account may vary depending
            on your payment method and financial institution.
          </div>
        </section>
        <section className={styles.exceptionsAndSpecialCircumsParent}>
          <h1 className={styles.exceptionsAndSpecialContainer}>
            <ol className={styles.exceptionsAndSpecialCircums}>
              <li>Exceptions and Special Circumstances</li>
            </ol>
          </h1>
          <div className={styles.certainServicesOr}>
            Certain services or products may have specific cancellation terms
            and conditions that supersede the general policy. In cases of force
            majeure, such as natural disasters, government regulations, or other
            unforeseen circumstances beyond our control, refund eligibility and
            cancellation terms may be adjusted accordingly.
          </div>
        </section>
        <section className={styles.changesToBookingsParent}>
          <h1 className={styles.changesToBookingsContainer}>
            <ol className={styles.changesToBookings}>
              <li>Changes to Bookings</li>
            </ol>
          </h1>
          <div className={styles.youHaveThe}>
            Changes to bookings or subscriptions may be permitted depending on
            availability and the terms associated with the service or product.
            Please contact our customer support team for assistance with any
            changes to your booking or subscription.
          </div>
        </section>
        <section className={styles.policyUpdatesParent}>
          <h1 className={styles.policyUpdates}>
            <ol className={styles.policyUpdates1}>
              <li> Policy Updates</li>
            </ol>
          </h1>
          <div className={styles.thisCancellationAnd}>
            This cancellation and refund policy is subject to change without
            prior notice.We encourage you to review the policy periodically to
            stay informed about any updates or modifications.
          </div>
        </section>
        <section className={styles.contactUsParent}>
          <h1 className={styles.contactUs}>
            <ol className={styles.contactUs1}>
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className={styles.ifYouHave}>
            If you have any questions or require further clarification regarding
            our cancellation and refund policy, please don't hesitate to contact
            our customer support team.
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationPolicyPage;
