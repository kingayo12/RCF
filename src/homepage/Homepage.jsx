import React from 'react'
import "./Homepage.css"
import {Link, Outlet} from 'react-router-dom'


const Homepage = () => {

  return (
    <div className='homepage-container'>
      <div className="hompage-content">
        Welcome to Rcf week
        <Link to="Gallery">
        <button>Gallery</button>
        </Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Homepage