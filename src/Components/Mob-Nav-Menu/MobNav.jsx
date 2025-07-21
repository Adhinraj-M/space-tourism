import { Link } from "react-router-dom";
import closeBtn from "../../../public/assets/shared/icon-close.svg";
import "./mobNav.css";

function MobNav({ sideNav, setSideNav }) {

  return (
    <nav className={`mob-nav-container ${sideNav ? 'active' : ''}`} >
      <div className="close-wrapper">
        <img
          src={closeBtn}
          alt="close-button"
          className="close-btn"
          onClick={() => setSideNav(!sideNav)}
        />
      </div>
      <ul className="menu-container">
        <Link to={'/'} className="navigation-state">
          <span className="menu-name">00</span>HOME
        </Link>
        <Link to={'/destination'} className="navigation-state" >
          <span className="menu-name">01</span>DESTINATION
        </Link>
        <Link to={'/crew'} className="navigation-state" >
          <span className="menu-name">02</span>CREW
        </Link>
        <Link to={'/technology'} className="navigation-state" >
          <span className="menu-name">03</span>TECHNOLOGY
        </Link>
      </ul>
    </nav>
  );
}

export default MobNav;

