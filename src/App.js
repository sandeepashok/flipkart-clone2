import './App.css';
import ProductContextProvider from './Context/productsContext';
import CartContextProvider from './Context/CartContext';
import Nav from './Components/Nav/Nav'
import ProductPage from './Components/ProductPage/ProductPage';
import CartPage from './Components/CartPage/CartPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
