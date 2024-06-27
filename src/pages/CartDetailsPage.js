import Main1 from "../components/Main1";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <Main1 />
      <CartItems />
      <Footer
        maskGroup="/mask-group-11@2x.png"
        iconLinkedinpng="/iconlinkedinpng@2x.png"
        pricingHref="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-3596"
        pricingTarget="_blank"
      />
    </div>
  );
};

export default CartDetailsPage;
