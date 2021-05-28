import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppFrame from '../components/AppFrame';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastChart';
import Forecast from '../components/Forecast';

const CityPage = (props) => {
  const city = 'London';
  const country = 'United Kingdom';
  const state = 'snow';
  const temperature = 45;
  const humidity = 78;
  const wind = 75;
  const data = [
    {
      'dayHour': 'Jue 18',
      'min': 14,
      'max': 22,
    },
    {
      'dayHour': 'Vie 06',
      'min': 18,
      'max': 27,
    },
    {
      'dayHour': 'Vie 12',
      'min': 18,
      'max': 28,
    },
    {
      'dayHour': 'Vie 18',
      'min': 18,
      'max': 25,
    },
    {
      'dayHour': 'Sab 06',
      'min': 15,
      'max': 22,
    },
    {
      'dayHour': 'Sab 12',
      'min': 12,
      'max': 19,
    },
  ];
  const forecastItemList = [
    { weekDay: 'Miercoles', hour: 12, state: 'drizzle', temperature: 45 },
    { weekDay: 'Jueves', hour: 5, state: 'drizzle', temperature: 45 },
    { weekDay: 'Martes', hour: 12, state: 'drizzle', temperature: 52 },
    { weekDay: 'Miercoles', hour: 10, state: 'drizzle', temperature: 45 },
    { weekDay: 'Lunes', hour: 6, state: 'drizzle', temperature: 23 },
    { weekDay: 'Miercoles', hour: 8, state: 'drizzle', temperature: 45 },
    { weekDay: 'Viernes', hour: 10, state: 'drizzle', temperature: 89 },
  ];
  return (
    <AppFrame>
      <Grid container justify='space-around' direction='column' spacing={2}>
        <Grid item container xs={12} justify='center' alignItems='flex-end'>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container justify='center'>
          <Weather temperature={temperature} state={state} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>
          <ForecastChart data={data} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>

  );
};

export default CityPage;
