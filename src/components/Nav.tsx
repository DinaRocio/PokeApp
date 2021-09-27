import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburguer from "../assets/Icons/Hamburguer";
import pic from "../assets/logo.png";
import {
  LogoModal,
  ModalBackground,
  ModalContent,
  ModalOptions,
} from "../styles/Modal";
import { Logo, NavBar, NavLink } from "../styles/Nav";
import CloseIcon from "../assets/Icons/Close";

export default function Nav() {
  const [showModal, setShowModal] = useState(false);

  const onClickHamburguer = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <NavBar>
      {showModal && (
        <ModalBackground>
          <ModalContent>
            <LogoModal src={pic} alt="logo" />
            <CloseIcon className="close-icon" onClick={onClose} />

            <ModalOptions>
              <Link to="/about">
                <h3>About</h3>
              </Link>
              <Link to="/shop">
                <h3>Shop</h3>
              </Link>
              <a href="https://www.linkedin.com/in/dinavillanueva/">
                <h3>About me</h3>
              </a>
              <a href="https://github.com/DinaRocio/PokeApp">
                <h3>Check this Repo</h3>
              </a>
            </ModalOptions>
          </ModalContent>
        </ModalBackground>
      )}
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
      <div className="hamburguer-icon" onClick={onClickHamburguer}>
        <Hamburguer />
      </div>
    </NavBar>
  );
}
