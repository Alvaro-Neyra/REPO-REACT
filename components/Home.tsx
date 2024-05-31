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
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
                img={product.img}
              />
            ))
          }
        </div>
      </main>
      <Footer/>
      </>
    );
}