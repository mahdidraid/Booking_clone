import React from 'react'
import "./Navebat.css"
export default function Navebar() {
  return (
    <div className='navebar'>
        <div className="navcontainer">
          <span className='logo'> Draidrya Bookig</span>
        <div>
            <button className='navButton'>Register</button>
            <button className='navButton'>Sign in</button>
        </div>
        </div>
    </div>
  )
}
