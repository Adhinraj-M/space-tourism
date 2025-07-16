import "./Mobheader.css";
import logo from "../../../assets/shared/logo.svg";
import menuLogo from "../../../assets/shared/icon-hamburger.svg";
import MobNav from "../Mob-Nav-Menu/MobNav";
import { useState } from "react";
import WindowWidth from "../../../Resize/WindowWidth";

function MobHeader() {
  const [sideNav, setSideNav] = useState(false);
  const screenWidth = WindowWidth();

  console.log(screenWidth)

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

      {screenWidth < 748 && (
        <MobNav sideNav={sideNav} setSideNav={setSideNav} />
      )}
    </div>
  );
}

export default MobHeader;
