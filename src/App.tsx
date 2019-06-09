import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import CreateTask from './pages/create-task/CreateTask';
import History from './pages/history/History';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <div className="App-header">
          <div className="App-header-logo">
            <img src="/smart-control-logo.png" alt=""/>
          </div>
          <ul>
            <li>
              <NavLink to="/" exact className="App-link" activeClassName="App-link_active">Создать задачу</NavLink>
            </li>
            <li>
              <NavLink to="/history" className="App-link" activeClassName="App-link_active">История задач</NavLink>
            </li>
          </ul>
        </div>

        <div className="App-outlet">
          <Route exact path="/" component={CreateTask} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/topics" component={History} />
        </div>
      </div>
    </Router>
  )
}

export default App;
