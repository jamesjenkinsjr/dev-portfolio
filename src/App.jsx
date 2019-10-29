import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
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
      <HashRouter basename="/">
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </HashRouter>
    )
  }
}

export default App
