import React from 'react'
import store from './store'
import Project from './Project'

export default function Projects(){
  const projArray = store.map((project, i) => <Project key={i} {...project} />)
  return (
    <main role="main">
      <header role="banner">
        <h1>My Projects</h1>
      </header>
      {projArray}
           <i className="material-icons scroll-top hidden">keyboard_arrow_up</i>
    </main>
  )
}