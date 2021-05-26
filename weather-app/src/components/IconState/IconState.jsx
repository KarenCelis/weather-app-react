import React from 'react';
import PropTypes from 'prop-types';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

export const validValues = [
  'cloud',
  'cloudy',
  'fog',
  'sunny',
  'rain,',
];
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
const IconState = ({ state }) => {
  return (
    <IconContext.Provider value={{ size: '5em' }}>
      {renderState(state)}
    </IconContext.Provider>
  );
};

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
