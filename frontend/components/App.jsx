import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GroupFormContainer from './group_form/group_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash';
import GroupFindContainer from './group_find/group_find_container';

import {
  Route,
  Link,
  HashRouter,
  Switch,
  Redirect
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <ProtectedRoute exact path="/create" component={GroupFormContainer}/>
      <ProtectedRoute exact path="/find" component={GroupFindContainer}/>
      <Route exact path="/" component={Splash}/>
    </Switch>
    <footer>

    </footer>
   </div>
);

export default App;
