import { useState } from "react";
import "./styles.css";
const RegisterProducts = ({ products, setProducts }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handleForm = () => {
    setProducts([
      ...products,
      {
        code: code,
        name: name,
        description: description,
        price: price,
        discount: discount,
      },
    ]);
  };

  console.log(products);
  return (
    <>
      <section>
        <h1>RegisterProducts</h1>
        <form>
          <input
            type="text"
            placeholder="Code"
            onChange={(evt) => setCode(evt.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Name"
            onChange={(evt) => setName(evt.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Description"
            onChange={(evt) => setDescription(evt.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Price"
            onChange={(evt) => setPrice(evt.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Discount"
            onChange={(evt) => setDiscount(evt.target.value)}
          ></input>
          <button type="button" onClick={handleForm}>
            Add product
          </button>
        </form>
      </section>
    </>
  );
};
export default RegisterProducts;
