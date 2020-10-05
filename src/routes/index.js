
import React from 'react'
import Monitores from '../page/monitores'
import Monitorias from '../page/monitorias'
import Nav from '../components/header'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Home from '../page/home'

const Rt = () => {
  return (
    <Router>
      <Nav />
      <div style={{ margin: 30 }}>
        <Switch>
        <Router path="/" exact>
            <Home />
          </Router>
          <Router path="/monitorias" exact>
            <Monitorias />
          </Router>
          <Router path="/monitores" exact>
            <Monitores />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default Rt