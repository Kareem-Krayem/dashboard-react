import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Sidebar />
        <Route path='/' component={Main} />
      </Router>
    </div>
  );
}

export default App;
