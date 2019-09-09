import React from 'react';
import BetterBeer from './assets/BetterBeer-preview.png'
import Bookmarker from './assets/Bookmarker-preview.png'

export default function Projects(){
  return (
    <main role="main">
      <header role="banner">
        <h1>My Projects</h1>
      </header>
      <section>
        <h2>Bookmarker</h2>
        <p>Create and maintain bookmarks for favorite websites</p>
        <ul className="project-sources">
          <li className="project-link">
            <a href="https://github.com/jamesjenkinsjr/JamesJ-bookmarks-app"
              ><i className="material-icons">code</i>View Code</a
            >
          </li>
          <li className="project-link">
            <a href="https://jamesjenkinsjr.github.io/JamesJ-bookmarks-app/"
              ><i className="material-icons">visibility</i>View App</a
            >
          </li>
        </ul>
        <img
          src={Bookmarker}
          className="project-img"
          alt="Bookmarker app screenshot"
        />
        <ul className="project-tools">
          <li><i className="devicon-html5-plain"></i></li>
          <li><i className="devicon-css3-plain-wordmark"></i></li>
          <i className="devicon-jquery-plain"></i>
        </ul>
      </section>

      <section>
        <h2>BetterBeer</h2>
        <p>Search for user-submitted deals on beer</p>
        <ul className="project-sources">
          <li className="project-link">
            <a href="https://github.com/jamesjenkinsjr/betterbeer-app"
              ><i className="material-icons">code</i>View Code</a
            >
          </li>
          <li className="project-link">
            <a href="https://betterbeer.herokuapp.com/search"
              ><i className="material-icons">visibility</i>View App</a
            >
          </li>
        </ul>
        <img
          src={BetterBeer}
          className="project-img"
          alt="BetterBeer app screenshot"
        />
        <ul className="project-tools">
          <li><i className="devicon-html5-plain"></i></li>
          <li><i className="devicon-css3-plain-wordmark"></i></li>
          <li><i className="devicon-nodejs-plain"></i></li>
          <li><i className="devicon-react-original"></i></li>
        </ul>
      </section>
      <i className="material-icons scroll-top hidden">keyboard_arrow_up</i>
    </main>
  )
}