import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import CityList from './CityList';

export default {
  title: 'CityList',
  component: CityList,
};
const cities = [
  { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR' },
  { city: 'Caracas', country: 'Venezuela', countryCode: 'VE' },
  { city: 'Cancun', country: 'Mexico', countryCode: 'MX' },
  { city: 'Quito', country: 'Ecuador', countryCode: 'EC' },
  { city: 'Lima', country: 'Peru', countryCode: 'PE' },
];

export const CityListExample = () => <CityList cities={cities} onclickCity={action('click en city')} />;
