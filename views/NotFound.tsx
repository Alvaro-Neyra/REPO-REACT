import styles from "./NotFound.module.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

export default function NotFound() {
    return (
        <>
        <NavBar/>
        <div className={styles["not-found"]}>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
        <Footer/>
        </>
    );
}