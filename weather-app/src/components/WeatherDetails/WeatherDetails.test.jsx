import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';
import '@testing-library/jest-dom/extend-expect';

test('WeatherDetails render', async () => {
  const { findByText } = render(<WeatherDetails wind={10} humidity={86} />);

  const wind = await findByText(/10/);
  const humidity = await findByText(/86/);

  expect(wind).toHaveTextContent('Wind:10km/h');
  expect(humidity).toHaveTextContent('Humidity:86%');
});
