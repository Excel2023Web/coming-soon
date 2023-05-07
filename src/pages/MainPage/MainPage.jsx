import React from 'react'
import { Hero,Legacy,StayConnected } from '../../components'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className='main__page'>
      <Legacy/>
      <Hero/>
      <StayConnected/>
    </div>
  )
}

export default MainPage