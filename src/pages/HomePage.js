import Main from "../components/Main";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import HowItWorks from "../components/HowItWorks";
import BrandHighlight from "../components/BrandHighlight";
import UseCases from "../components/UseCases";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Main />
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <BrandHighlight />
      <UseCases />
      <section className="platform-benefits">
        <div className="background">
          <h1 className="elysian-gifts-is-container">
            <p className="elysian-gifts-is">Elysian Gifts is fast, simple,</p>
            <p className="secure-and-free">secure, and FREE.</p>
          </h1>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="background1">
        <h1 className="elysian-gifts-keeps-container">
          <p className="elysian-gifts-keeps">Elysian Gifts keeps recipients</p>
          <p className="happy-by-giving">happy by giving them</p>
          <p className="choice-and-convenience">choice and convenience.</p>
        </h1>
      </section>
      <FrameComponent3 />
      <FrameComponent4 />
      <footer className="footer-1920">
        <div className="footer-info">
          <div className="footer-logo-container">
            <img
              className="mask-group-icon"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className="elysiangifts-wrapper">
              <div className="elysiangifts">ElysianGifts</div>
            </div>
          </div>
          <div className="unified-incentives-uk">
            © Unified Incentives UK Ltd
          </div>
          <div className="company-number-10354856">Company Number 10354856</div>
          <div className="vat-number-274">VAT Number 274 1339 06</div>
          <img
            className="icon-linkedinpng"
            alt=""
            src="/iconlinkedinpng@2x.png"
          />
        </div>
        <div className="footer-navigation">
          <div className="contact-us-link">
            <div className="heading-4">Learn More</div>
            <div className="list">
              <div className="item-link">
                <a
                  className="solutions"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-927"
                  target="_blank"
                >
                  Solutions
                </a>
              </div>
              <div className="item-link1">
                <a
                  className="features"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1195"
                  target="_blank"
                >
                  Features
                </a>
              </div>
              <div className="item-link2">
                <a
                  className="gift-cards"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
                  target="_blank"
                >
                  Gift Cards
                </a>
              </div>
              <div className="item-link3">
                <a
                  className="clients"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-2842"
                  target="_blank"
                >
                  Clients
                </a>
              </div>
              <div className="item-link4">
                <a
                  className="pricing"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3596"
                  target="_blank"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>
          <div className="support-header-container">
            <div className="heading-41">Support</div>
            <div className="list1">
              <div className="item-link5">
                <a className="faq">FAQ</a>
              </div>
              <div className="item-link6">
                <div className="client-agreement">Client Agreement</div>
              </div>
              <div className="item-link7">
                <a
                  className="privacy-statement"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4713"
                  target="_blank"
                >
                  Privacy Statement
                </a>
              </div>
              <div className="item-link8">
                <div className="system-status">System Status</div>
              </div>
            </div>
          </div>
          <div className="footer-lists">
            <div className="heading-42">Account</div>
            <div className="list2">
              <div className="item-link9">
                <a
                  className="sign-up"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3403"
                  target="_blank"
                >
                  Sign Up
                </a>
              </div>
              <div className="item-link10">
                <a className="login">Login</a>
              </div>
            </div>
          </div>
          <div className="footer-lists1">
            <div className="heading-43">Company</div>
            <div className="list3">
              <div className="item-link11">
                <a className="about-us">About Us</a>
              </div>
              <div className="item-link12">
                <a
                  className="contact-us"
                  href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4402"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
