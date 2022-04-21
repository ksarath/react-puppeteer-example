import React from 'react'
import { Link } from "react-router-dom";

import './App.css';
 
function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id='navigation' className='Nav-list'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/learn-react">Learn react</Link>
            </li>
            <li>
              <Link to="/cats">Facts about cats</Link>
            </li>
          </ul>
          <button id='disabled-action' disabled>Disabled action</button>
          <button id='enabled-action'>Enabled action</button>
          <div id='hidden-element' className='Display-none'>Hidden button</div>
        </nav>
      </div>
    </div>
  );
}

export default App;
