import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
      <nav role="navigation">
      <ul className="nav-bar">
        <li>
          <Link to="/" >
            <i className="material-icons">home</i>Home
          </Link>
        </li>
        <li>
          <Link to="/contact" >
            <i className="material-icons">contact_mail</i>Contact
          </Link>
        </li>
        <li>
          <Link to="/projects" >
            <i className="material-icons">code</i>Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}
