import React from 'react'

export default function Contact() {
  return (
    <main role="main">
      <header role="banner">
        <h1>Contact Me</h1>
      </header>
      <section>
        <h2>James Jenkins</h2>
        <ul className="contact">
          <li className="contact-list-item">
            <a href="mailto:me@jamesjenkins.dev">
              <i className="material-icons">email</i>me@jamesjenkins.dev
            </a>
          </li>
          <li className="contact-list-item">
            <a href="https://linkedin.com/in/jamesgjenkinsjr/" rel="noopener noreferrer" target="_blank">
              <i className="material-icons">people_alt</i>LinkedIn
            </a>
          </li>
          <li className="contact-list-item">
            <a href="https://github.com/jamesjenkinsjr" rel="noopener noreferrer" target="_blank">
              <i className="material-icons">code</i>GitHub
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
