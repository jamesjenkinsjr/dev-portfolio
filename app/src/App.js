import React from 'react'
import './App.css'
import Nav from './Nav';
import Home from './Home';

function App() {
  const state = {
    location: 'home'
  }
  return (
    <div className="App">
      <body>

        {state.location === 'home' ? (<Home />) : null}
        <Nav />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      </body>
    </div>
  )
}

export default App
