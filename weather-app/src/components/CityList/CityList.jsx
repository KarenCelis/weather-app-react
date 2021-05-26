import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
//li es un item  tag html que tiene el role "listitem
//funcion que retorna otra funcion
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} md={9}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Weather temperature={10} state='cloud' />
        </Grid>

      </Grid>

    </ListItem>
  );

};
const CityList = ({ cities, onclickCity }) => {
  return (
    <List>
      {
        cities.map((cityAndCountry) => renderCityAndCountry(onclickCity)(cityAndCountry))
      }
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  onclickCity: PropTypes.func.isRequired,
};

export default CityList;
