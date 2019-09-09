import React from 'react'
import './App.css'
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';

function App() {
  const state = {
    location: 'contact'
  }
  return (
    <div className="App">
      <body>

        {state.location === 'home' ? (<Home />) : null}
        {state.location === 'contact' ? (<Contact />) : null}
        <Nav />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      </body>
    </div>
  )
}

export default App
