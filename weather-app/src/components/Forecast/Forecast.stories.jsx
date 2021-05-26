import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast,
};
const forecastItemList = [
  { weekDay: 'Miercoles', hour: 12, state: 'sunny', temperature: 45 },
  { weekDay: 'Jueves', hour: 5, state: 'cloud', temperature: 45 },
  { weekDay: 'Martes', hour: 12, state: 'rain', temperature: 52 },
  { weekDay: 'Miercoles', hour: 10, state: 'fog', temperature: 45 },
  { weekDay: 'Lunes', hour: 6, state: 'rain', temperature: 23 },
  { weekDay: 'Miercoles', hour: 8, state: 'sunny', temperature: 45 },
  { weekDay: 'Viernes', hour: 10, state: 'cloudy', temperature: 89 },
];
export const ForecatsExpl = () => <Forecast forecastItemList={forecastItemList} />;
