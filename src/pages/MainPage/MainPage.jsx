import React from 'react'
import { Hero,Legacy,StayConnected } from '../../components'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className='main__page'>
      <div className='main__page_Legacy'>
        <Legacy/>
      </div>
      <div className='main__page_Hero'>
        <Hero/>
      </div>
      <div className='main__page_StayConnected'>
        <StayConnected/>
      </div>
    </div>
  )
}

export default MainPage