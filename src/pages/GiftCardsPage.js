import Header from "../components/Header";
import Link6 from "../components/Link6";
import Link7 from "../components/Link7";
import Link from "../components/Link";
import Link5 from "../components/Link5";
import Footer from "../components/Footer";
import "./GiftCardsPage.css";

const GiftCardsPage = () => {
  return (
    <div className="giftcardspage">
      <Header />
      <section className="giftcardspage-inner">
        <div className="gift-cards-wrapper">
          <h1 className="gift-cards1">Gift Cards</h1>
        </div>
      </section>
      <section className="giftcardspage-child">
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="heading-2-give-more-with-pre-wrapper">
              <h1 className="heading-2">Give more with ElysianGifts</h1>
            </div>
            <div className="sort-by-btton">
              <div className="sort-by">Sort by</div>
              <div className="sort-icon-wrapper">
                <img className="sort-icon" alt="" src="/sort-icon.svg" />
              </div>
            </div>
          </div>
          <div className="a-favorite-brand">
            A favorite brand or the gift of choice? How about... both!  
          </div>
          <div className="choose-a-gift">
            Choose a gift card, rest assured they can easily swap it for
            another.
          </div>
          <div className="link-terms">{`Terms & Conditions apply`}</div>
          <div className="link-parent">
            <div className="link">
              <img
                className="background-icon"
                loading="lazy"
                alt=""
                src="/background2@2x.png"
              />
              <div className="card-containers">
                <div className="card-titles">
                  <div className="heading-44">Minions Smart eGift Card</div>
                  <div className="heading-5">
                    <div className="special-edition">Special edition</div>
                  </div>
                </div>
              </div>
            </div>
            <Link6
              background="/background-1@2x.png"
              backToSchoolSmartEGift="Back to School Smart eGift"
              celebrateBackToSchool="Celebrate Back to School"
            />
            <Link7
              background="/background-2@2x.png"
              congratulationsSmartEGift="Congratulations Smart eGift"
              card="Card"
            />
            <Link
              background="/background-3@2x.png"
              heading4OhBabySmartEGiftC="Oh Baby! Smart eGift Card"
            />
            <Link7
              background="/background-4@2x.png"
              congratulationsSmartEGift="On The Go Eats Smart eGift"
              card="Card"
              propLeft="1139.2px"
              propTop="40px"
            />
            <Link
              background="/background-5@2x.png"
              heading4OhBabySmartEGiftC="Teachers Smart eGift Card"
              propLeft="1424px"
              propTop="40px"
            />
            <Link
              background="/background-6@2x.png"
              heading4OhBabySmartEGiftC="VividVouchers Kids Smart eGift Card"
              propLeft="0px"
              propTop="332px"
            />
            <Link5
              background="/background-7@2x.png"
              heading4KrogerEGiftCard="Kroger eGift Card"
            />
            <Link5
              background="/background-8@2x.png"
              heading4KrogerEGiftCard="Bright Cellars eGift Card"
              propLeft="569.6px"
            />
            <div className="link1">
              <img
                className="background-icon1"
                alt=""
                src="/background-9@2x.png"
              />
              <div className="link-inner">
                <div className="heading-4-sephora-gift-card-parent">
                  <div className="heading-45">Sephora Gift Card</div>
                  <div className="heading-51">
                    <div className="top-seller">Top Seller</div>
                  </div>
                </div>
              </div>
            </div>
            <Link6
              background="/background-10@2x.png"
              backToSchoolSmartEGift="YorkTest Wellness Card eGift"
              celebrateBackToSchool="New Arrival"
              propTop="332px"
              propLeft="1139.2px"
            />
            <Link7
              background="/background-11@2x.png"
              congratulationsSmartEGift="Academy Sports + Outdoors"
              card="eGift Card"
              propLeft="1424px"
              propTop="332px"
            />
            <Link
              background="/background-12@2x.png"
              heading4OhBabySmartEGiftC="Aries Season Smart eGift Card"
              propLeft="0px"
              propTop="624px"
            />
            <Link
              background="/background-13@2x.png"
              heading4OhBabySmartEGiftC="Etsy eGift Card"
              propLeft="284.8px"
              propTop="624px"
            />
            <Link
              background="/background-14@2x.png"
              heading4OhBabySmartEGiftC="Fandango Gift Card"
              propLeft="569.6px"
              propTop="624px"
            />
            <Link7
              background="/background-15@2x.png"
              congratulationsSmartEGift="Gemini Season Smart eGift"
              card="Card"
              propLeft="854.4px"
              propTop="624px"
            />
            <Link7
              background="/background-16@2x.png"
              congratulationsSmartEGift="Happy Mother's Day Smart"
              card="eGift Card"
              propLeft="1139.2px"
              propTop="624px"
            />
            <Link7
              background="/background-17@2x.png"
              congratulationsSmartEGift={`Health & Wellness Smart eGift`}
              card="Card"
              propLeft="1424px"
              propTop="624px"
            />
            <Link
              background="/background-18@2x.png"
              heading4OhBabySmartEGiftC="I Choose You Smart eGift Card"
              propLeft="0px"
              propTop="916px"
            />
            <Link
              background="/background-19@2x.png"
              heading4OhBabySmartEGiftC="Lego eGift Card"
              propLeft="284.8px"
              propTop="916px"
            />
            <Link7
              background="/background-20@2x.png"
              congratulationsSmartEGift="Trolls Band Together Smart"
              card="eGift Card"
              propLeft="569.6px"
              propTop="916px"
            />
            <Link7
              background="/background-21@2x.png"
              congratulationsSmartEGift="On The Go Eats Smart eGift"
              card="Card"
              propLeft="854.4px"
              propTop="916px"
            />
            <Link7
              background="/background-22@2x.png"
              congratulationsSmartEGift="Jurassic World Smart eGift"
              card="Card"
              propLeft="1139.2px"
              propTop="916px"
            />
            <Link
              background="/background-23@2x.png"
              heading4OhBabySmartEGiftC="Aerie Gift Card"
              propLeft="1424px"
              propTop="916px"
            />
          </div>
        </div>
      </section>
      <section className="heading-2-how-can-gift-recip-parent">
        <h1 className="heading-21">
          How can gift recipients redeem your branded Flexi eGift Card?
        </h1>
        <div className="redeem-step-containers-parent">
          <div className="redeem-step-containers">
            <div className="redeem-step-illustrations">
              <div className="background2">
                <b className="redeem-step-background">1</b>
              </div>
              <b className="heading-3">Open Flexi eGift Card</b>
              <div className="gift-cards-are-container">
                <p className="gift-cards-are">
                  Gift cards are delivered to recipients online, using
                </p>
                <p className="email-recipients-can">
                  email. Recipients can then open their egift card on
                </p>
                <p className="any-smartphone-tablet">
                  any smartphone, tablet, or computer.
                </p>
              </div>
            </div>
          </div>
          <div className="redeem-step-containers1">
            <div className="background3">
              <b className="b">2</b>
            </div>
            <b className="heading-31">Choose a retailer gift card or voucher</b>
            <div className="your-gift-recipients-container">
              <p className="your-gift-recipients">
                Your gift recipients convert their Flexi eGift Card into
              </p>
              <p className="any-combination-of">
                any combination of gift cards or vouchers up to the
              </p>
              <p className="total-available-balance">
                total available balance.
              </p>
            </div>
          </div>
          <div className="redeem-step-containers2">
            <div className="background4">
              <b className="b1">3</b>
            </div>
            <b className="heading-32">Start shopping</b>
            <div className="recipients-print-or-container">
              <p className="recipients-print-or">
                Recipients print or take their smartphone with the
              </p>
              <p className="barcode-to-the">
                barcode to the shop, or copy and paste the gift card
              </p>
              <p className="codes-into-the">
                codes into the checkout page when shopping online.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer
        maskGroup="/mask-group-12@2x.png"
        iconLinkedinpng="/iconlinkedinpng1@2x.png"
        pricingHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3596"
        pricingTarget="_blank"
      />
    </div>
  );
};

export default GiftCardsPage;
