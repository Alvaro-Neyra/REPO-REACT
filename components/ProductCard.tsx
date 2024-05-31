import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const {key, id, title, color, price, discount, image} = props;
    return (
        <Link className={styles["product-card"]} to={`./details/:${key}`}>
            <img
                className={styles["product-img"]}
                src= {image}
                alt= { id }
            />
            <div className={styles["product-info"]}>
                <span className={styles["product-title"]}> { title }</span>
                <span className={styles["product-description"]}> { color }</span>
                <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}> { price }</span>
                    <span className={styles["product-discount"]}>{ discount }</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                    Incluye impuesto País y percepción AFIP
                </div>
            </div>
        </Link>
    );
}