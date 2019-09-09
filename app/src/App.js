import React from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'

function App() {
  const state = {
    location: 'projects',
  }

  // const handleNavigation
  return (
    <div className="App">
      <Nav />
      {state.location === 'home' ? <Home /> : null}
      {state.location === 'contact' ? <Contact /> : null}
      {state.location === 'projects' ? <Projects /> : null}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </div>
  )
}

export default App
