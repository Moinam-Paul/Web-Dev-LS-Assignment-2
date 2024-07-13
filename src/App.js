import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import ToggleDarkorLight from './Components/ToggleDarkorLight';
import './App.css';

function App() {
  return(
    <div className="App">
      <Header />
      <Body />
      <div className="container">
                <div className="d-flex justify-content-center m-2">
                <ToggleDarkorLight />
                </div>
      </div>
    </div>
  )
}

export default App;
