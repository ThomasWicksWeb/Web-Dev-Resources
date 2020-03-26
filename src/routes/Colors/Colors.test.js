import { render } from '@testing-library/react';
import React from 'react';

import Colors from '.';

describe('<Colors />', () => {
  it('should render without crashing', () => {
    render(<Colors />);
  });
});
