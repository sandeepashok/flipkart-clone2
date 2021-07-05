import { Link } from "react-router-dom";
import "./nav.css";


export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="brand-name">Flipkart</Link>
      <input type="search" placeholder="search products" />
      <button>Login</button>
      <p>More</p>
      <Link to="/cart">Cart</Link>
    </div>
  );
}