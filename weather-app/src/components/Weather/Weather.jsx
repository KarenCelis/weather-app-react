import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

//objeto
const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const renderState = (state) => {
  //primera forma de hacerlo
  // let Icon = stateByName[state];
  // if (Icon === undefined) {
  //   Icon = stateByName['sunny'];
  // }
//segunda forma
  const Icon = stateByName[state] === undefined ? stateByName['sunny'] : stateByName[state];
  //const Icon = stateByName[state] && stateByName[state];
  return <Icon />;
};
const Weather = ({ temperature, state }) => {
  return (
    <div>

      <IconContext.Provider value={{ size: '5em' }}>
        {renderState(state)}
      </IconContext.Provider>

      <Typography display='inline' variant='h3'>{temperature}</Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
