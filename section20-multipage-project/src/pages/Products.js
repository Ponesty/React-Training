import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Here we have the Products Page!</h1>
      <ul>
        <li>
          <Link to="/products/p1">10,000 Runes</Link>
        </li>
        <li>
          <Link to="/products/p2">Lightsaber</Link>
        </li>
        <li>
          <Link to="/products/p3">Moldy Burrito</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
