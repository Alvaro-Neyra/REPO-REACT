import styles from "./Home.module.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import products from "../src/assets/products.js";

export default function Home() {
    return (
      <>
        <NavBar />
        <Hero first="Tecnologia" second="Renovada"/>
        <main>
        <div className={styles["product-container"]} id="products">
          {
            products.map((each) => (
              <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              image={each.images[0]}
            />
            ))
          }
        </div>
      </main>
      <Footer/>
      </>
    );
}