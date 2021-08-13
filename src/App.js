import React from 'react';
import './App.css';
import Nav from './Nav';
import Work from './Work';
import Title from './Title';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  document.title = "David Hybler"
  return (
    <Router>
    <div className="App">
      <body className="App-header">
        <Route path="/" exact component={Title} />
        <Route path="/" exact component={Nav} />
        <Route path="/work" component={Work}/>
      </body>
    </div>
    </Router>
  );
}

export default App;
