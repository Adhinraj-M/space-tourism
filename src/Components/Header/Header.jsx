import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../public/assets/shared/logo.svg'
import './header.css'

function Header() {
  
  const navigate = useNavigate()
  const location =useLocation() 

  const navList = ['home','destination','crew','technology']

  const path = location.pathname === '/' ? 'home' : location.pathname.slice(1)
  let active = navList.indexOf(path)

 
  const handleNavigation = (index) => {
    const path = navList[index]
    
       navigate(path === 'home'? '/': `/${path}`)
  };

  return (
    <header className="nav-bar">
        <div className="logo-wrapper">
            <img className='logo' src={logo} alt="logo"/>
        </div>
         <ul className="menu">
         {       
            navList.map((item,i)=>(
            <li className={`nav-state ${active === i ? 'active':'' }`} key={item} onClick={()=>handleNavigation(i)}>
              <span>0{i}</span>{item}
            </li>
         ))}
      </ul>

    </header>
  )
}

export default Header