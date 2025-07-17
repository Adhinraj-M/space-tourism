import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Destination from '../Pages/Destination/Destination'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/destination' element={<Destination/>}></Route>
    </Routes>
  )
}

export default AppRouter