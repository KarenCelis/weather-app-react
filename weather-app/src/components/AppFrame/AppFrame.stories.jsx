import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppFrame from './AppFrame';

export default {
  title: 'App Frame',
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique quo enim, praesentium maiores quibusdam, velit, adipisci alias non excepturi porro. Accusamus quaerat illum repellendus qui odit nemo vitae quo?
    </AppFrame>
  </Router>
);
