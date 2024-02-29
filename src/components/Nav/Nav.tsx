import Logo from "../UI/Logo/Logo";
import Cart from "../../assets/cart.svg";
import Navigation from "./Navigation";
import "./nav.scss";
import {navigationLinks} from "../constants/constants";
import {useNavigate} from "react-router-dom";
import {useCartStore} from "../../store/cart";

const Nav = () => {
  const navigate = useNavigate();
  const {itemCount} = useCartStore();
  const handleClick = () => {
    navigate("/cartpage");
  };

  return (
    <nav className="nav">
      <Logo />
      <Navigation navigationLinks={navigationLinks} />
      <picture className="nav__image-wrapper">
        <img
          src={Cart}
          alt=""
          onClick={() => {
            handleClick();
          }}
        />
        <p className="nav__image-wrapper--count">{itemCount}</p>
      </picture>
    </nav>
  );
};

export default Nav;
