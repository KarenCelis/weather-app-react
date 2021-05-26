import React from 'react';
import WeatherDetails from './WeatherDetails';

export default {
  title: 'WeatherDetails',
  component: WeatherDetails,
};

export const WeatherDetailsEx = () => <WeatherDetails humidity={20} wind={50} />;
