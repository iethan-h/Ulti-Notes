/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import Home from "./components/home-page";
import LandingPage from "./components/landingPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
          {!sessionUser }
          <LandingPage />
        </Route>
          <Route path="/home">
            <Home />
          </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;