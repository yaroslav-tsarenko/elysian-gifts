import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header />
      <main className="content1">
        <div className="sign-up-form-container">
          <SignIn />
        </div>
        <img
          className="background-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </main>
      <Footer
        pricingHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3596"
        pricingTarget="_blank"
      />
    </div>
  );
};

export default SignUpPage;
