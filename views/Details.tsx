import styles from "./Details.module.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import Oferta from "../components/Ofertas.tsx";
import Hero from "../components/Hero.js";
import ImagesProductDetails from "../components/ImagesProductDetails.tsx";
import ProductCheckout from "../components/ProductCheckout.tsx";
import ProductDescriptionDetails from "../components/ProductDescriptionDetails.tsx";
import { useParams } from "react-router-dom";
import products from "../src/assets/products.js";

export default function Details() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
      return (
        <>
        <NavBar/>
        {!product && <Hero first="NOT" second="found" />}
        <main>
          <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <ImagesProductDetails product={product} />
            <ProductDescriptionDetails product={product} />
            <ProductCheckout product={product} />
          </div>
          <Oferta/>
        </div>
        </main>
        <Footer></Footer>
        </> 
      );
}