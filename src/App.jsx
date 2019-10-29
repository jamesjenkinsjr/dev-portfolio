import React from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Projects from './ProjectList'
import $ from 'jquery'

const handleScrollBottom = function() {
  $(window).on('scroll', () => {
    let height = $(window).height()
    let scroll = $(window).scrollTop()

    if (scroll + 500 > height) {
      $('.scroll-top').removeClass('hidden')
    } else {
      $('.scroll-top').addClass('hidden')
    }
  })
}

const handleScrollClick = function() {
  $('body').on('click', '.scroll-top', () => {
    $('html').animate({ scrollTop: 0 }, 'slow')
  })
}

const handlers = function() {
  handleScrollBottom()
  handleScrollClick()
}

$(handlers)

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
      </div>
    )
  }
}

export default App
