import React from 'react';
import ReactDOM from 'react-dom';
import Monitores from './components/monitores'
import Monitorias from './components/monitorias'

import Nav from './components/header'

import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Nav />
  
<Switch>

<Router path="/add_monitor" exact>
  
  </Router>
    
  <Router path="/monitorias" exact>
  <br/>
  <Monitorias />
  </Router>

  <Router path="/monitores" exact>
  <br/>
  <Monitores />
  </Router>
 
  <Router path="/" exact>
  <br/>
  
  
  </Router>

 


</Switch>

    
    
    
  </Router>,
  document.getElementById('root')
);

