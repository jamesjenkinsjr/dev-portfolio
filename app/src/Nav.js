import React from 'react'

export default function Nav() {
  return (
    <nav role="navigation">
      <ul className="nav-bar">
        <li>
          <a href="/">
            <i className="material-icons">home</i>Home
          </a>
        </li>
        <li>
          <a href="/contact">
            <i className="material-icons">contact_mail</i>Contact
          </a>
        </li>
        <li>
          <a href="/projects">
            <i className="material-icons">code</i>Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}
