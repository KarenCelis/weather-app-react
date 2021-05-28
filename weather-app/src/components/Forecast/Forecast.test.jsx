import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';
import '@testing-library/jest-dom/extend-expect';

const forecastItemList = [
  { weekDay: 'Miercoles', hour: 12, state: 'clouds', temperature: 45 },
  { weekDay: 'Jueves', hour: 5, state: 'clouds', temperature: 45 },
  { weekDay: 'Martes', hour: 12, state: 'clouds', temperature: 52 },
  { weekDay: 'Miercoles', hour: 10, state: 'clouds', temperature: 45 },
  { weekDay: 'Lunes', hour: 6, state: 'clouds', temperature: 23 },
  { weekDay: 'Miercoles', hour: 8, state: 'clouds', temperature: 45 },
  { weekDay: 'Viernes', hour: 10, state: 'clouds', temperature: 89 },
];
test('Forecast render', async () => {

  const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />);
  const forecastItems = await findAllByTestId('forecast-item-container');
  expect(forecastItems).toHaveLength(7);

});
