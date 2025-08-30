// Icon imports
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header({ handleChange, handleClick, input }) {
  return (
    <header id="header">
      <div className="logoContainer">
        <span className="logo">ShopEase</span>
      </div>
      <form className="searchContainer">
        <input
          className="searchBar"
          type="text"
          name="search"
          id="search"
          value={input}
          onChange={handleChange}
          placeholder="Search for products"
        />
        <button className="primary-btn" type="button" onClick={handleClick}>
          Search
        </button>
      </form>
      <nav className="accountContainer">
        <Link to={"/orders"} aria-label="Orders" className="nav-link">
          <span className="link-name">Orders</span>
          <LocalShippingOutlinedIcon />
        </Link>
        <Link to={"/saved"} aria-label="Saved" className="nav-link">
          <span className="link-name">Saved</span>
          <FavoriteBorderOutlinedIcon />
        </Link>
        <Link to={"/cart"} aria-label="My Cart" className="nav-link">
          <span className="link-name">My Cart</span>
          <LocalMallOutlinedIcon />
        </Link>
        <Link to={"/profile"} aria-label="Profile" className="nav-link">
          <span className="link-name">Profile</span>
          <PermIdentityOutlinedIcon />
        </Link>
      </nav>
    </header>
  );
}
