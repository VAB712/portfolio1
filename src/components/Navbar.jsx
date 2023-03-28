import React from 'react'
import './Navbar.css'
import Profile from '../img/navimg.jpg'
// import {Hashlink as Link} from 'react-router-hash-link'


function Navbar(props) {
    return (
        <div className="n-full">
            <div className="n-top">
                <img classname="fix" src={Profile}  alt="#" />
                <h2><bold>Vaibhav</bold></h2>
            </div>
            <div className="n-bottom" >
                <ul className='nav-ul' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
    <li><button className="button">Contact</button></li>
                </ul>
            </div>
        </div>        
    )
}

export default Navbar
