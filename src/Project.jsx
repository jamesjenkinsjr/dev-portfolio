import React from 'react'

export default function Project(props) {
  const icons = props.techIcons.map((icon, i) => (
    <li key={i}>
      <i className={icon}></i>
    </li>
  ))
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul className="project-sources">
        <li className="project-link">
          <a href={props.srcURL}>
            <i className="material-icons">code</i>View Code
          </a>
        </li>
        <li className="project-link">
          <a href={props.liveURL}>
            <i className="material-icons">visibility</i>View App
          </a>
        </li>
      </ul>
      <img
        src={props.img}
        className="project-img"
        alt={props.title + ' app screenshot'}
      />
      <ul className="project-tools">
        {icons}
      </ul>
    </section>
  )
}
