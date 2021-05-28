import React from 'react';
import PropTypes from 'prop-types';
import { WiSnow, WiDayCloudy, WiRaindrop, WiThunderstorm, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

export const validValues = [
  'clouds',
  'clear',
  'rain',
  'snow',
  'drizzle',
  'thunderstorm',
];
  //objeto
const stateByName = {

  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
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
const IconState = ({ state }) => {
  return (
    <IconContext.Provider value={{ size: '6em' }}>
      {renderState(state)}
    </IconContext.Provider>
  );
};

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
