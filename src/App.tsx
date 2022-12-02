import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage';
import CreatureList from "./pages/creature/creature-list";
import WeaponList from './pages/weapon/weapon-list';
import WeaponDetail from './pages/weapon/weapon-detail';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
import './App.css';
 
const App: FunctionComponent = () => {
 
  return (
    <Router>
      <body>
      <nav> 
        <div className="nav-wrapper grey darken-4">
          <Link to="/" className="brand-logo center amber-text">Elden Ring</Link>
        </div> 
      </nav>
      <Switch>
          <PrivateRoute exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/creatures" component={CreatureList} />
          <PrivateRoute exact path="/weapons" component={WeaponList} />
          <PrivateRoute path="/weapons/:id" component={WeaponDetail} />
          <Route component={PageNotFound} />
      </Switch>
      </body>
    </Router>
  );
}
 
export default App;