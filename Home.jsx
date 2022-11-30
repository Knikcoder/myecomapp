import React from 'react'
import Products, { Context } from './Context'

export default function 
() {
  return (
    <div className='hero'>
        <div class="card text-bg-dark">
  <img src="/pictures/background.jpg" class="card-img" alt="Sorry" height="700px"/>
  <div className="card-img-overlay d-flex flex-column ">
    <div className='container'>
    <h1 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h1>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
    </div>
    
    <Context/>
  </div>
</div>
    </div>
  )
}
