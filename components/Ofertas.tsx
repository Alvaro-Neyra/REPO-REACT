import styles from "./Ofertas.module.css";
import products from "../assets/products.js";
import ProductCard from "../components/ProductCard";
function Ofertas() {
  const onsale = products.filter((each) => each.onsale);
  return (
      <div className={styles["sales-block"]}>
        <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
        <div id="product-container" className={styles["product-container"]}>
          {onsale.map((each, index) => (
            <ProductCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              image={each.images[0]}
            />
          ))}
        </div>
      </div>
  );
}

export default Ofertas;