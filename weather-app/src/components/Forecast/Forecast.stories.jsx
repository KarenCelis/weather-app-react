import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast,
};
const forecastItemList = [
  { weekDay: 'Miercoles', hour: 12, state: 'clouds', temperature: 45 },
  { weekDay: 'Jueves', hour: 5, state: 'clouds', temperature: 45 },
  { weekDay: 'Martes', hour: 12, state: 'clouds', temperature: 52 },
  { weekDay: 'Miercoles', hour: 10, state: 'clouds', temperature: 45 },
  { weekDay: 'Lunes', hour: 6, state: 'clouds', temperature: 23 },
  { weekDay: 'Miercoles', hour: 8, state: 'clouds', temperature: 45 },
  { weekDay: 'Viernes', hour: 10, state: 'clouds', temperature: 89 },
];
export const ForecatsExpl = () => <Forecast forecastItemList={forecastItemList} />;
