import logo from '../../../assets/shared/logo.svg'

function NavMenu() {
  return (
    <div className="nav-bar">
        <div className="logo-container">
            <img src={logo} alt="logo"/>
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
  )
}

export default NavMenu

