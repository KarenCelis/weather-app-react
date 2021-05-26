import React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppFrame from '../components/AppFrame';
import CityList from '../components/CityList';

const MainPage = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    //permite trabajar con la url y cambiarla
    history.push('/city');
  };
  const cities = [
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Caracas', country: 'Venezuela' },
    { city: 'Cancun', country: 'Mexico' },
    { city: 'Quito', country: 'Ecuador' },
    { city: 'Lima', country: 'Peru' },
  ];
  return (
    <AppFrame>
      <Paper elevation={4}>
        <h2>List of cities</h2>
        <CityList cities={cities} onclickCity={onClickHandler} />
      </Paper>

      {/* <button type='button' onClick={onClickHandler}>Ir a cityPage</button> */}
    </AppFrame>
  );
};

export default MainPage;
