import React from 'react'

export default function Nav(props) {
  return (
    <nav role="navigation">
      <ul className="nav-bar">
        <li>
          <a href="/" onClick={e => props.handleNav(e, 'home')}>
            <i className="material-icons">home</i>Home
          </a>
        </li>
        <li>
          <a href="/contacts" onClick={e => props.handleNav(e, 'contact')}>
            <i className="material-icons">contact_mail</i>Contact
          </a>
        </li>
        <li>
          <a href="/projects" onClick={e => props.handleNav(e, 'projects')}>
            <i className="material-icons">code</i>Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}
