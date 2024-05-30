import styles from "./App.module.css";
import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import Home from "../components/Home.tsx";
import Details from "../views/Details.tsx";
import Cart from "../views/Cart.tsx";
import NotFound from "../views/NotFound.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  { "path": "/", "element": <Home /> },
  { "path": "/details/:productId", "element": <Details/> },
  { "path": "/cart", "element": <Cart />},
  { "path": "*", "element": <NotFound /> }
]);


function App() {
  return (<RouterProvider router={BrowserRouter}/>);
}

export default App;
