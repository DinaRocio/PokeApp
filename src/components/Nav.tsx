import { Link } from "react-router-dom";
import Hamburguer from "../assets/Icons/Hamburguer";
import pic from "../assets/logo.png";
import { Logo, NavBar, NavLink } from "../styles/Nav";

export default function Nav() {
  return (
    <NavBar>
      <Link to="/">
        <Logo src={pic} alt="logo" />
      </Link>
      <ul className="nav-section">
        <Link to="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link to="/shop">
          <NavLink>Shop</NavLink>
        </Link>
      </ul>
      <div className="hamburguer-icon">
        <Hamburguer />
      </div>
    </NavBar>
  );
}
