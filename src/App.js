import React from 'react';
import { Route, Link } from 'react-router-dom';
import Shops from './components/Shops';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/all">すべて</Link></li>
        <li><Link to="/lunch">ランチ</Link></li>
        <li><Link to="/dinner">ディナー</Link></li>
      </ul>
      <Route path="/all" component={Shops} />
    </div>
  );
}

export default App;
