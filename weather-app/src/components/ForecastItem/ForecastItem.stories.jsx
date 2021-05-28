import React from 'react';
import ForecastItem from './ForecastItem';

export default {
  title: 'ForecastItem',
  component: ForecastItem,
};

export const LunesSoleado = () => <ForecastItem weekDay='Miercoles' hour={12} state='drizzle' temperature={45} />;
