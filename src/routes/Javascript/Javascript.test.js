import { render } from '@testing-library/react';
import React from 'react';

import Javascript from '.';

describe('<Javascript />', () => {
  it('should render without crashing', () => {
    render(<Javascript />);
  });
});
