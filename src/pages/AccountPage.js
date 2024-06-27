import Content from "../components/Content";
import AccountContainer from "../components/AccountContainer";
import Footer from "../components/Footer";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <main className="account-1920">
        <Content />
        <AccountContainer />
        <Footer
          giftCardsHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
          giftCardsTarget="_blank"
          aboutUsHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-4545"
          aboutUsTarget="_blank"
        />
      </main>
    </div>
  );
};

export default AccountPage;
