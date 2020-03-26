import { render } from '@testing-library/react';
import React from 'react';

import Backgrounds from '.';

describe('<Backgrounds />', () => {
  it('should render without crashing', () => {
    render(<Backgrounds />);
  });
});
