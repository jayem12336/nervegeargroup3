
import React, { useState, useEffect } from 'react'

import firebase from './utils/firebase'

//Routers
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './Routers/PrivateRoute'
import PublicRoute from './Routers/PublicRoute'

//Components/Pages
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";
import Login from "./pages/Login";
import ContactAbout from "./pages/ContactAbout";
import Signup from "./pages/Signup";
import Stores from "./pages/Stores";

function App() {
  const [values, setValues] = useState({
    isAuthenticated: false,
    isLoading: true
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setValues({ isAuthenticated: true, isLoading: false });
      } else {
        // No user is signed in.
        setValues({ isAuthenticated: false, isLoading: false });
      }
      console.log("useEffect", user);
    });
  }, [])

  if (values.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <PublicRoute
          component={Login}
          path="/login"
          isAuthenticated={values.isAuthenticated}
          restricted={true}
        />
        <PublicRoute
          component={Signup}
          path="/signup"
          isAuthenticated={values.isAuthenticated}
          restricted={true}
        />
        <PrivateRoute
          component={HomePage}
          isAuthenticated={values.isAuthenticated}
          path="/home"
        />
        <PrivateRoute
          component={Profile}
          isAuthenticated={values.isAuthenticated}
          path="/profile"
        />
        <PrivateRoute
          component={ContactAbout}
          isAuthenticated={values.isAuthenticated}
          path="/contactabout"
        />
        <PrivateRoute
          component={Stores}
          isAuthenticated={values.isAuthenticated}
          path="/stores"
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </Router>
  );
}

export default App;
