import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
//li es un item  tag html que tiene el role "listitem
const renderCityAndCountry = (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <li key={city}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} md={8}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Weather temperature={10} state='cloud' />
        </Grid>

      </Grid>

    </li>
  );

};
const CityList = ({ cities }) => {
  return (
    <ul>
      {
        cities.map((cityAndCountry) => renderCityAndCountry(cityAndCountry))
      }
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
