import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ImagesProductDetails from "../components/ImagesProductDetails";
import ProductDescriptionDetail from "../components/ProductDescriptionDetails";
import ProductCheckout from "../components/ProductCheckout";
import Ofertas from "../components/Ofertas";
import { useParams } from "react-router-dom";
import products from "../assets/products";

function Details() {
	document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  if (product) {
    return (
      <>
        <NavBar search={true} />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <ImagesProductDetails product={product}/>
              <ProductDescriptionDetail product={product}/>
              <ProductCheckout product={product}/>
            </div>
            <Ofertas />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Details;