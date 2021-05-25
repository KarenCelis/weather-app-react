import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';
import '@testing-library/jest-dom/extend-expect';

test('Weather render', async () => {
  //AAA Arrange Act Assert
  const { findAllByRole } = render(<Weather temperature={10} state='cloud' />);
  const temp = await findAllByRole('heading');
  expect(temp[0]).toHaveTextContent('10');
  //expect(temp[1]).toHaveTextContent('cloud');
});
