import "./styles.css";

const Cart = ({ cart }) => {
  console.log("cart", cart);
  return (
    <>
      <div>
        <h1>Cart</h1>
        <h2>
          Total value: R${" "}
          {cart.reduce((ant, atu) => ant + atu.price, 0).toFixed(2)}
        </h2>
        <h2>
          Total discount: R${" "}
          {cart.reduce((ant, atu) => ant + atu.discount, 0).toFixed(2)}
        </h2>
        <ul>
          {cart &&
            cart.map((prod) => (
              <li>
                <h3>{prod.name}</h3>
                <h2 id="price">R$ {prod.price}</h2>
                <h3 id="discount">R$ {prod.discount} off</h3>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default Cart;
