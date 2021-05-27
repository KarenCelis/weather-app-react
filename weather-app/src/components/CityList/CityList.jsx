import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
//li es un item  tag html que tiene el role "listitem
//funcion que retorna otra funcion
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
  const { city, country } = cityAndCountry;
  //const { temperature, state } = weather;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} md={9}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={3}>
          {
            weather ?
              (<Weather temperature={weather.temperature} state={weather.state} />) : ('No data')
          }
        </Grid>

      </Grid>

    </ListItem>
  );

};
const CityList = ({ cities, onclickCity }) => {
  // const weather = { temperature: 10, state: 'sunny' };
  /**
   * {
   * [Buenos Aires - argentina]: { temperature : 10 , state : 'sunny'}
   * [Buenos Aires - argentina]: { temperature : 10 , state : 'sunny'}
   * [Buenos Aires - argentina]: { temperature : 10 , state : 'sunny'}
   * }
   */
  const [allWeather, setallWeather] = useState({});
  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appid = '';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
      axios.get(url)
        .then((response) => {
          const { data } = response;

          const temperature = data.main.temp;
          const state = 'sunny';

          const propName = `${city}-${country}`;
          const propValue = { temperature, state };

          console.log(propName);
          setallWeather((allWeather) => {
            {
              const result = { ...allWeather, [propName]: propValue };
              //console.log(result);
              return result; }
          });
        });
    };
    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country, countryCode);
    });

  }, [cities]);
  return (
    <List>
      {
        cities.map((cityAndCountry) => renderCityAndCountry(onclickCity)(cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
      }
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onclickCity: PropTypes.func.isRequired,
};

export default CityList;
