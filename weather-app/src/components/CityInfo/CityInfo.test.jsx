import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo';

test('CityInfo render', async () => {

  const city = 'London';
  const country = 'England';
  const { findAllByRole } = render(<CityInfo city={city} country={country} />);
  //va a buscar todos los componentes que sean heading
  const cityAndCountyComponent = await findAllByRole('heading');

  expect(cityAndCountyComponent[0]).toHaveTextContent(city);
  expect(cityAndCountyComponent[1]).toHaveTextContent(country);

});
