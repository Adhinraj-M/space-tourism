import closeBtn from "../../../assets/shared/icon-close.svg";
import "../Mob-Nav-Menu/mobNav.css";

function MobNav({ sideNav, setSideNav }) {



  return (
    <div className={`mob-nav-container ${sideNav ? 'active' : ''}`} >
      <div className="close-wrapper">
        <img
          src={closeBtn}
          alt="close-button"
          className="close-btn"
          onClick={() => setSideNav(!sideNav)}
        />
      </div>
      <ul className="menu-container">
        <li className="navigation-state">
          <span className="menu-name">00</span>HOME
        </li>
        <li className="navigation-state">
          <span className="menu-name">01</span>DESTINATION
        </li>
        <li className="navigation-state" >
          <span className="menu-name">02</span>CREW
        </li>
        <li className="navigation-state" >
          <span className="menu-name">03</span>TECHNOLOGY
        </li>
      </ul>
    </div>
  );
}

export default MobNav;

