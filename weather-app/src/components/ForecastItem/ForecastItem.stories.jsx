import React from 'react';
import ForecastItem from './ForecastItem';

export default {
  title: 'ForecastItem',
  component: ForecastItem,
};

export const LunesSoleado = () => <ForecastItem weekDay='Miercoles' hour={12} state='sunny' temperature={45} />;
