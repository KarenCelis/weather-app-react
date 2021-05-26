import React from 'react';
import { useHistory } from 'react-router-dom';

const MainPage = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    //permite trabajar con la url y cambiarla
    history.push('/city');
  };
  return (
    <div>
      Main Page
      <button type='button' onClick={onClickHandler}>Ir a cityPage</button>
    </div>
  );
};

export default MainPage;
