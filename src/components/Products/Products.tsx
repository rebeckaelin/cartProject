import Card from "../Card/Card";
import {data} from "../constants/constants";
import "./products.scss";

const Products = () => {
  const card = data.map((pokemon) => (
    <Card
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      desc={pokemon.desc}
      buttonText={pokemon.buttonText}
      price={pokemon.price}
    />
  ));
  return (
    <section className="products-wrapper">
      <h3>Products</h3>

      <section className="products-wrapper__cards">{card}</section>
    </section>
  );
};

export default Products;
