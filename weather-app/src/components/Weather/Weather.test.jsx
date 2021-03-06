import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';
import '@testing-library/jest-dom/extend-expect';

test('Weather render', async () => {
  //AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={10} state='drizzle' />);
  const temp = await findByRole('heading');
  expect(temp).toHaveTextContent('10');

});
