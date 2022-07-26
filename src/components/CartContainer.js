import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">Cart is empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <hr />
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
