import {useCartStore} from "../../store/cart";
import CartItem from "../CartItem/CartItem";
import "./CartContent.scss";

const CartContent = () => {
  const {cartArray, displaySum} = useCartStore();

  return (
    <section className="cart-section">
      <h3>SHOPPING CART</h3>
      {cartArray.map((item, index) => (
        <CartItem
          id={item.id}
          name={item.name}
          price={item.price * item.quantity}
          quantity={item.quantity}
        />
      ))}
      <h4>TOTAL: {displaySum}</h4>
    </section>
  );
};

export default CartContent;
