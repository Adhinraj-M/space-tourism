import { useEffect, useState } from 'react'
import Header from '../../Components/Home/Header/Header.jsx'
import Hero from '../../Components/Home/Hero/Hero.jsx'
import '../Home/home.css'

function Home() {

  const [screenWidth,setScreenWidth] = useState(window.innerWidth)
  console.log(screenWidth)

  useEffect(()=>{
    setScreenWidth(window.innerWidth)
  },[window.innerWidth])

  return (
    <div className='home-container'>
      <Header/>
      <Hero/>
    </div>
  )
}

export default Home