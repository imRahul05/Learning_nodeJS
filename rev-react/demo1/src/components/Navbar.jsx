import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css' 


const Navbar = () => {
        return (
                <>
                        <nav className="navbar">
                                <Link className="nav-link" to='/home'>HOME</Link>
                                <Link className="nav-link" to='/login'>LOGIN</Link>
                        </nav>
                </>
        )
}

export default Navbar