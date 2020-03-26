import { render } from '@testing-library/react';
import React from 'react';

import Inspiration from '.';

describe('<Inspiration />', () => {
  it('should render without crashing', () => {
    render(<Inspiration />);
  });
});
