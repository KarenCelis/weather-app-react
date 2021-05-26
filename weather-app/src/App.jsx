import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import WelcomePage from './pages/WelcomePage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Grid container justify='center' direction='row'>
      <Grid item sm={10}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <WelcomePage />
            </Route>
            <Route exact path='/main'>
              <MainPage />
            </Route>
            <Route exact path='/city'>
              <CityPage />
            </Route>
            <Route>
              <NotFoundPage />

            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
};

export default App;
