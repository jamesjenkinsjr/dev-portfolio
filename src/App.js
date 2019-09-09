import React from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      location: 'home',
    }
  }

  handleNavigation = (e, location) => {
    e.preventDefault()
    this.setState({
      location: location,
    })
  }

  render() {
    return (
      <div className="App">
        <Nav handleNav={this.handleNavigation} />
        {this.state.location === 'home' ? <Home /> : null}
        {this.state.location === 'contact' ? <Contact /> : null}
        {this.state.location === 'projects' ? <Projects /> : null}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      </div>
    )
  }
}

export default App
