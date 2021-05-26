import React from 'react';
//import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconContext } from 'react-icons';
import Link from '@material-ui/core/Link';
import { Link as LinkRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { WiDaySunny } from 'react-icons/wi';

const AppFrame = (props) => {
  return (
    <Grid container justify='center'>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton color='inherit' arial-label='menu'>
            <Link component={LinkRouter} to='/main' color='inherit' arial-label='menu'>
              <IconContext.Provider value={{ size: '2em' }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant='h6' color='inherit'>Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container item xs={12} sm={11} md={10} lg={8}>Mi aa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis, adipisci sapiente atque et ratione aliquam earum facere excepturi eveniet ducimus veritatis blanditiis deleniti sint neque illum beatae est libero.</Grid>
    </Grid>
  );
};

AppFrame.propTypes = {

};

export default AppFrame;
