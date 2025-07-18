import { Link } from 'react-router-dom'
import logo from '../../../public/assets/shared/logo.svg'
import './header.css'

function Header() {
  return (
    <div className="nav-bar">
        <div className="logo-wrapper">
            <img className='logo' src={logo} alt="logo"/>
        </div>
         <ul className="menu">
        <Link to={'/'}  className="nav-state">
          {/* <span className="menu-no">00</span>HOME */}
          HOME
        </Link>
        <Link to={'/destination'} className="nav-state">
          <span className="menu-no">01</span>DESTINATION
        </Link>
        <li className="nav-state" >
          <span className="menu-no">02</span>CREW
        </li>
        <li className="nav-state" >
          <span className="menu-no">03</span>TECHNOLOGY
        </li>
      </ul>
    </div>
  )
}

export default Header
