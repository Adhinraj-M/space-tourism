import "../Header/header.css";
import logo from "../../../assets/shared/logo.svg";
import menuLogo from "../../../assets/shared/icon-hamburger.svg";
import MobNav from "../Mob-Nav-Menu/MobNav";
import { useState } from "react";

function Header() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="mobile-menu-icon">
        <img
          src={menuLogo}
          onClick={() => setSideNav(!sideNav)}
          alt="mobile-menu-icon"
          className="menu-icon"
        />
      </div>

      <MobNav sideNav={sideNav} setSideNav={setSideNav} />
    </div>
  );
}

export default Header;
