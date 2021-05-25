import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList';

const cities = [
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Caracas', country: 'Venezuela' },
  { city: 'Cancun', country: 'Mexico' },
  { city: 'Quito', country: 'Ecuador' },
  { city: 'Lima', country: 'Peru' },
];
test('CityList renders', async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);
  const items = await findAllByRole('listitem');
  //expect(items).toHaveLength(4);
});
