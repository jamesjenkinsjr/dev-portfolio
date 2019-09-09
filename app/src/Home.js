import React from 'react';
import Hero from './assets/hero-photo.png'

export default function Home() {
  return(
    <main role="main">
          <header role="banner">
            <h1>Hi, I'm James</h1>
            <img
              src={Hero}
              alt="james jenkins profile"
              className="hero"
            />
            <p>
              a programmer with a tester's eye for finding bugs and a healthy
              fear of making 'em
            </p>
          </header>
          <section>
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>Git/GitHub</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>ES6</li>
              <li>jQuery</li>
              <li>ReactJS</li>
              <li>MySQL</li>
            </ul>
          </section>
          <section>
            <h2>Bio</h2>
            <p className="bio">
              Full-stack programmer working out of sunny, swampy Gainesville,
              FL. I've been attracted to technology in various forms my entire
              life, and have ample experience supporting and testing software
              for companies both big and small. I love gaming, craft beer,
              exploring new cities, and just started cycling!
            </p>
            <p className="bio">
              As with my interests, my professional attitude is one of balance:
              embrace challenges, learn from missteps, and remember to enjoy
              yourself along the way.
            </p>
          </section>
        </main>
  )
}