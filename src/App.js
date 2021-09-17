import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login';
import Dashboard from './components/Dashboard/index'
import Preferences from './components/Preferences/index'

import { useToken } from './components/Token.js/Token';

const App = () => {
  const {token, setToken} = useToken()

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="wrapper">
      <h1>Small Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
