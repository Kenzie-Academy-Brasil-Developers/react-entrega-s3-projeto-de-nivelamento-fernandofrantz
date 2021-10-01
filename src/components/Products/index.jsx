import "./styles.css";

const Products = ({ products, cart, setCart }) => {
  console.log(products);

  return (
    <>
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((prod) => (
            <li key={prod.id}>
              <h3>{prod.name}</h3>
              <h6>{prod.description}</h6>
              <h2 id="price">R$ {prod.price}</h2>
              <h3 id="discount">R$ {prod.discount} off</h3>
              <button onClick={() => setCart([...cart, prod])}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Products;
