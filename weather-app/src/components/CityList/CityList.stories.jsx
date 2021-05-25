import React from 'react';
import CityList from './CityList';

export default {
  title: 'CityList',
  component: CityList,
};
const cities = [
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Caracas', country: 'Venezuela' },
  { city: 'Cancun', country: 'Mexico' },
  { city: 'Quito', country: 'Ecuador' },
  { city: 'Lima', country: 'Peru' },
];

export const CityListExample = () => <CityList cities={cities} />;
