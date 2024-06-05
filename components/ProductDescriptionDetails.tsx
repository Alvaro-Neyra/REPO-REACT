import styles from './ProductDescriptionDetails.module.css';

interface Product {
    title: string;
    colors: string[];
    description: string;
}

interface ProductDescriptionDetailsProps {
    product: Product;
}

function ProductDescriptionDetails({ product }: ProductDescriptionDetailsProps) {
    return (
        <div className={styles["product-description-block"]}>
              <h1 className={styles["product-title"]}>{ product.title }</h1>
              <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                  <label className={styles["product-label"]} htmlFor="color">Color</label>
                  <select
                    className={styles["product-select"]}
                    id="color"
                    defaultValue={product.colors[0]}
                  >
                    {product.colors.map((index, each) => <option key={index} value={each}>{each}</option>)}
                  </select>
                </fieldset>
              </form>
              <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>
                    { product.description }
                </p>
              </div>
            </div>
    );
}

export default ProductDescriptionDetails;