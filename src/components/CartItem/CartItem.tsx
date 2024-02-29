import "./CartItem.scss";
import {useCartStore} from "../../store/cart";

export type Props = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({id, name, price, quantity}: Props) => {
  const {cartArray, removeFromCart} = useCartStore();
  return (
    <article key={id} className="cart-item">
      <h4>name: {name}</h4>
      <p>price: {price} SEK</p>
      <p>quantity: {quantity}</p>
      <button onClick={() => removeFromCart(id)}>DELETE</button>
    </article>
  );
};

export default CartItem;
