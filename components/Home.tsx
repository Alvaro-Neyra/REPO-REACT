import styles from "./Home.module.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Home() {
    return (
      <>
        <NavBar />
        <Hero first="Tecnologia" second="Renovada"/>
        <main>
        <div className={styles["product-container"]} id="products">
          <a className={styles["product-card"]} href="./details/:001">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details/:002">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details/:003">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details/:004">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details/:005">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details/:006">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
        </div>
      </main>
      <Footer/>
      </>
    );
}