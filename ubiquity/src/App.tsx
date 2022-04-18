import React from 'react';
import { Description, Main } from './components/index'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css';

function App() {

  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/product/:productid' element={<Description />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
