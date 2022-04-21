import React from 'react'
import { Link } from "react-router-dom";

import './App.css';
 
function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul className='Nav-list'>
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
        </nav>
      </div>
    </div>
  );
}

export default App;
