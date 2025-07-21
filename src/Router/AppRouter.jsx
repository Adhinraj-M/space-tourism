import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Destination from '../Pages/Destination/Destination'
import Crew from '../Pages/Crew/Crew'
import Technology from '../Pages/Technology/Technology'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/crew' element={<Crew/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
    </Routes>
  )
}

export default AppRouter