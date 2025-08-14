import "./App.css";
import Product from "./components/screens/Product";
import { Route, HashRouter, Routes } from "react-router-dom";
import WishList from "./components/screens/WishList";
import Cart from "./components/screens/Cart";
import Notfication from "./components/screens/Notfication";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import ProductSingle from "./components/screens/ProductSingle";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/notfication" element={<Notfication />} />
                <Route path="auth/login" element={<Login />} />
                <Route path="auth/signup" element={<Signup />} />
                <Route path="/product/:id" element={<ProductSingle />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
