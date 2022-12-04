import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
function navbar() {
    return(
        <div className = "navbar">
            <Link to="/" onClick={()=>{window.location.href="/"}}> Home</Link>
            <Link to="/calendar" onClick={()=>{window.location.href="calendar"}}> Calendar</Link>
        </div>


    )
    
}
export default navbar